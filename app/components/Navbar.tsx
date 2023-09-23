import Link from "next/link";

export default function Navbar() {
  return (
    <header>
      <nav>
        <h1>
          <Link href={"/"}>Gallery</Link>
        </h1>
      </nav>
    </header>
  );
}
