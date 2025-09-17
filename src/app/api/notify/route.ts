import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.exchange2019.ionos.co.uk",
  port: 587,
  secure: false,
  auth: {
    user: process.env.NEXT_EMAIL_USER,
    pass: process.env.NEXT_EMAIL_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false
  }
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message, serviceLabel } = body;

    console.log('Attempting to send email with config:', {
      from: process.env.NEXT_EMAIL_USER,
      to: process.env.NEXT_EMAIL_USER,
      hasPassword: !!process.env.NEXT_EMAIL_PASSWORD
    });

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const mailOptions = {
      from: process.env.NEXT_EMAIL_USER,
      to: process.env.NEXT_EMAIL_USER,
      subject: `New Contact Form Submission - ${serviceLabel || 'General Inquiry'}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${serviceLabel ? `<p><strong>Service:</strong> ${serviceLabel}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
