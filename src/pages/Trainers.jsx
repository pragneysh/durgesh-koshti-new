import { useEffect, useState } from "react";
import { CheckCircle } from "lucide-react";
import SectionTitle from "../components/common/SectionTitle";

export default function Trainers() {
  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
    fetch(
      "https://opensheet.elk.sh/13xpPxWFAVd-jSLFwj0tkVi3IJKMGTtHyOqd5Q2XjDBA/Trainers",
    )
      .then((res) => res.json())
      .then((data) => {
        const rows = data.map((row) => ({
          name: row.Name,
          role: row.Role,
          bio: row.Bio,
          image: row.Image,
          students: row.Students,
          sessions: row.Sessions,
          insta_id: row.insta_id,
        }));

        setTrainers(rows);
      });
  }, []);

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title="Meet Our Trainers"
          subtitle="Dedicated mentors helping students and individuals grow through yoga, mindfulness, and motivational guidance."
        />

        <div className="grid md:grid-cols-3 gap-10">
          {trainers.map((trainer, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-md p-6 text-center hover:shadow-xl transition"
            >
              {/* Image */}
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

                {trainer.verified && (
                  <CheckCircle size={18} className="text-green-500" />
                )}
              </div>

              {/* Role */}
              <p className="text-gray-500 text-sm mt-1">{trainer.role}</p>

              {/* Description */}
              <p className="text-gray-600 text-sm mt-3 leading-relaxed line-clamp-4">
                {trainer.bio}
              </p>

              {/* Stats */}
              {/* <div className="flex justify-center gap-8 mt-6 text-sm text-gray-600">
                <div>
                  <p className="font-semibold">{trainer.students}</p>
                  <p>Students</p>
                </div>

                <div>
                  <p className="font-semibold">{trainer.sessions}</p>
                  <p>Sessions</p>
                </div>
              </div> */}

              {/* Follow button only if insta_id exists */}
              {trainer.insta_id && (
                <a
                  href={`https://instagram.com/${trainer.insta_id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-6 px-6 py-2 bg-gray-100 rounded-full hover:bg-[#5BA69A] hover:text-white transition"
                >
                  Follow +
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
