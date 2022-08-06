// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input." });
      return;
    }
    const newMessage = {
      email,
      name,
      message,
    };
    console.log(newMessage, "New Message");

    res
      .status(201)
      .json({ message: "Successfully stored messsage!", message: newMessage });
  }
}
