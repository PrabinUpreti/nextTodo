import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex justify-between items-center bg-slate-800 px-8 py-3">
      <Link className="text-white font-bold" href={"/"}>
        my ToDo
      </Link>
      <Link className="bg-white p-2 px-4" href={"/addTopic"}>
        Add Topic
      </Link>
    </nav>
  );
}
