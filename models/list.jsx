import mongoose, { Schema } from "mongoose";
const listSchema = new Schema(
  {
    item: String,
    decription: String,
  },
  {
    timestamps: true,
  }
);
const List = mongoose.models.List || mongoose.model("List", listSchema);
export default List;
