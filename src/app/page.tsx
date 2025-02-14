import { FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa"; // Import icons

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-16 md:gap-6" >
      {/* Background */}
      <div className="absolute inset-0 -z-10 h-full w-full px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>

      {/* Social Media Links */}
      <div className="flex justify-center items-center w-screen gap-6 ">
        {/* X (Twitter) */}
        <a
          href="https://x.com/_5lo_9"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-3xl hover:text-blue-400 transition"
          aria-label="Twitter"
        >
          <FaTwitter />
        </a>
        {/* Instagram */}
        <a
          href="https://instagram.com/_5lo_9"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-3xl hover:text-pink-400 transition"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/al-mardas-al-busaidi-15b2a522a/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-3xl hover:text-blue-500 transition"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        {/* GitHub */}
        <a
          href="https://github.com/dark0crystal"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-3xl hover:text-gray-400 transition"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
      </div>

      {/* Coming Soon Text */}
      <div >
      <h1 className="text-[12vw] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-600 to-red-500">
          Coming Soon
      </h1>
      </div>
    </div>
  );
}
