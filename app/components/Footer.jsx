import Link from "next/link";

type Props = {
  topic: string,
  page: string | undefined,
  prevPage: string | null,
  nextPage: string | null,
};

export default function Footer() {
  return <div>Footer</div>;
}
