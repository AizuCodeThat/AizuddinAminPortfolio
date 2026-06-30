import { FaGithub, FaLinkedin } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi"

export default function Contact() {
  return (
    <section
      id="contact"
      className="px-5 sm:px-8 py-8 border-t border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
    >
      <p className="text-sm text-gray-600 dark:text-gray-300">
        Open to software engineering & security-focused roles.
      </p>
      <div className="flex items-center gap-4">
        <button
          onClick={() => window.open("https://github.com/AizuCodeThat", "_blank")}
          aria-label="GitHub"
          className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white text-xl"
        >
          <FaGithub />
        </button>
        <button
          onClick={() => window.open("https://www.linkedin.com/in/muhammadaizuddin01/", "_blank")}
          aria-label="LinkedIn"
          className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white text-xl"
        >
          <FaLinkedin />
        </button>
        <button
          onClick={() => (window.location.href = "mailto:aizuddinamin2001@gmail.com")}
          aria-label="Email"
          className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white text-xl"
        >
          <HiOutlineMail />
        </button>
        <button
          onClick={() => (window.location.href = "mailto:youremail@example.com")}
          className="bg-black dark:bg-white text-white dark:text-black px-5 py-2 text-sm rounded-full"
        >
          Contact me
        </button>
      </div>
    </section>
  )
}