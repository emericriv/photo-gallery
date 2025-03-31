import { FaLinkedin } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

export const ContactSection = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center px-6"
    >
      <h2 className="text-4xl font-bold text-gold text-center mb-6">
        Me contacter
      </h2>
      <p className="text-blue-gray text-lg max-w-2xl text-center mb-8">
        Pour toute question ou demande de collaboration, n'hésitez pas à me
        contacter via les réseaux sociaux ou par e-mail.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Email */}
        <a
          href="mailto:contact@example.com"
          className="flex items-center gap-2 bg-gold text-dark px-6 py-3 rounded-full font-semibold hover:bg-gold/80 transition"
        >
          <CiMail size={20} /> contact@example.com
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/your-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition"
        >
          <FaLinkedin size={20} /> LinkedIn
        </a>
      </div>
    </section>
  );
};
