import { NextResponse } from "next/server";
import { Resend } from "resend";
import {
  personalEmail,
  subject,
  from,
  htmlFunction,
} from "@/constants/contact";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ status: 400 });
    }

    const { error } = await resend.emails.send({
      from: from,
      to: personalEmail,
      subject: ` ${subject} : ${name}`,
      html: htmlFunction(name, email, message),
    });

    if (error) {
      return NextResponse.json({ status: 500 });
    }

    return NextResponse.json({
      success: true,
    });
  } catch {
    return NextResponse.json({ status: 500 });
  }
}
