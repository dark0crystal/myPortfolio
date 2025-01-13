import { FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa"; // Import icons

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      {/* Background */}
      <div className="absolute inset-0 -z-10 h-full w-full px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>

      {/* Social Media Links */}
      <div className="flex justify-center items-center w-screen gap-6 h-fit">
        {/* X (Twitter) */}
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-3xl hover:text-blue-400 transition"
          aria-label="Twitter"
        >
          <FaTwitter />
        </a>
        {/* Instagram */}
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-3xl hover:text-pink-400 transition"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        {/* LinkedIn */}
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-3xl hover:text-blue-500 transition"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        {/* GitHub */}
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-3xl hover:text-gray-400 transition"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
      </div>

      {/* Coming Soon Text */}
      <div>
        <h1 className="text-[20vh] font-bold text-white">Coming Soon</h1>
      </div>
    </div>
  );
}
