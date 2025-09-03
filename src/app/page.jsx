import Link from "next/link";
import ThemeToggleButton from "@/components/ThemeToggleButton";

export default function Home() {
  return (
    <>
      <section className="relative flex flex-col items-center justify-center text-center min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500">
        {/* Hero Text */}
        <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6">
          Welcome to <span className="text-blue-500">My App</span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl mb-8">
          Build modern web apps faster with Next.js, Redux, and Tailwind CSS.
          This is your starter hero section 🚀
        </p>
        <div className="flex gap-4">
          {/* <a
          href="#get-started"
          className="px-6 py-3 rounded-lg bg-blue-500 text-white font-medium hover:bg-blue-600 transition-colors"
        >
          Get Started
        </a> */}
          <Link
            target="_blank"
            href="https://github.com/rockey223/nextJsStarterTemplate/blob/main/README.md"
            className="px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            Learn More
          </Link>
        </div>

        {/* Floating Theme Toggle */}
        <ThemeToggleButton />
      </section>
    </>
  );
}
