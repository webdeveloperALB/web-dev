"use client";

import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYinYang,
} from "react-icons/fa6";
import Social from "../social";
import { sendEmail } from "@/actions/sendEmail";
import toast from "react-hot-toast";

const Contact = () => {
  return (
    <div className="bg-white min-h-screen p-4 text-black py-20 contact">
      <div className="max-w-7xl mx-auto p-4">
        {/* Using span instead of h4 for the subtitle marker */}
        <div className="flex gap-4 items-center text-black">
          <div className="w-10 h-0.5 bg-primary" />
          <span className="text-2xl font-medium">Contact Us</span>
        </div>
        <br />


        <form
          action={async (formData) => {
            const { data, error } = await sendEmail(formData);
            if (error) {
              toast.error(error);
              return;
            }
            toast.success("Email sent successfully!");
            window.location.reload();
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-8 flex flex-col gap-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                <div>
                  <input
                    type="text"
                    placeholder="First Name *"
                    name="firstName"
                    className="w-full p-3 border rounded"
                    required
                    maxLength={500}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Last Name *"
                    name="lastName"
                    className="w-full p-3 border rounded"
                    required
                    maxLength={500}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                <div>
                  <input
                    placeholder="Email *"
                    name="senderEmail"
                    type="email"
                    className="w-full p-3 border rounded"
                    required
                    maxLength={500}
                  />
                </div>
                <div>
                  <input
                    placeholder="Phone Number *"
                    name="phoneNumber"
                    type="tel"
                    className="w-full p-3 border rounded"
                    required
                    maxLength={500}
                  />
                </div>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Subject *"
                  name="subject"
                  className="w-full p-3 border rounded"
                  required
                  maxLength={500}
                />
              </div>
              <div>
                <textarea
                  placeholder="Message *"
                  name="message"
                  className="w-full p-3 border rounded h-32"
                  required
                  maxLength={5000}
                />
              </div>
              <div>
                <button className="buttonwhite bg-primary text-white py-3 px-6 rounded mt-4" type="submit">
                  Send Message
                </button>
              </div>
            </div>
            <div className="md:col-span-4 bg-primary rounded-xl p-4 flex flex-col justify-between gap-4">
              {/* Using h2 for the sidebar section headings instead of h4 */}
              <div className="flex flex-col gap-2">
                <h2 className="text-xl md:text-2xl font-medium">Address</h2>
                <p>Tirane, Albania</p>
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-xl md:text-2xl font-medium">Contact</h2>
                <p>Phone 1: +355688172927</p>
                <p>Phone 2: +355685692096</p>
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-xl md:text-2xl font-medium">Open Time</h2>
                <p>We operate 24/7.</p>
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="text-xl md:text-2xl font-medium">
                  Stay Connected
                </h2>
                <Social />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;