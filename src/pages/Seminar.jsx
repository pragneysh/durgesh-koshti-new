import React from "react";

export default function Seminar() {
  return (
    <section className="bg-gray-50">

      {/* Banner Section */}
      <div className="relative bg-[#5BA69A] text-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Join Our Seminars & Workshops
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Learn yoga, mindfulness, and life skills through our expert-led seminars.
            Empower yourself with knowledge, motivation, and well-being.
          </p>
          <button className="px-10 py-3 bg-white text-[#5BA69A] font-semibold rounded-full hover:bg-gray-100 transition">
            Register Now
          </button>
        </div>

        {/* Optional Banner Image */}
        <img
          src="https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&w=1600&q=80"
          alt="Seminar Banner"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
      </div>

      {/* Seminar Sections */}
      <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 text-center">

        {/* Yoga Promotion */}
        <div className="bg-white rounded-2xl shadow-lg p-6 text-gray-700">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Yoga Promotion Seminar
          </h2>

          <img
            src="https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&w=900&q=80"
            alt="Yoga Seminar"
            className="w-full h-72 object-cover rounded-md mb-6"
          />

          <div className="space-y-4 leading-relaxed">
            <p>
              Our yoga promotion seminars introduce individuals to the transformative benefits of yoga,
              helping participants improve physical health, mental clarity, and emotional balance.
            </p>

            <p>
              Through guided demonstrations, breathing techniques, and simple yoga practices, we make yoga accessible for everyone.
            </p>

            <p>
              These sessions inspire communities to adopt healthier lifestyles and discover the long-term benefits of regular yoga practice.
            </p>
          </div>

          <button className="mt-6 px-10 py-3 border-2 border-gray-700 rounded-full tracking-widest text-sm hover:bg-gray-800 hover:text-white transition">
            JOIN OUR YOGA SEMINAR
          </button>
        </div>

        {/* Student Education */}
        <div className="bg-white rounded-2xl shadow-lg p-6 text-gray-700">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Student Education Seminar
          </h2>

          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80"
            alt="Student Seminar"
            className="w-full h-72 object-cover rounded-md mb-6"
          />

          <div className="space-y-4 leading-relaxed">
            <p>
              Our student education seminars focus on helping young minds build confidence, discipline, and clarity through practical life guidance and motivational insights.
            </p>

            <p>
              We address challenges faced by students today including stress, lack of focus, and career uncertainty, while providing tools to overcome them.
            </p>

            <p>
              By combining motivation, mindfulness, and goal-setting strategies, we empower students to unlock their true potential and succeed in academics and life.
            </p>
          </div>

          <button className="mt-6 px-10 py-3 border-2 border-gray-700 rounded-full tracking-widest text-sm hover:bg-gray-800 hover:text-white transition">
            EXPLORE STUDENT SEMINARS
          </button>
        </div>

      </div>
    </section>
  );
}