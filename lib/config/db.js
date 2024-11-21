import mongoose from "mongoose";

export const ConnectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://maximozev:EC5YWEnEcs4UacBq@cluster0.zeawq.mongodb.net/tasky"
  );
  console.log("DB Connected");
};
