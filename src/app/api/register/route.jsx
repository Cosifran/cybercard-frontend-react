//import conect databas
import {connectToDB} from "@/utils/database";
//Import modelDatabase
import Register from "@/models/register";
export const POST = async (req, res) => {
  const {name, email, phone, scort, cuestion} = await req.json();

  try {
    connectToDB();
    const newRegister = new Register({name, email, phone, scort, cuestion});
    await newRegister.save();

    return new Response(JSON.stringify(newRegister), {status: 201});
  } catch (error) {}
};
