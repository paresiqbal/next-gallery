import { getPlaiceholder } from "plaiceholder";
import type { Photo, ImagesResults } from "@/models/Images";

async function getBase64(imageUrl: string) {
  try {
    const res = await fetch(imageUrl);
    // check status
    if (!res.ok) {
      throw new Error(`Failed to fetch image ${res.status} ${res.statusText}`);
    }

    const buffer = await res.arrayBuffer();
    const { base64 } = await getPlaiceholder(Buffer.from(buffer));

    return base64;
  } catch (e) {
    if (e instanceof Error) console.log(e.stack);
  }
}

export default async function addBluredDataUrl(
  images: ImagesResults
): Promise<Photo[]> {
  // make all request at once instead of waiting each one -  avoiding waterfall
  const base64Promises = images.photos.map((photo) =>
    getBase64(photo.src.large)
  );
  // resolve all promise
  const base64Resolve = await Promise.all(base64Promises);

  const photosWithBlur: Photo[] = images.photos.map((photo, i) => {
    photo.blurredDataUrl = base64Resolve[i];
    return photo;
  });

  return photosWithBlur;
}
