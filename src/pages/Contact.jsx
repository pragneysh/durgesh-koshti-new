import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#374151] mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Feel free to reach out for yoga training, motivational sessions,
            or student mentorship. I would love to connect with you.
          </p>
        </div>

        {/* Contact layout */}
        <div className="grid md:grid-cols-2 gap-12 bg-white p-10 rounded-2xl shadow-xl">

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-[#374151] mb-4">
              Contact Information
            </h3>

            <div className="flex items-center gap-4">
              <div className="bg-[#5BA69A] text-white p-3 rounded-full">
                <FaEnvelope />
              </div>
              <p className="text-gray-600">yoga@example.com</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-[#5BA69A] text-white p-3 rounded-full">
                <FaPhoneAlt />
              </div>
              <p className="text-gray-600">+91 98765 43210</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-[#5BA69A] text-white p-3 rounded-full">
                <FaMapMarkerAlt />
              </div>
              <p className="text-gray-600">Ahmedabad, India</p>
            </div>
          </div>

          {/* Form */}
          <form className="space-y-4">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5BA69A]"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5BA69A]"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5BA69A]"
            ></textarea>

            <button
              className="w-full bg-[#5BA69A] text-white py-3 rounded-lg font-medium hover:bg-[#4a8f85] transition"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}