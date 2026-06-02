import {
  FiGithub,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";

import { FaXTwitter } from "react-icons/fa6";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/SammyBanner45",
    Icon: FiGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sambuddha-banerjee-125aa1308/",
    Icon: FiLinkedin,
  },
  {
    label: "Twitter/X",
    href: "https://x.com/",
    Icon: FaXTwitter,
  },
  {
    label: "Email",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=sambuddha.banerjee45@gmail.com",
    Icon: FiMail,
  },
];

export default function Contact() {
  return (
    <section
    className="section-shell relative overflow-hidden z-10 py-20  text-center bg-[#000000]"
    id="contact"
  >
  <div className="mx-auto mb-16 h-px max-w-xl bg-gradient-to-r from-transparent via-cyan-300 to-transparent shadow-[0_0_22px_#00f5ff]" />


    {/* Content */}
    <div className="relative z-10">
    

      {/* Small heading */}
      <p className="mb-5 text-sm uppercase tracking-[0.34em] text-cyan-300">
        Let's Connect
      </p>

      {/* Main heading */}
      <h2 className="mx-auto max-w-4xl text-5xl font-black uppercase leading-[0.95] text-white sm:text-7xl">
        Let&apos;s build something that feels alive.
      </h2>

      {/* Social links */}
      <div className="mx-auto mt-14 flex max-w-4xl flex-wrap justify-center gap-4">
        {socials.map(({ label, href, Icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("mailto:") ? undefined : "_blank"}
            rel="noreferrer"
            className="
              inline-flex
              min-w-44
              items-center
              justify-center
              gap-3
              border
              border-[#d1ab3e]
              bg-black
              px-6
              py-5
              text-sm
              font-bold
              uppercase
              tracking-[0.18em]
              text-[#d1ab3e]
              backdrop-blur-xl
              transition-all
              duration-300
              rounded-md
              hover:border-white
              hover:text-white
            "
            style={{
              boxShadow:
                "0 0 22px rgba(0,245,255,0.12), inset 0 0 20px rgba(155,92,255,0.07)",
            }}
          >
            <Icon size={22} />
            <span>{label}</span>
          </a>
        ))}
      </div>

    </div>

    {/* Bottom Glow */}
    <div className="absolute bottom-[-80px] left-1/2 -translate-x-1/2 flex gap-32 pointer-events-none z-0 select-none">
      <div className="w-[350px] h-[350px] bg-cyan-300 rounded-full blur-[100px]" />
      <div className="w-[350px] h-[350px] bg-[#d1ab3e] rounded-full blur-[100px]" />
    </div>

  </section>

  );
}