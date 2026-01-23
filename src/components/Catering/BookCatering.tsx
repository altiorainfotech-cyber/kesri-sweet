'use client';

import { useState } from 'react';

export default function BookCatering() {
  const [formData, setFormData] = useState({
    name: '',
    dateOfEvent: '',
    phoneNumber: '',
    numberOfGuests: '',
    email: '',
    venue: '',
    eventType: '',
    comment: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleClear = () => {
    setFormData({
      name: '',
      dateOfEvent: '',
      phoneNumber: '',
      numberOfGuests: '',
      email: '',
      venue: '',
      eventType: '',
      comment: ''
    });
  };

  return (
    <section
      className="relative min-h-screen py-16 px-6 flex items-center justify-center"
      style={{
        backgroundImage: 'url(/images/catering/catringlastrow/book-the-catering.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="max-w-4xl w-full">
        {/* Title */}
        <div className="text-center mb-12">
          <div className="relative inline-block">
            <span
              className="font-[family-name:var(--font-island-moments)] text-[#FF9900] absolute"
              style={{
                fontSize: '55px',
                lineHeight: '1',
                top: '22px',
                left: '-20%',
                whiteSpace: 'nowrap',
                transform: 'rotate(-15deg)'
              }}
            >
              Book
            </span>
            <h2
              className="font-sans text-black"
              style={{
                fontSize: '48px',
                fontWeight: 700,
                lineHeight: '1.2',
                letterSpacing: '0.02em',
                marginTop: '50px'
              }}
            >
              THE BEST CATERING SERVICES
            </h2>
            <p className="text-xl text-black mt-2">in Surrey, BC Today</p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Form Header */}
          <div
            className="text-center py-4 px-6"
            style={{ backgroundColor: '#F5C26B', borderRadius: '10px' }}
          >
            <h3 className="text-xl font-semibold text-black">
              Catering Request and Enquiry Form
            </h3>
          </div>

          {/* Form Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label className="block text-black font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Answer"
                className="w-full px-4 py-2 border-b-2 border-black bg-transparent focus:outline-none focus:border-orange-500"
              />
            </div>

            {/* Date of Event */}
            <div>
              <label className="block text-black font-medium mb-2">
                Date of Event*
              </label>
              <input
                type="text"
                name="dateOfEvent"
                value={formData.dateOfEvent}
                onChange={handleChange}
                placeholder="dd/mm/yy"
                className="w-full px-4 py-2 border-b-2 border-black bg-transparent focus:outline-none focus:border-orange-500"
              />
            </div>

            {/* Phone number */}
            <div>
              <label className="block text-black font-medium mb-2">
                Phone number
              </label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Your Answer"
                className="w-full px-4 py-2 border-b-2 border-black bg-transparent focus:outline-none focus:border-orange-500"
              />
            </div>

            {/* Number of guests */}
            <div>
              <label className="block text-black font-medium mb-2">
                Number of guests*
              </label>
              <input
                type="number"
                name="numberOfGuests"
                value={formData.numberOfGuests}
                onChange={handleChange}
                placeholder="Your Answer"
                className="w-full px-4 py-2 border-b-2 border-black bg-transparent focus:outline-none focus:border-orange-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-black font-medium mb-2">
                Email*
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Answer"
                className="w-full px-4 py-2 border-b-2 border-black bg-transparent focus:outline-none focus:border-orange-500"
              />
            </div>

            {/* Venue (Address) */}
            <div>
              <label className="block text-black font-medium mb-2">
                Venue (Address)
              </label>
              <input
                type="text"
                name="venue"
                value={formData.venue}
                onChange={handleChange}
                placeholder="Your Answer"
                className="w-full px-4 py-2 border-b-2 border-black bg-transparent focus:outline-none focus:border-orange-500"
              />
            </div>

            {/* Event type */}
            <div>
              <label className="block text-black font-medium mb-2">
                Event type*
              </label>
              <input
                type="text"
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                placeholder="Your Answer"
                className="w-full px-4 py-2 border-b-2 border-black bg-transparent focus:outline-none focus:border-orange-500"
              />
            </div>

            {/* Comment */}
            <div>
              <label className="block text-black font-medium mb-2">
                Comment
              </label>
              <input
                type="text"
                name="comment"
                value={formData.comment}
                onChange={handleChange}
                placeholder="Your Answer"
                className="w-full px-4 py-2 border-b-2 border-black bg-transparent focus:outline-none focus:border-orange-500"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-center gap-0 mt-8">
            <button
              type="button"
              onClick={handleClear}
              className="px-12 py-3 font-semibold text-black"
              style={{
                backgroundColor: '#F5C26B',
                borderTopLeftRadius: '10px',
                borderBottomLeftRadius: '10px'
              }}
            >
              Clear Form
            </button>
            <button
              type="submit"
              className="px-12 py-3 font-semibold text-black"
              style={{
                backgroundColor: '#FF9900',
                borderTopRightRadius: '10px',
                borderBottomRightRadius: '10px'
              }}
            >
              Submit
            </button>
          </div>
        </form>

        {/* Footer Text */}
        <div className="text-center mt-8">
          <p className="text-black text-lg">
            <span style={{ color: '#FF9900', fontWeight: 'bold' }}>Call us today</span> to discuss your catering needs
          </p>
          <p className="text-black text-lg">
            <span style={{ color: '#FF9900', fontWeight: 'bold' }}>Request a custom quote</span> for weddings, birthdays, or small events
          </p>
        </div>
      </div>
    </section>
  );
}
