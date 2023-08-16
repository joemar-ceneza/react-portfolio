// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { mailOptions, transporter } from "../../config/nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    try {
      await transporter.sendMail({
        ...mailOptions,
        subject: data.subject,
        html: `<p>Name: ${data.name}</p><p>Email: ${data.email}</p><p>Message: ${data.message}</p>`,
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: error.message });
    }
  }
  res.status(400).json({ message: "Bad request" });
}
