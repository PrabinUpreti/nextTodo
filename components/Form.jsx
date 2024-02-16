"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const switchTool = (param) => {
  console.log(param);
  let sw = {};
  if (param.action == "edit") {
    sw = {
      ...sw,
      url: `http://localhost:3000/api/list/${param.id}`,
      initialDecription: param.decription,
      initialItem: param.item,
      method: "PUT",
      isEdit: true,
    };
    return sw;
  } else {
    sw = {
      ...sw,
      url: `http://localhost:3000/api/list`,
      initialDecription: "",
      initialItem: "",
      method: "POST",
      isEdit: false,
    };
    return sw;
  }
};

export default function Form(props) {
  const switchT = switchTool(props);
  console.log(switchT);

  const [decription, setDecription] = useState(switchT.initialDecription);
  const [item, setItem] = useState(switchT.initialItem);

  const router = useRouter();

  const handelSubmit = async (e) => {
    e.preventDefault();
    if (!item || !decription) {
      alert("Item and Decription is required!");
      return;
    }
    console.log(switchT.url);
    let newObj;
    if (switchT.isEdit) {
      newObj = JSON.stringify({ newItem: item, newDecription: decription });
    } else {
      newObj = JSON.stringify({ item, decription });
    }
    console.log(newObj);

    try {
      const res = await fetch(switchT.url, {
        cache: "no-store",
        method: switchT.method,
        headers: {
          "Content-type": "application/json",
        },
        body: newObj,
      });
      if (res.ok) {
        router.push("/");
        router.refresh();
      } else {
        throw new Error("Couldn't Save Data");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handelSubmit} className="flex flex-col gap-3">
      <input
        onChange={(e) => setItem(e.target.value)}
        type="text"
        placeholder={props.listPlaceholder}
        name=""
        id=""
        value={item}
        className="border border-slate-500 px-8 py-2"
      />
      <input
        onChange={(e) => setDecription(e.target.value)}
        type="text"
        placeholder={props.decPlaceholder}
        name=""
        id=""
        value={decription}
        className="border border-slate-500 px-8 py-2"
      />
      <button
        type="submit"
        className="bg-green-600 font-bold text-white py-3 px-6 "
      >
        {props.btnName}
      </button>
    </form>
  );
}
