import {
  FaChalkboardTeacher,
  FaUserGraduate,
  FaBrain,
  FaHeartbeat,
  FaSpa,
} from "react-icons/fa";
import { MdSelfImprovement } from "react-icons/md";

export default function MotivationGuide() {
  const items = [
    {
      icon:  <MdSelfImprovement   size={35} />,
      title: "Yoga Training",
      text: "Whether you're a seasoned practitioner or just starting out, there is room for growth. Join Grand Master Kris for yoga training, workshops, and retreats designed to improve flexibility, strength, and inner peace.",
    },
    {
      icon: <FaChalkboardTeacher size={30} />,
      title: "Motivational Sessions",
      text: "Inspiring talks for students and professionals to build confidence, develop positive habits, and stay focused on their personal and professional goals.",
    },
    {
      icon: <FaUserGraduate size={30} />,
      title: "Student Mentorship",
      text: "Personal guidance for students to improve concentration, develop effective study techniques, and make the right decisions for their academic and career journey.",
    },
    {
      icon: <FaBrain size={30} />,
      title: "Mind & Discipline",
      text: "Combining yoga with mental training to strengthen discipline, focus, emotional stability, and overall mental wellness.",
    },
    {
      icon: <FaHeartbeat size={30} />,
      title: "Health & Wellness Programs",
      text: "Special programs focused on improving physical health, breathing techniques, stress relief, and maintaining a balanced lifestyle through yoga practices.",
    },
    {
      icon: <FaSpa size={30} />,
      title: "Meditation & Mindfulness",
      text: "Guided meditation sessions that help calm the mind, reduce anxiety, improve self-awareness, and promote deep inner peace.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl text-center font-semibold mb-12">
          Motivation & Student Guidance
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-xl shadow-md hover:shadow-xl transition text-center"
            >
              <div className="text-[#5BA69A] flex justify-center mb-4">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>

              <p className="text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
