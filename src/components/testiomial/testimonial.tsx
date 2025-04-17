import React, { useState, useEffect } from "react";
import "./testimonial.css"

type TestimonialType = {
  name: string;
  content: string;
  position: string;
};

const testimonials: TestimonialType[] = [
  {
    name: "John Doe",
    content:
      "This company provided exceptional service. Our website was built quickly and exceeded our expectations. Highly recommend!",
    position: "CEO, TechCorp",
  },
  {
    name: "Jane Smith",
    content:
      "I had a wonderful experience with this team. They were professional, attentive, and delivered exactly what we needed. A great partner!",
    position: "Marketing Director, Creative Co.",
  },
  {
    name: "Mark Johnson",
    content:
      "The team was great to work with! They turned our vision into a beautiful, functional website. Their ongoing support has been invaluable.",
    position: "Product Manager, Innovate Ltd.",
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
    let interval: NodeJS.Timeout;
    if (isAutoRotate) {
      interval = setInterval(nextTestimonial, 7000);
    }
    return () => clearInterval(interval);
  }, [isAutoRotate]);

  return (
    <div 
      className="testimonial-section"
      onMouseEnter={() => setIsAutoRotate(false)}
      onMouseLeave={() => setIsAutoRotate(true)}
    >
      <div className="testimonial-container">
        <div className="testimonial-content-wrapper">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`testimonial-card ${
                index === currentTestimonialIndex ? "active" : ""
              }`}
            >
              <div className="quote-icon top">
                <svg /* quote icon SVG */ />
              </div>
              <p className="testimonial-text">{testimonial.content}</p>
              <div className="quote-icon bottom">
                <svg /* quote icon SVG */ />
              </div>
            </div>
          ))}
        </div>

        <div className="testimonial-author">
          <div className="author-info">
            <h3 className="author-name">
              {testimonials[currentTestimonialIndex].name}
            </h3>
            <p className="author-position">
              {testimonials[currentTestimonialIndex].position}
            </p>
          </div>
        </div>

        <div className="testimonial-controls">
          <button 
            onClick={prevTestimonial}
            className="control-button prev"
            aria-label="Previous testimonial"
          >
            <svg /* left arrow SVG */ />
          </button>
          
          <div className="pagination-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentTestimonialIndex ? "active" : ""}`}
                onClick={() => setCurrentTestimonialIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button 
            onClick={nextTestimonial}
            className="control-button next"
            aria-label="Next testimonial"
          >
            <svg /* right arrow SVG */ />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;