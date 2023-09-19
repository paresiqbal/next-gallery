import type { ImageResults } from "@/models/Images";
import { ImagesSchemaWithPhoto } from "@/models/Images";
import env from "./env";

export default async function fetchImages(
  url: string
): Promise<ImageResults | undefined> {
  try {
    const res = await fetch(url, {
      headers: {
        Authorization: env.PEXEL_API_KEY,
      },
    });
    if (!res.ok) throw new Error("Fetch Images error!\n");

    const imageResults: ImageResults = await res.json();
    console.log(imageResults);

    // Parse data with ZOD Schema
    const parseData = ImagesSchemaWithPhoto.parse(imageResults);
    if (parseData.total_result === 0) return undefined;

    return parseData;
  } catch (err) {
    // Show in terminal console
    if (err instanceof Error) console.log(err.stack);
  }
}
