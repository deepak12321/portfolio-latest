import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";
const socialLinks = [
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    url: "https://linkedin.com/in/yourprofile",
    color: "hover:text-[#0A66C2] hover:shadow-[0_0_20px_rgba(10,102,194,0.6)]",
    bgColor: "hover:bg-[#0A66C2]/10",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    url: "https://github.com/yourprofile",
    color:
      "hover:text-[#333] dark:hover:text-white hover:shadow-[0_0_20px_rgba(100,100,100,0.6)]",
    bgColor: "hover:bg-gray-800/10 dark:hover:bg-white/10",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    url: "https://instagram.com/yourprofile",
    color: "hover:text-[#E4405F] hover:shadow-[0_0_20px_rgba(228,64,95,0.6)]",
    bgColor:
      "hover:bg-gradient-to-br hover:from-[#F58529] hover:via-[#E4405F] hover:to-[#833AB4]",
  },
  {
    name: "Twitter",
    icon: FaTwitter,
    url: "https://twitter.com/yourprofile",
    color: "hover:text-[#1DA1F2] hover:shadow-[0_0_20px_rgba(29,161,242,0.6)]",
    bgColor: "hover:bg-[#1DA1F2]/10",
  },
  {
    name: "Email",
    icon: FaEnvelope,
    url: "mailto:your.email@example.com",
    color: "hover:text-[#EA4335] hover:shadow-[0_0_20px_rgba(234,67,53,0.6)]",
    bgColor: "hover:bg-[#EA4335]/10",
  },
];

export default socialLinks;
