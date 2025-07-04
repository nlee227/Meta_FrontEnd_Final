import React from 'react';

function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 4.5,
      quote: "The food was amazing! Try the Feta!"
    },
    {
      name: "Torres Alvero", 
      rating: 4.8,
      quote: "The lamb is amazing"
    },
    {
      name: "John Smith",
      rating: 5,
      quote: "Best service I've ever had!"
    },
    {
      name: "Joe Johnson",
      rating: 5,
      quote: "So impressed"
    }
  ];

  const renderStars = (rating) => {
    return "★★★★★";
  };

  return (
    <>
      <link 
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css" 
        rel="index.css" 
      />
      
      <section className="testimonials-section">
        <div className="container">

          <div className="row mb-5">
            <div className="col-12 text-center">
              <h1 id="testimonials-header">
                Customer Testimonials
              </h1>
            </div>
          </div>

          <div className="row g-4 justify-content-center">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="col-12 col-sm-6 col-md-6 col-lg-3 d-flex"
              >
                <div className="card testimonials-card h-100 w-100 border-0 shadow-sm">
                  <div className="card-body testimonials-card-body d-flex flex-column p-4">
                    <div className="customer-name text-center mb-3 py-3 px-4 rounded-circle mx-auto">
                      {testimonial.name}
                    </div>
                    <div className="rating-section d-flex align-items-center justify-content-center mb-3 gap-2">
                      <span className="rating-label">
                        Rating:
                      </span>
                      <span className="rating-value fw-bold">
                        {testimonial.rating}
                      </span>
                      <span className="stars">
                        {renderStars(testimonial.rating)}
                      </span>
                    </div>
                    <div className="quote text-center my-auto">
                      "{testimonial.quote}"
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonials;