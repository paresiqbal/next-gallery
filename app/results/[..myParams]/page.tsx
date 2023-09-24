import Gallery from "@/app/components/Gallery";

type Props = {
  params: {
    myParams: (string | undefined)[];
  };
};

export function generateMedadata({ params: { myParams } }: Props) {
  const topic = myParams?.[0] ?? "curated";
  const page = myParams?.[1] ?? "1";

  return {
    title: `Results for ${myParams} - Page ${page}`,
  };
}

export default function searchResults({ params: { myParams } }: Props) {
  return <Gallery topic={myParams} />;
}
