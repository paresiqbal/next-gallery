import type { ImagesResults } from "@/models/Images";

function getPageNumber(url: string) {
  const { searchParams } = new URL(url);

  return searchParams.get("page");
}

export default function getPrevPage(images: ImagesResults) {
  let nextPage = images?.next_page ? getPageNumber(images.next_page) : null;

  const prevPage = images?.prev_page ? getPageNumber(images.prev_page) : null;

  const totalPage = 
}
