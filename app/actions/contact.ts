"use server";
import nodemailer from "nodemailer";

type ContactFields = {
  name: string;
  email: string;
  message: string;
};

export async function sendContact(formData: FormData) {
  //   const res = await fetch("http://localhost:3000/contact", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({
  //       name: formData.get("name"),
  //       email: formData.get("email"),
  //       message: formData.get("message"),
  //     }),
  //   });
  const { name, email, message } = Object.fromEntries(
    formData
  ) as unknown as ContactFields;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USERNAME, // you@domain.com
      pass: process.env.EMAIL_PASSWORD, // app-specific or OAuth token
    },
  });
  await transporter.sendMail({
    from: email,
    to: "pecabegd@gmail.com",
    subject: `Message from ${name}`,
    text: message,
  });
}
