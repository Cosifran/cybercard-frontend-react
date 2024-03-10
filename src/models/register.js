import {model, models, Schema} from "mongoose";

const ResgisterShema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  phone: {
    type: String,
    required: true,
    trim: true,
  },
});

const Register = models.Register || model("Register", ResgisterShema);

export default Register;
