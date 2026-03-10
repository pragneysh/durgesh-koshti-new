import React from "react";

const posts = [
  {
    title: "Sunrise Yoga: Start Your Day Right",
    text: "Embrace morning yoga routines that boost your energy, focus, and positivity for the entire day.",
    date: "Mar 5, 2026",
    author: "Kris Yoga",
    category: "Yoga",
    image: "https://static.vecteezy.com/system/resources/thumbnails/074/413/219/small/a-woman-doing-yoga-at-sunset-photo.jpg",
  },
  {
    title: "Meditation Techniques for Beginners",
    text: "Learn simple meditation practices to calm your mind, improve focus, and reduce stress.",
    date: "Mar 3, 2026",
    author: "Kris Yoga",
    category: "Meditation",
    image: "https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Boost Your Motivation with Daily Habits",
    text: "Discover key habits that help you stay disciplined, focused, and motivated in studies and work.",
    date: "Mar 2, 2026",
    author: "Kris Yoga",
    category: "Motivation",
    image: "https://static.vecteezy.com/system/resources/thumbnails/070/678/082/small_2x/concept-of-time-pressure-young-man-running-against-clock-in-a-rush-to-deadline-photo.jpeg",
  },
  {
    title: "Yoga Retreats to Reset Your Mind",
    text: "Explore the benefits of attending yoga retreats and how they can transform your practice and mindset.",
    date: "Feb 28, 2026",
    author: "Kris Yoga",
    category: "Yoga",
    image: "https://static.vecteezy.com/system/resources/thumbnails/073/214/547/small_2x/sunrise-yoga-retreat-in-scenic-mountain-setting-with-two-women-meditating-on-wooden-deck-surrounded-by-lush-green-hills-and-a-warm-serene-atmosphere-photo.jpeg",
  },
  {
    title: "Mindfulness Exercises for Stress Relief",
    text: "Simple mindfulness practices you can do daily to reduce stress, boost focus, and stay calm.",
    date: "Feb 25, 2026",
    author: "Kris Yoga",
    category: "Mindfulness",
    image: "https://static.vecteezy.com/system/resources/thumbnails/059/872/048/small_2x/woman-meditating-on-a-mountain-peak-at-sunrise-surrounded-by-misty-hills-photo.jpg",
  },
  {
    title: "Healthy Eating Tips for Yogis",
    text: "Learn what to eat before and after yoga sessions to improve energy, flexibility, and overall health.",
    date: "Feb 20, 2026",
    author: "Kris Yoga",
    category: "Health",
    image: "https://image.shutterstock.com/image-photo/closeup-fresh-fruit-vegetables-on-260nw-2621840519.jpg",
  },
  {
    title: "Evening Yoga to Unwind",
    text: "Relax your body and mind with gentle yoga poses to release tension and improve sleep quality.",
    date: "Feb 18, 2026",
    author: "Kris Yoga",
    category: "Yoga",
    image: "https://static.vecteezy.com/system/resources/thumbnails/075/319/525/small_2x/yoga-is-a-great-way-to-relax-and-de-stress-photo.jpg",
  },
  {
    title: "Motivational Mindset Shifts for Students",
    text: "Small mindset changes can make a big difference in focus, confidence, and academic success.",
    date: "Feb 15, 2026",
    author: "Kris Yoga",
    category: "Motivation",
    image: "https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=800&q=80",
  },
];

export default function Blog() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Page Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-[#374151] mb-4">
            Yoga & Mindfulness Blog
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Explore articles on yoga, meditation, mindfulness, motivation, and healthy living.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {posts.map((post, index) => {
            const isFeatured = index === 0;
            return (
              <div
                key={index}
                className={`relative group rounded-2xl overflow-hidden shadow-lg ${
                  isFeatured ? "md:col-span-3 h-[500px]" : "h-[400px]"
                }`}
              >
                {/* Image */}
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                {/* Category Badge */}
                <span className="absolute top-4 left-4 bg-[#5BA69A] text-white px-4 py-1 text-xs font-semibold rounded-full shadow-lg">
                  {post.category}
                </span>
                {/* Content */}
                <div className="absolute bottom-6 left-6 text-white max-w-md">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">{post.title}</h3>
                  <p className="text-xs uppercase tracking-wide mb-2">
                    {post.author} • {post.date}
                  </p>
                  <p className="text-sm mb-4">{post.text}</p>
                  <button className="bg-[#5BA69A] hover:bg-[#4a8f85] px-5 py-2 rounded-full text-sm font-medium transition">
                    Read More
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}