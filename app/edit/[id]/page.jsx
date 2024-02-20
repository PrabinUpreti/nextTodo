import Form from "@/components/Form";

const getItemById = async (id) => {
  try {
    const res = await fetch(`https://prupreti.vercel.app/api/list/${id}`, {
      method: "GET",
    });
    if (!res.ok) {
      throw new Error("Couldn't edit");
      return;
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function Edit(props) {
  const { list } = await getItemById(props.params.id);
  return (
    <Form
      id={list._id}
      item={list.item}
      decription={list.decription}
      listPlaceholder="Edit Item"
      decPlaceholder="Edit Decription"
      btnName="Edit List"
      action="edit"
    />
  );
}
