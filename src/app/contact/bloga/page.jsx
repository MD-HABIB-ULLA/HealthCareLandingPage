import Link from "next/link";
import React from "react";

const blogPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full grid grid-cols-4 gap-3">
        {blogs.map((blog) => (
          <div
            key={blog.slug}
            className="min-h-20 border p-2 rounded-lg border-white flex flex-col gap-2"
          >
            <h1 className="text-2xl font-bold text-center">{blog.title}</h1>
            <p className="text-center flex-1">{blog.content}</p>

            <Link href={`/contact/bloga/${blog.slug}`} className="w-full px-2 py-1 bg-white text-center">
              {" "}
              <button className="capitalize  text-black font-bold">
                see more{" "}
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
const blogs = [
  {
    title: "Tips for Taking Stunning Smartphone Photos",
    slug: "smartphone-photography-tips",
    content:
      "Capture amazing memories with your phone camera! Learn essential composition rules, lighting tricks, and editing techniques to elevate your mobile photography game.",
  },
  {
    title: "The Ultimate Guide to Building a Budget-Friendly Gaming PC",
    slug: "budget-gaming-pc-guide",
    content:
      "Dreaming of epic gaming experiences without breaking the bank? This guide walks you through selecting the right components for a powerful yet affordable gaming PC.",
  },
  {
    title: "mastering the art of sourdough bread baking",
    slug: "sourdough-bread-baking-mastery",
    content:
      "Unlock the secrets of sourdough! Explore the science behind fermentation, starter maintenance techniques, and step-by-step instructions to bake delicious sourdough bread at home.",
  },
  {
    title: "5 Creative Ways to Decorate Your Apartment Balcony",
    slug: "apartment-balcony-decorating-ideas",
    content:
      "Transform your tiny balcony into a personal oasis! Discover inspiring ideas for space-saving furniture, cozy lighting options, and creative greenery arrangements.",
  },
  {
    title: "Beginner's Guide to Investing in Stocks",
    slug: "stocks-investing-for-beginners",
    content:
      "Curious about building wealth through the stock market? This guide demystifies investment basics, teaches you how to choose stocks, and provides tips for navigating the financial world.",
  },
  {
    title: "Must-Have Travel Apps for Every Adventurer",
    slug: "travel-apps-for-adventurers",
    content:
      "Travel smarter and explore more with the right apps! Discover essential tools for booking flights and accommodation, language translation, navigation, and keeping your travel memories organized.",
  },
  {
    title: "Unlocking the Power of Mindfulness for a Stress-Free Life",
    slug: "mindfulness-for-stress-reduction",
    content:
      "Learn how to cultivate mindfulness practices and reduce stress in your daily life. Explore meditation techniques, breathing exercises, and tips for staying present in the moment.",
  },
  {
    title: "The Art of Bullet Journaling: Organize Your Life with Style",
    slug: "bullet-journaling-organization",
    content:
      "Boost your productivity and personalize your planning with bullet journaling! Discover the core principles, explore creative layouts and trackers, and learn how to tailor this system to your needs.",
  },
  {
    title:
      "Conquer Your Fear of Public Speaking: Tips for Confident Presentations",
    slug: "public-speaking-confidence-tips",
    content:
      "Public speaking doesn't have to be terrifying! This guide equips you with strategies to manage anxiety, craft compelling presentations, and deliver them with confidence.",
  },
];

export default blogPage;
