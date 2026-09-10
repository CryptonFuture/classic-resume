import {
  personalInfo,
  experience,
  certifications,
} from "../data/resumeData";

import {
  Award,
  BriefcaseBusiness,
  UserRound,
  CalendarDays,
  Sparkles,
} from "lucide-react";

const SectionHeader = ({ icon: Icon, title, subtitle }) => (
  <div className="mb-6">
    <div className="flex items-center gap-3">
      <div className="w-9 h-9 rounded-xl bg-[#07111f] flex items-center justify-center shadow-sm">
        <Icon className="w-4 h-4 text-cyan-300" />
      </div>

      <div>
        <h2 className="text-[15px] font-bold text-slate-800 uppercase tracking-[0.14em]">
          {title}
        </h2>

        {subtitle && (
          <p className="text-[9px] text-slate-400 uppercase tracking-[0.12em] mt-0.5">
            {subtitle}
          </p>
        )}
      </div>
    </div>

    <div className="mt-3 h-px bg-gradient-to-r from-cyan-400/40 via-slate-200 to-transparent" />
  </div>
);

const MainContent = () => {
  return (
    <main className="flex-1 bg-[#fdfefe] relative overflow-hidden">

      {/* =====================================================
          TOP ACCENT
      ====================================================== */}

      <div className="h-[5px] bg-gradient-to-r from-[#07111f] via-cyan-500 to-blue-600" />

      {/* =====================================================
          BACKGROUND DECORATIONS
      ====================================================== */}

      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        {/* Top-right glow */}
        <div className="absolute -top-32 -right-32 w-72 h-72 rounded-full bg-cyan-400/[0.045] blur-3xl" />

        {/* Bottom-left glow */}
        <div className="absolute bottom-0 -left-32 w-72 h-72 rounded-full bg-blue-500/[0.035] blur-3xl" />

        {/* Decorative circle */}
        <div className="absolute top-0 left-0 w-28 h-28 bg-cyan-400/[0.04] rounded-br-[100%]" />

        {/* Tiny decorative line */}
        <div className="absolute top-20 right-8 w-16 h-px bg-cyan-400/20" />

        <div className="absolute top-24 right-8 w-8 h-px bg-cyan-400/30" />
      </div>

      <div className="relative px-7 sm:px-10 lg:px-12 py-8 sm:py-10">

        {/* =====================================================
            PROFILE HEADER
        ====================================================== */}

        <header className="hidden md:block mb-10">

          <div className="flex items-start justify-between gap-6">

            <div>

              <div className="flex items-center gap-2 mb-2">
                <span className="w-8 h-[2px] bg-cyan-500 rounded-full" />

                <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-slate-400">
                  {/* Full Stack Developer */}
                </span>
              </div>

              <h1 className="text-[30px] lg:text-[36px] font-extrabold text-[#0b1728] tracking-[-0.025em] leading-tight">
                {/* {personalInfo.name} */}
              </h1>

              <p className="text-[13px] text-cyan-600 font-semibold tracking-[0.08em] mt-2 uppercase">
                {/* {personalInfo.title} */}
              </p>

              <div className="flex items-center gap-2 mt-4">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />

                <span className="text-[9px] text-slate-400 uppercase tracking-[0.16em]">
                  Available for opportunities
                </span>
              </div>

            </div>

            {/* Header badge */}
            <div className="hidden lg:flex flex-col items-end">

              <div className="px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200">
                <p className="text-[8px] uppercase tracking-[0.16em] text-slate-400">
                  Professional Profile
                </p>

                <p className="text-[11px] font-bold text-slate-700 mt-1">
                  MERN • Full Stack • Leadership
                </p>
              </div>

            </div>

          </div>

          {/* Header line */}
          <div className="mt-6 flex items-center gap-3">
            <div className="w-20 h-[3px] rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
            <div className="flex-1 h-px bg-slate-200" />
          </div>

        </header>

        {/* =====================================================
            ABOUT ME
        ====================================================== */}

        <section className="mb-10">

          <SectionHeader
            icon={UserRound}
            title="About Me"
            subtitle="Professional Summary"
          />

          <div className="relative">

            {/* Left accent */}
            <div className="absolute left-0 top-0 bottom-0 w-[3px] rounded-full bg-gradient-to-b from-cyan-400 to-blue-500" />

            <div className="pl-5">

              <p className="text-[12px] sm:text-[13px] text-slate-600 leading-[1.9]">
                {personalInfo.about}
              </p>

            </div>
          </div>

        </section>

        {/* =====================================================
            EXPERIENCE
        ====================================================== */}

        <section className="mb-10">

          <SectionHeader
            icon={BriefcaseBusiness}
            title="Experience"
            subtitle="Professional Journey"
          />

          <div className="relative">

            {/* Main timeline */}
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-cyan-400/50 via-slate-200 to-transparent" />

            <div className="space-y-7">

              {experience.map((job, i) => (
                <article
                  key={i}
                  className="relative pl-7 group"
                >

                  {/* Timeline dot */}
                  <div className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full bg-white border-[3px] border-cyan-400 shadow-[0_0_0_3px_rgba(34,211,238,0.08)] z-10" />

                  {/* Experience card */}
                  <div className="rounded-2xl border border-slate-200/80 bg-white p-4 sm:p-5 shadow-[0_3px_18px_rgba(15,23,42,0.035)] hover:shadow-[0_8px_25px_rgba(15,23,42,0.07)] hover:border-cyan-200 transition-all duration-300">

                    {/* Role + Date */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">

                      <div>

                        <h3 className="text-[13px] sm:text-[14px] font-bold text-slate-800 uppercase tracking-wide">
                          {job.role}
                        </h3>

                        <p className="text-[11px] text-cyan-600 font-semibold mt-1">
                          {job.company}
                        </p>

                      </div>

                      <div className="flex items-center gap-1.5 self-start px-2.5 py-1.5 rounded-lg bg-slate-50 border border-slate-100">

                        <CalendarDays className="w-3 h-3 text-cyan-500" />

                        <span className="text-[8px] font-medium text-slate-500 whitespace-nowrap">
                          {job.period}
                        </span>

                      </div>

                    </div>

                    {/* Description */}
                    <p className="text-[11px] sm:text-[12px] text-slate-500 leading-[1.8] mt-4">
                      {job.description}
                    </p>

                    {/* Bottom accent */}
                    <div className="mt-4 flex items-center gap-2">

                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />

                      <span className="text-[8px] uppercase tracking-[0.15em] text-slate-400">
                        Professional Experience
                      </span>

                    </div>

                  </div>

                </article>
              ))}

            </div>

          </div>

        </section>

        {/* =====================================================
            CERTIFICATIONS
        ====================================================== */}

        <section>

          <SectionHeader
            icon={Award}
            title="Certifications"
            subtitle="Professional Credentials"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

            {certifications.map((cert, i) => (
              <div
                key={i}
                className="group relative p-4 rounded-2xl border border-slate-200 bg-white hover:border-cyan-200 hover:shadow-[0_8px_25px_rgba(15,23,42,0.06)] transition-all duration-300"
              >

                {/* Top glow line */}
                <div className="absolute top-0 left-5 right-5 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

                <div className="flex items-start gap-3">

                  {/* Icon */}
                  <div className="w-9 h-9 flex-shrink-0 rounded-xl bg-gradient-to-br from-slate-900 to-[#13243a] flex items-center justify-center shadow-sm">

                    <Award className="w-4 h-4 text-cyan-300" />

                  </div>

                  <div className="min-w-0">

                    <h3 className="text-[11px] font-bold text-slate-800 leading-snug">
                      {cert.name}
                    </h3>

                    <p className="text-[9px] text-cyan-600 font-semibold mt-1">
                      {cert.issuer}
                    </p>

                    <div className="flex items-center gap-1.5 mt-2">

                      <Sparkles className="w-2.5 h-2.5 text-slate-400" />

                      <span className="text-[8px] text-slate-400">
                        {cert.date}
                      </span>

                    </div>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </section>

        {/* =====================================================
            FOOTER
        ====================================================== */}

        <div className="mt-10 pt-5 border-t border-slate-100">

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-2">

              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />

              <span className="text-[8px] uppercase tracking-[0.18em] text-slate-400">
                Senior Full Stack Developer
              </span>

            </div>

            <span className="text-[8px] text-slate-300 tracking-wider">
              CV • 2026
            </span>

          </div>

        </div>

      </div>
    </main>
  );
};

export default MainContent;