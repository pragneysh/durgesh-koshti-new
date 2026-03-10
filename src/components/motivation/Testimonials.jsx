import { FaStar } from "react-icons/fa";

export default function Testimonials() {
  const reviews = [
    {
      name: "Alli",
      role: "Life Coach",
      text: "Kris is a wonderful mentor and friend. His guidance helped me gain clarity and confidence in both my personal and professional life.",
      date: "Instagram · Nov 2022",
    },
    {
      name: "Myriam",
      role: "Yoga Practitioner",
      text: "As my handstand coach and mentor, Kris has provided incredible support, motivation, and technical guidance that improved my practice.",
      date: "Oct 2023",
    },
    {
      name: "Matthew",
      role: "Yoga Student",
      text: "Kris helped me through a life-changing period. His teachings on and off the mat helped me grow stronger mentally and physically.",
      date: "Oct 2023",
    },
  ];

  return (
    <section className="relative py-24 bg-[url('/images/beach.jpg')] bg-cover bg-center">
      
      {/* overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-16 text-white">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            What People Say
          </h2>
          <p className="text-gray-200 max-w-2xl mx-auto">
            Experiences shared by students and clients who have practiced yoga,
            attended sessions, and received mentorship.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-10">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white/95 backdrop-blur p-10 rounded-xl shadow-xl text-center transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              
              {/* Avatar */}
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-[#5BA69A] flex items-center justify-center text-white text-xl font-semibold">
                  {review.name.charAt(0)}
                </div>
              </div>

              {/* Stars */}
              <div className="flex justify-center gap-1 text-yellow-400 mb-4">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              {/* Role */}
              <h3 className="text-lg font-semibold text-[#374151] mb-3">
                {review.role}
              </h3>

              {/* Review */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                "{review.text}"
              </p>

              {/* Author */}
              <p className="text-sm text-gray-500">
                {review.name} · {review.date}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}