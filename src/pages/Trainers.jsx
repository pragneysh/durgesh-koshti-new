import React from "react";
import { CheckCircle } from "lucide-react";

const trainers = [
  {
    name: "Kris Sharma",
    role: "Yoga Instructor",
    bio: "Expert in Hatha & Vinyasa yoga helping students improve flexibility and mindfulness.",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/011/927/980/small_2x/student-working-on-tablet-free-photo.jpg",
    students: 312,
    sessions: 48,
  },
  {
    name: "Sophia Lee",
    role: "Mindfulness Coach",
    bio: "Guides students through meditation and emotional balance practices.",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80",
    students: 290,
    sessions: 37,
  },
  {
    name: "Rahul Verma",
    role: "Student Mentor",
    bio: "Helps students develop focus, discipline and achieve academic success.",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/059/872/048/small_2x/woman-meditating-on-a-mountain-peak-at-sunrise-surrounded-by-misty-hills-photo.jpg",
    students: 410,
    sessions: 55,
  },
];

export default function Trainers() {
  return (
    <section className="py-24 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#374151] mb-4">
            Meet Our Trainers
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Dedicated mentors helping students and individuals grow through yoga,
            mindfulness, and motivational guidance.
          </p>
        </div>

        {/* Trainer Cards */}
        <div className="grid md:grid-cols-3 gap-10">

          {trainers.map((trainer, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-md p-6 text-center hover:shadow-xl transition"
            >

              {/* Profile Image */}
              <div className="flex justify-center">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-40 h-40 object-cover rounded-3xl"
                />
              </div>

              {/* Name */}
              <div className="flex justify-center items-center gap-2 mt-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {trainer.name}
                </h3>
                <CheckCircle size={18} className="text-green-500" />
              </div>

              {/* Role */}
              <p className="text-gray-500 text-sm mt-1">{trainer.role}</p>

              {/* Bio */}
              <p className="text-gray-600 text-sm mt-3">
                {trainer.bio}
              </p>

              {/* Stats */}
              <div className="flex justify-center gap-8 mt-6 text-sm text-gray-600">
                <div>
                  <p className="font-semibold">{trainer.students}</p>
                  <p>Students</p>
                </div>

                <div>
                  <p className="font-semibold">{trainer.sessions}</p>
                  <p>Sessions</p>
                </div>
              </div>

              {/* Follow Button */}
              <button className="mt-6 px-6 py-2 bg-gray-100 rounded-full hover:bg-[#5BA69A] hover:text-white transition">
                Follow +
              </button>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}