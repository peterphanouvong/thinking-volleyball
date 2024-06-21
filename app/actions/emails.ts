"use server";

import { MyFirstEmail } from "@/components/emails/my-first-email";
import { readFileSync } from "fs";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendTestEmail = async (props: { email: string }) => {
  try {
    const buff = readFileSync("./public/StatSheet.pdf");

    const { data, error } = await resend.emails.send({
      from: "Thinking Volleyball <peter@sportrackr.com.au>",
      to: [props.email],
      subject: "Your FREE Volleyball Stats PDF",
      text: "", // Add an empty text property
      react: MyFirstEmail({}),
      attachments: [
        {
          filename: "Thinking Volleyball Stats.pdf",
          content: buff,
        },
      ],
    });

    if (error) {
      console.log(error);
    }

    return { message: "Email sent successfully", status: "success" };
  } catch (error) {
    console.log(error);
    return { message: "Something went wrong", status: "error" };
  }
};
