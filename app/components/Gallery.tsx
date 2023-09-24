import fetchImages from "@/lib/fetchImages";
import type { ImagesResults } from "@/models/Images";
import ImgContainer from "./ImgContainer";

// helpers
import addBluredDataUrl from "@/lib/getBase64";

type Props = {
  topic?: string | undefined;
  page?: string | undefined;
};

export default async function Gallery({ topic = "curated", page }: Props) {
  let url;
  if (topic === "curated" && page) {
    // Browsing beyond home
    url = `https://api.pexels.com/v1/curated?page=${page}`;
  } else if (topic === "curated") {
    // Home page
    url = "https://api.pexels.com/v1/curated";
  } else if (!page) {
    // First page of result
    url = `https://api.pexels.com/v1/search?query=${topic}`;
  } else {
    // search rsult beyond fist page
    url = `https://api.pexels.com/v1/search?query=${topic}&page=${page}`;
  }

  const images: ImagesResults | undefined = await fetchImages(url);

  // return response
  if (!images || images.per_page === 0)
    return <h2 className="m-4 text-2xl font-bold">No Images Found</h2>;

  const photoWithBlur = await addBluredDataUrl(images);

  return (
    <section className="px-1 my-3 grid grid-cols-gallery auto-rows-[10px]">
      {photoWithBlur.map((photo) => (
        <ImgContainer photo={photo} key={photo.id} />
      ))}
    </section>
  );
}
