import React from "react";

export default function About() {
  return (
    <div className="bg-gray-50">

      {/* Hero Section */}
      <section className="py-24 text-center bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-[#374151] mb-6">
            About Yoga Hub
          </h1>

          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Durgesh Koshti Yoga Hub is dedicated to promoting traditional yoga
            practices while integrating modern wellness techniques to improve
            physical health, mental clarity, and emotional balance.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <img
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=900&q=80"
            alt="Yoga practice"
            className="rounded-2xl shadow-lg"
          />

          <div>
            <h2 className="text-3xl font-bold text-[#374151] mb-6">
              Our Journey
            </h2>

            <p className="text-gray-600 mb-4 leading-relaxed">
              Yoga Hub was created with the vision of helping individuals
              discover inner peace, physical strength, and mental discipline
              through authentic yoga practices.
            </p>

            <p className="text-gray-600 mb-4 leading-relaxed">
              Our sessions combine ancient yoga philosophy with practical
              techniques that help people reduce stress, improve flexibility,
              and develop a healthier lifestyle.
            </p>

            <p className="text-gray-600 leading-relaxed">
              We conduct yoga classes, seminars, and wellness workshops for
              students, professionals, and communities.
            </p>
          </div>

        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">

          <div className="p-8 bg-gray-50 rounded-xl shadow-sm">
            <h3 className="text-2xl font-semibold text-[#374151] mb-4">
              Our Mission
            </h3>

            <p className="text-gray-600 leading-relaxed">
              To spread awareness about the benefits of yoga and mindfulness,
              helping individuals live healthier and more balanced lives.
            </p>
          </div>

          <div className="p-8 bg-gray-50 rounded-xl shadow-sm">
            <h3 className="text-2xl font-semibold text-[#374151] mb-4">
              Our Vision
            </h3>

            <p className="text-gray-600 leading-relaxed">
              To build a community where yoga becomes a part of daily life,
              improving well-being, discipline, and personal growth.
            </p>
          </div>

        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <img
            src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=500&q=80"
            alt="Founder"
            className="w-40 h-40 object-cover rounded-full mx-auto mb-6 shadow-md"
          />

          <h3 className="text-2xl font-bold text-[#374151]">
            Durgesh Koshti
          </h3>

          <p className="text-[#5BA69A] mb-4">Founder & Yoga Instructor</p>

          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            With years of experience in yoga practice and teaching, Durgesh
            Koshti is passionate about helping people transform their lives
            through yoga, mindfulness, and positive lifestyle habits.
          </p>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#5BA69A] text-center text-white">
        <div className="max-w-3xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-4">
            Start Your Yoga Journey Today
          </h2>

          <p className="mb-8">
            Join our yoga sessions and experience the benefits of a healthy
            mind and body.
          </p>

          <button className="bg-white text-[#374151] px-8 py-3 rounded-full font-medium hover:scale-105 transition">
            Join a Class
          </button>

        </div>
      </section>

    </div>
  );
}
