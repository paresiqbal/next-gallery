import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-black sticky top-0 z-10">
      <nav className="flex flex-col gap-4 sm:flex-row sm:justify-between items-center p-4 font-bold max-w-6xl mx-auto text-white">
        <h1>
          <Link href={"/"}>Gallery</Link>
        </h1>
      </nav>
    </header>
  );
}
