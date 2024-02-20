import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";

const getLists = async () => {
  try {
    const res = await fetch("https://prupreti.vercel.app/api/list", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};

export default async function List() {
  const { lists } = await getLists();
  return (
    <>
      {lists.map((l) => (
        <div
          key={l._id}
          className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"
        >
          <div>
            <h2 className="font-bold text-2xl">{l.item}</h2>
            <div>{l.decription}</div>
          </div>
          <div className="flex gap-2">
            <RemoveBtn id={l._id} />
            <Link href={`/edit/${l._id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
