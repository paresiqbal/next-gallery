import Gallery from "@/app/components/Gallery";

type Props = {
  params: {
    term: string;
  };
};

export function generateMedadata({ params: { term } }: Props) {
  return {
    title: `Results for ${term}`,
  };
}

export function searchResults({ params: { term } }: Props) {
  return <Gallery topic={term} />;
}
