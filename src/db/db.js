import { connect } from "mongoose";

connect(process.env.URI)
  .then(() => console.log("BD is connected"))
  .catch((err) => console.error(err));
