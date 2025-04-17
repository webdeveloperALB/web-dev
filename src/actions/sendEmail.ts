"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail") as string;
  const message = formData.get("message") as string;
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string | null;
  const phoneNumber = formData.get("phoneNumber") as string;
  const subject = formData.get("subject") as string;

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid email address",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Message is required and must be less than 5000 characters",
    };
  }
  if (!validateString(firstName, 500)) {
    return {
      error: "First name is required",
    };
  }
  if (!validateString(phoneNumber, 500)) {
    return {
      error: "Phone number is required",
    };
  }
  if (!validateString(subject, 500)) {
    return {
      error: "Subject is required",
    };
  }
  
  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "kevikoltraka157@gmail.com",
      subject: `Message from contact form: ${subject}`,
      reply_to: senderEmail,
      react: React.createElement(ContactFormEmail, {
        message: message,
        senderEmail: senderEmail,
        firstName: firstName,
        lastName: lastName || "",
        subject: subject,
        phoneNumber: phoneNumber,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};