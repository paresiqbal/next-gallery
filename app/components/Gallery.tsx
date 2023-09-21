import fetchImages from "@/lib/fetchImages";
import type { ImageResults } from "@/models/Images";

export default async function Gallery() {
  const url = "https://api.pexels.com/v1/curated";

  const images: ImageResults | undefined = await fetchImages(url);
  return <div>Gallery</div>;
}
