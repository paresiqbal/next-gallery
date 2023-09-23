import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-black sticky top-0 z-10">
      <nav>
        <h1>
          <Link href={"/"}>Gallery</Link>
        </h1>
      </nav>
    </header>
  );
}
