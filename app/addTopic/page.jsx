import Form from "@/components/Form";

export default function AddTopic() {
  return (
    <Form
      listPlaceholder="Add Item"
      decPlaceholder="Add Decription"
      btnName="Add List"
      action="add"
    />
  );
}
