import React from "react";

const posts = [
  {
    title: "How to Build a Modern React Portfolio",
    date: "2024-05-10",
    tags: ["React", "Portfolio", "UI/UX"],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
    excerpt:
      "Step-by-step guide to creating a visually stunning and performant portfolio using React and Tailwind CSS.",
    url: "#",
  },
  {
    title: "Dark Mode in React: Best Practices",
    date: "2024-04-22",
    tags: ["React", "Dark Mode", "Accessibility"],
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
    excerpt:
      "Learn how to implement dark mode in your React apps with accessibility and user experience in mind.",
    url: "#",
  },
  {
    title: "Deploying Your Portfolio with Vercel",
    date: "2024-03-15",
    tags: ["Deployment", "Vercel", "Web"],
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    excerpt:
      "A quick guide to deploying your React portfolio to Vercel for fast, global hosting.",
    url: "#",
  },
];

const Blog = () => (
  <section
    id="blog"
    className="py-20 md:py-32 relative"
  >
    <div className="absolute inset-0 pointer-events-none select-none opacity-10 dark:opacity-20 z-0">
      <svg width="100%" height="100%">
        <defs>
          <radialGradient id="blog-bg-gradient" cx="50%" cy="50%" r="80%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#818cf8" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#blog-bg-gradient)" />
      </svg>
    </div>
    <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
          <span className="gradient-text">Blog</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto rounded-full shadow-lg"></div>
        <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Insights, tutorials, and thoughts on web development and design.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-10">
        {posts.map((post, idx) => (
          <a
            key={post.title}
            href={post.url}
            className="group bg-white/90 dark:bg-gray-900/80 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 overflow-hidden flex flex-col hover:scale-[1.025] hover:shadow-primary-200/40 dark:hover:shadow-primary-900/40 transition-transform duration-300"
            data-aos="fade-up"
            data-aos-delay={idx * 100}
          >
            <img
              src={post.image}
              alt={post.title}
              className="h-48 w-full object-cover object-center"
              loading="lazy"
            />
            <div className="p-6 flex flex-col flex-1">
              <div className="flex gap-2 mb-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 text-xs font-semibold rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-bold mb-2 text-primary-700 dark:text-primary-300 group-hover:underline">
                {post.title}
              </h3>
              <div className="text-xs text-gray-500 dark:text-gray-400 mb-4">{post.date}</div>
              <p className="text-gray-700 dark:text-gray-200 flex-1">{post.excerpt}</p>
              <span className="mt-4 text-primary-600 dark:text-primary-400 font-semibold group-hover:underline">
                Read more &rarr;
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Blog;