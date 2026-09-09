import {
  Mail,
  MapPin,
  Phone,
  GraduationCap,
  Code2,
  Languages,
  Sparkles,
} from "lucide-react";

import {
  personalInfo,
  education,
  skills,
  softSkills,
  languages,
} from "../data/resumeData";

import Asad from "../assets/Ad.jpg";

const ProgressBar = ({ level }) => (
  <div className="w-full h-[4px] bg-white/[0.10] rounded-full overflow-hidden mt-2">
    <div
      className="h-full rounded-full bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 shadow-[0_0_10px_rgba(56,189,248,0.5)] transition-all duration-700 ease-out"
      style={{ width: `${level}%` }}
    />
  </div>
);

const SectionTitle = ({ icon: Icon, children }) => (
  <div className="flex items-center gap-2.5 mb-5">
    <div className="w-7 h-7 rounded-lg bg-white/[0.08] border border-white/[0.10] flex items-center justify-center">
      <Icon className="w-3.5 h-3.5 text-cyan-300" />
    </div>

    <h2 className="text-[12px] font-bold uppercase tracking-[0.18em] text-white">
      {children}
    </h2>

    <div className="flex-1 h-px bg-gradient-to-r from-white/20 to-transparent" />
  </div>
);

const Sidebar = () => {
  const initials = personalInfo.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <aside className="w-full md:w-[300px] bg-[#07111f] text-white flex-shrink-0 relative overflow-hidden">

      {/* ================= BACKGROUND EFFECTS ================= */}

      <div className="absolute inset-0 pointer-events-none">

        {/* Top glow */}
        <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-cyan-400/[0.08] blur-3xl" />

        {/* Bottom glow */}
        <div className="absolute bottom-20 -left-28 w-64 h-64 rounded-full bg-blue-500/[0.06] blur-3xl" />

        {/* Decorative circle */}
        <div className="absolute top-0 right-0 w-36 h-36 rounded-bl-[100%] bg-gradient-to-br from-cyan-400/[0.12] to-transparent" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="relative px-6 sm:px-7 pt-9 pb-9">

        {/* ================= PROFILE ================= */}

        <div className="flex flex-col items-center">

          {/* Premium Photo Ring */}
          <div className="relative mb-5">

            {/* Glow */}
            <div className="absolute inset-[-8px] rounded-full bg-cyan-400/10 blur-md" />

            {/* Outer ring */}
            <div className="relative w-[132px] h-[132px] rounded-full p-[3px] bg-gradient-to-br from-cyan-300 via-sky-500 to-blue-700 shadow-[0_0_25px_rgba(14,165,233,0.18)]">

              {/* Inner border */}
              <div className="w-full h-full rounded-full p-[4px] bg-[#07111f]">

                <div className="w-full h-full rounded-full overflow-hidden bg-[#0d1b2d]">

                  {personalInfo ? (
                    <img
                      src={Asad}
                      alt={personalInfo.name}
                      className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-3xl font-bold bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                        {initials}
                      </span>
                    </div>
                  )}

                </div>
              </div>
            </div>

            {/* Online indicator */}
            <span className="absolute bottom-2 right-2 w-4 h-4 rounded-full bg-emerald-400 border-[3px] border-[#07111f] shadow-[0_0_10px_rgba(52,211,153,.6)]" />
          </div>

          {/* Mobile Name */}
          <div className="text-center mb-7 md:hidden">
            <h1 className="text-[22px] font-bold tracking-tight">
              {personalInfo.name}
            </h1>

            <p className="text-[11px] uppercase tracking-[0.18em] text-cyan-300 mt-2">
              {personalInfo.title}
            </p>
          </div>
        </div>

        {/* ================= CONTACT ================= */}

        <div className="mb-9">

          <SectionTitle icon={Mail}>Contact</SectionTitle>

          <div className="space-y-3">

            {/* Email */}
            <div className="group flex items-start gap-3.5 p-3 rounded-xl border border-white/[0.06] bg-white/[0.025] hover:bg-white/[0.05] hover:border-cyan-400/20 transition-all duration-300">

              <div className="w-8 h-8 flex-shrink-0 rounded-lg bg-cyan-400/[0.08] flex items-center justify-center">
                <Mail className="w-3.5 h-3.5 text-cyan-300" />
              </div>

              <div className="min-w-0">
                <p className="text-[9px] uppercase tracking-[0.15em] text-white/35 mb-1">
                  Email
                </p>

                <p className="text-[11px] leading-relaxed text-white/85 break-all">
                  {personalInfo.email}
                </p>
              </div>
            </div>

            {/* Address */}
            <div className="group flex items-start gap-3.5 p-3 rounded-xl border border-white/[0.06] bg-white/[0.025] hover:bg-white/[0.05] hover:border-cyan-400/20 transition-all duration-300">

              <div className="w-8 h-8 flex-shrink-0 rounded-lg bg-cyan-400/[0.08] flex items-center justify-center">
                <MapPin className="w-3.5 h-3.5 text-cyan-300" />
              </div>

              <div>
                <p className="text-[9px] uppercase tracking-[0.15em] text-white/35 mb-1">
                  Location
                </p>

                <p className="text-[11px] leading-relaxed text-white/85">
                  {personalInfo.address}
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="group flex items-start gap-3.5 p-3 rounded-xl border border-white/[0.06] bg-white/[0.025] hover:bg-white/[0.05] hover:border-cyan-400/20 transition-all duration-300">

              <div className="w-8 h-8 flex-shrink-0 rounded-lg bg-cyan-400/[0.08] flex items-center justify-center">
                <Phone className="w-3.5 h-3.5 text-cyan-300" />
              </div>

              <div>
                <p className="text-[9px] uppercase tracking-[0.15em] text-white/35 mb-1">
                  Phone
                </p>

                <p className="text-[11px] text-white/85">
                  {personalInfo.phone}
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* ================= EDUCATION ================= */}

        <div className="mb-9">

          <SectionTitle icon={GraduationCap}>
            Education
          </SectionTitle>

          <div className="relative ml-2">

            {/* Timeline */}
            <div className="absolute left-[5px] top-2 bottom-2 w-px bg-gradient-to-b from-cyan-400/50 via-white/10 to-transparent" />

            <div className="space-y-6">

              {education.map((edu, i) => (
                <div key={i} className="relative pl-6">

                  {/* Dot */}
                  <div className="absolute left-0 top-1.5 w-[11px] h-[11px] rounded-full bg-[#07111f] border-2 border-cyan-400 shadow-[0_0_8px_rgba(34,211,238,.4)]" />

                  <p className="text-[12px] font-semibold leading-snug text-white/95">
                    {edu.degree}
                  </p>

                  <p className="text-[10px] text-cyan-300/80 mt-1">
                    {edu.institution}
                  </p>

                  <p className="text-[9px] text-white/40 mt-1">
                    {edu.location}
                  </p>

                  <span className="inline-block mt-2 px-2 py-1 rounded-md bg-white/[0.05] border border-white/[0.06] text-[8px] tracking-wider text-white/45">
                    {edu.period}
                  </span>

                </div>
              ))}

            </div>
          </div>
        </div>

        {/* ================= TECHNICAL SKILLS ================= */}

        <div className="mb-9">

          <SectionTitle icon={Code2}>
            Technical Skills
          </SectionTitle>

          <div className="space-y-4">

            {skills.map((skill, i) => (
              <div key={i} className="group">

                <div className="flex justify-between items-center">

                  <span className="text-[10px] font-medium text-white/80 group-hover:text-white transition-colors">
                    {skill.name}
                  </span>

                  <span className="text-[8px] text-cyan-300/60">
                    {skill.level}%
                  </span>

                </div>

                <ProgressBar level={skill.level} />

              </div>
            ))}

          </div>
        </div>

        {/* ================= SOFT SKILLS ================= */}

        <div className="mb-9">

          <div className="flex items-center gap-2 mb-4">

            <Sparkles className="w-3.5 h-3.5 text-cyan-300" />

            <p className="text-[10px] uppercase tracking-[0.17em] text-white/45 font-semibold">
              Professional Strengths
            </p>

          </div>

          <div className="space-y-3">

            {softSkills.map((skill, i) => (
              <div key={i}>

                <div className="flex justify-between">
                  <span className="text-[10px] text-white/75">
                    {skill.name}
                  </span>

                  <span className="text-[8px] text-white/35">
                    {skill.level}%
                  </span>
                </div>

                <ProgressBar level={skill.level} />

              </div>
            ))}

          </div>
        </div>

        {/* ================= LANGUAGES ================= */}

        <div>

          <SectionTitle icon={Languages}>
            Languages
          </SectionTitle>

          <div className="space-y-4">

            {languages.map((lang, i) => (
              <div key={i}>

                <div className="flex justify-between items-center">

                  <span className="text-[10px] font-medium text-white/80">
                    {lang.name}
                  </span>

                  <span className="text-[8px] text-cyan-300/60">
                    {lang.level}%
                  </span>

                </div>

                <ProgressBar level={lang.level} />

              </div>
            ))}

          </div>
        </div>

        {/* ================= FOOTER ACCENT ================= */}

        <div className="mt-9 pt-5 border-t border-white/[0.06]">

          <div className="flex items-center gap-2">

            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,.7)]" />

            <span className="text-[8px] uppercase tracking-[0.2em] text-white/30">
              Full Stack • MERN • Technical Leadership
            </span>

          </div>

        </div>

      </div>
    </aside>
  );
};

export default Sidebar;