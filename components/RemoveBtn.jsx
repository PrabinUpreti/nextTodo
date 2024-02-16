"use client";
import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";

export default function RemoveBtn(props) {
  const router = useRouter();
  const deleteItem = async () => {
    const conformed = confirm("Are you Sure to delete?");
    if (!conformed) {
      return;
    }
    try {
      const res = await fetch(`http://localhost:3000/api/list?id=${props.id}`, {
        cache: "no-store",
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      });
      if (!res.ok) {
        throw new Error("Couldn't Delete");
      } else {
        router.refresh();
      }
    } catch (error) {
      console.log(error);
    }
    console.log(`http://localhost:3000/api/list?id=${props.id}`);
  };
  return (
    <button onClick={deleteItem} className="text-red-400">
      <HiOutlineTrash size={24}></HiOutlineTrash>
    </button>
  );
}
