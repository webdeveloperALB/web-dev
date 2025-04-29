"use server";

import { Resend } from 'resend';
import { z } from 'zod';
import ContactFormEmail from '@/email/contact-form-email';

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

// Create a schema for form validation
const FormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  senderEmail: z.string().email("Invalid email address"),
  phoneNumber: z.string().min(1, "Phone number is required"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
});

export async function sendEmail(formData: FormData) {
  // Validate form data
  const validatedFields = FormSchema.safeParse({
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    senderEmail: formData.get("senderEmail"),
    phoneNumber: formData.get("phoneNumber"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  });

  // If validation fails, return error
  if (!validatedFields.success) {
    return {
      error: "Invalid form data. Please check your inputs.",
      data: null,
    };
  }

  const { firstName, lastName, senderEmail, phoneNumber, subject, message } = validatedFields.data;

  try {
    // Send email using Resend
    const data = await resend.emails.send({
      from: 'Contact Form <support@webdev-al.com>', // Use your verified domain
      to: ['orgito.hysenbelliu@gmail.com', 'kevikoltraka157@gmail.com'], // Replace with your email
      subject: `Contact Form: ${subject}`,
      react: ContactFormEmail({ 
        firstName, 
        lastName, 
        senderEmail, 
        phoneNumber, 
        subject, 
        message 
      }),
    });

    return {
      error: null,
      data,
    };
  } catch (error) {
    return {
      error: "Failed to send email. Please try again later.",
      data: null,
    };
  }
}