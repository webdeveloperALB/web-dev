import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

type TestimonialType = {
  name: string;
  content: string;
  position: string;
};

const testimonials: TestimonialType[] = [
  {
    name: "AceCut",
    content:
      "This company provided exceptional service. Our website was built quickly and exceeded our expectations. Highly recommend!",
    position: "Barbershop",
  },
  {
    name: "AutoRental",
    content:
      "I had a wonderful experience with this team. They were professional, attentive, and delivered exactly what we needed. A great partner!",
    position: "Marketing Director, Creative Co.",
  },
];

const Testimonial = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [isAutoRotate, setIsAutoRotate] = useState(true);

  const nextTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;

    if (isAutoRotate) {
      interval = setInterval(nextTestimonial, 7000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoRotate]);

  return (
    <div
      className="bg-gray-50 py-16 px-4 md:px-8 rounded-lg"
      onMouseEnter={() => setIsAutoRotate(false)}
      onMouseLeave={() => setIsAutoRotate(true)}
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          What Our Clients Say
        </h2>

        <div className="relative bg-white rounded-xl shadow-lg p-8 md:p-10">
          {/* Quote icon top */}
          <div className="absolute top-6 left-6 text-purple-500 opacity-20">
            <Quote size={40} />
          </div>

          {/* Testimonial content */}
          <div className="relative min-h-24">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`transition-opacity duration-500 absolute top-0 left-0 w-full ${
                  index === currentTestimonialIndex
                    ? "opacity-100 z-10"
                    : "opacity-0 -z-10"
                }`}
              >
                <p className="text-gray-700 text-lg italic mb-6 text-center px-8">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
              </div>
            ))}
          </div>

          {/* Quote icon bottom */}
          <div className="absolute bottom-6 right-6 text-purple-500 opacity-20">
            <Quote size={40} />
          </div>

          {/* Author section with avatar */}
          <div className="flex items-center justify-center mt-8 pt-6 border-t border-gray-200">
            <div className="bg-purple-500 text-white rounded-full w-12 h-12 flex items-center justify-center mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">
                {testimonials[currentTestimonialIndex].name}
              </h3>
              <p className="text-gray-500 text-sm">
                {testimonials[currentTestimonialIndex].position}
              </p>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center space-x-8 mt-8">
          <button
            onClick={prevTestimonial}
            className="p-2 rounded-full bg-purple-500 text-white hover:bg-purple-600 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors focus:outline-none ${
                  index === currentTestimonialIndex
                    ? "bg-purple-500"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                onClick={() => setCurrentTestimonialIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextTestimonial}
            className="p-2 rounded-full bg-purple-500 text-white hover:bg-purple-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
