import fetchImages from "@/lib/fetchImages";
import type { ImagesResults } from "@/models/Images";
import ImgContainer from "./ImgContainer";

// helpers
import addBluredDataUrl from "@/lib/getBase64";

type Props = {
  topic?: string | undefined;
};

export default async function Gallery({ topic }: Props) {
  const url = !topic
    ? "https://api.pexels.com/v1/curated"
    : `https://api.pexels.com/v1/search?query=${topic}`;

  const images: ImagesResults | undefined = await fetchImages(url);

  // return response
  if (!images)
    return <h2 className="m-4 text-2xl font-bold">No Images Found</h2>;

  const photoWithBlur = await addBluredDataUrl(images);

  return (
    <section className="px-2 my-3 grid gap-2 grid-cols-gallery auto-rows-[10px]">
      {photoWithBlur.map((photo) => (
        <ImgContainer photo={photo} key={photo.id} />
      ))}
    </section>
  );
}
