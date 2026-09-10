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
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";

const SectionHeader = ({ icon: Icon, title, subtitle, number }) => (
  <div className="mb-5">
    <div className="flex items-center justify-between">

      <div className="flex items-center gap-3">

        <div className="relative w-10 h-10 rounded-xl bg-[#07111f] flex items-center justify-center shadow-[0_5px_15px_rgba(7,17,31,0.12)]">
          <div className="absolute inset-0 rounded-xl bg-cyan-400/10" />

          <Icon className="relative w-[17px] h-[17px] text-cyan-300" />
        </div>

        <div>
          <div className="flex items-center gap-2">

            {number && (
              <span className="text-[8px] font-bold text-cyan-500 tracking-wider">
                {number}
              </span>
            )}

            <h2 className="text-[14px] font-extrabold text-[#0b1728] uppercase tracking-[0.13em]">
              {title}
            </h2>
          </div>

          {subtitle && (
            <p className="text-[8px] text-slate-400 uppercase tracking-[0.16em] mt-1">
              {subtitle}
            </p>
          )}
        </div>

      </div>

      <div className="hidden sm:block">
        <span className="text-[7px] font-semibold uppercase tracking-[0.18em] text-slate-300">
          2026
        </span>
      </div>

    </div>

    <div className="mt-3 flex items-center gap-2">
      <div className="w-14 h-[2px] rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
      <div className="flex-1 h-px bg-gradient-to-r from-slate-200 to-transparent" />
    </div>
  </div>
);

const MainContent = () => {
  return (
    <main className="flex-1 bg-[#fcfefe] relative overflow-hidden">

      {/* =====================================================
          PREMIUM BACKGROUND
      ====================================================== */}

      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-cyan-400/[0.035] blur-3xl" />

        <div className="absolute bottom-0 -left-40 w-80 h-80 rounded-full bg-blue-500/[0.025] blur-3xl" />

        <div className="absolute top-0 left-0 w-32 h-32 bg-cyan-400/[0.025] rounded-br-full" />

        <div className="absolute top-24 right-10 w-14 h-px bg-cyan-400/25" />

        <div className="absolute top-[98px] right-10 w-7 h-px bg-cyan-400/35" />

      </div>

      {/* =====================================================
          TOP ACCENT
      ====================================================== */}

      <div className="relative h-[5px] bg-gradient-to-r from-[#07111f] via-cyan-500 to-blue-600" />

      <div className="relative px-7 sm:px-9 lg:px-11 py-7 sm:py-8">

        {/* =====================================================
            PROFILE HEADER
        ====================================================== */}

        <header className="hidden md:block mb-8">

          <div className="flex items-start justify-between gap-6">

            <div>

              <div className="flex items-center gap-2 mb-2">

                <span className="w-7 h-[2px] bg-cyan-500 rounded-full" />

                <span className="text-[8px] font-bold uppercase tracking-[0.24em] text-slate-400">
                  Professional Resume
                </span>

              </div>

              <h1 className="text-[29px] lg:text-[34px] font-black text-[#081526] tracking-[-0.035em] leading-none">
                {personalInfo.name}
              </h1>

              <div className="flex items-center gap-2 mt-3">

                <span className="px-2.5 py-1 rounded-md bg-cyan-50 border border-cyan-100 text-[8px] font-bold uppercase tracking-[0.14em] text-cyan-700">
                  {personalInfo.title}
                </span>

                <span className="text-[8px] text-slate-300">
                  /
                </span>

                <span className="text-[8px] font-medium uppercase tracking-[0.13em] text-slate-400">
                  MERN • MEAN • AI
                </span>

              </div>

              <div className="flex items-center gap-2 mt-3">

                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-50 animate-ping" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>

                <span className="text-[8px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                  Open to opportunities
                </span>

              </div>

            </div>

            {/* PROFILE BADGE */}

            <div className="hidden lg:block">

              <div className="relative px-4 py-3 rounded-2xl bg-white border border-slate-200 shadow-[0_6px_25px_rgba(15,23,42,0.04)] overflow-hidden">

                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500" />

                <p className="text-[7px] uppercase tracking-[0.2em] text-slate-400">
                  Professional Profile
                </p>

                <p className="text-[10px] font-extrabold text-slate-700 mt-1.5">
                  Senior Full Stack Engineer
                </p>

                <div className="flex items-center gap-1.5 mt-2">

                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />

                  <span className="text-[7px] text-slate-400">
                    MERN • MEAN • Backend • AI
                  </span>

                </div>

              </div>

            </div>

          </div>

          <div className="mt-5 flex items-center gap-3">
            <div className="w-16 h-[3px] rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
            <div className="flex-1 h-px bg-slate-200" />
          </div>

        </header>

        {/* =====================================================
            ABOUT
        ====================================================== */}

        <section className="mb-8">

          <SectionHeader
            icon={UserRound}
            title="About Me"
            subtitle="Professional Summary"
            number="01"
          />

          <div className="relative pl-5">

            <div className="absolute left-0 top-0 bottom-0 w-[3px] rounded-full bg-gradient-to-b from-cyan-400 via-blue-500 to-transparent" />

            <p className="text-[11px] sm:text-[12px] text-slate-600 leading-[1.75]">
              {personalInfo.about}
            </p>

          </div>

        </section>

        {/* =====================================================
            EXPERIENCE
        ====================================================== */}

        <section className="mb-8">

          <SectionHeader
            icon={BriefcaseBusiness}
            title="Experience"
            subtitle="Professional Journey"
            number="02"
          />

          <div className="relative">

            {/* Timeline */}

            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-cyan-400 via-slate-200 to-transparent" />

            <div className="space-y-4">

              {experience.map((job, i) => (

                <article
                  key={i}
                  className="relative pl-7"
                >

                  {/* Timeline dot */}

                  <div className="absolute left-0 top-3 w-[15px] h-[15px] rounded-full bg-white border-[3px] border-cyan-400 shadow-[0_0_0_3px_rgba(34,211,238,0.08)] z-10" />

                  {/* Card */}

                  <div className="group relative rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_3px_18px_rgba(15,23,42,0.035)] hover:border-cyan-200 hover:shadow-[0_8px_28px_rgba(15,23,42,0.07)] transition-all duration-300 overflow-hidden">

                    {/* Top accent */}

                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2.5">

                      <div className="min-w-0">

                        <div className="flex items-center gap-2">

                          <h3 className="text-[12px] sm:text-[13px] font-extrabold text-slate-800 uppercase tracking-wide">
                            {job.role}
                          </h3>

                          <ArrowUpRight className="w-3 h-3 text-slate-300 group-hover:text-cyan-500 transition-colors" />

                        </div>

                        <p className="text-[10px] text-cyan-600 font-bold uppercase tracking-[0.08em] mt-1">
                          {job.company}
                        </p>

                      </div>

                      <div className="flex items-center gap-1.5 self-start px-2.5 py-1.5 rounded-lg bg-slate-50 border border-slate-100">

                        <CalendarDays className="w-3 h-3 text-cyan-500" />

                        <span className="text-[7px] font-bold text-slate-500 whitespace-nowrap uppercase tracking-wide">
                          {job.period}
                        </span>

                      </div>

                    </div>

                    <p className="text-[10px] sm:text-[11px] text-slate-500 leading-[1.7] mt-3">
                      {job.description}
                    </p>

                    <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center gap-2">

                      <CheckCircle2 className="w-3 h-3 text-cyan-500" />

                      <span className="text-[7px] font-semibold uppercase tracking-[0.15em] text-slate-400">
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
            number="03"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

            {certifications.map((cert, i) => (

              <div
                key={i}
                className="group relative p-3.5 rounded-2xl border border-slate-200 bg-white shadow-[0_3px_16px_rgba(15,23,42,0.025)] hover:border-cyan-200 hover:shadow-[0_8px_24px_rgba(15,23,42,0.06)] transition-all duration-300 overflow-hidden"
              >

                {/* Accent */}

                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

                <div className="flex items-start gap-3">

                  <div className="w-9 h-9 flex-shrink-0 rounded-xl bg-gradient-to-br from-[#07111f] to-[#13243a] flex items-center justify-center shadow-sm">

                    <Award className="w-4 h-4 text-cyan-300" />

                  </div>

                  <div className="min-w-0">

                    <h3 className="text-[10px] font-extrabold text-slate-800 leading-snug">
                      {cert.name}
                    </h3>

                    <p className="text-[8px] text-cyan-600 font-bold uppercase tracking-wide mt-1">
                      {cert.issuer}
                    </p>

                    <div className="flex items-center gap-1.5 mt-2">

                      <Sparkles className="w-2.5 h-2.5 text-cyan-400" />

                      <span className="text-[7px] text-slate-400">
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

        <footer className="mt-7 pt-4 border-t border-slate-100">

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-2">

              <div className="w-5 h-5 rounded-md bg-[#07111f] flex items-center justify-center">

                <span className="text-[6px] font-black text-cyan-300">
                  MA
                </span>

              </div>

              <span className="text-[7px] font-bold uppercase tracking-[0.16em] text-slate-400">
                Senior Full Stack Developer
              </span>

            </div>

            <span className="text-[7px] font-semibold text-slate-300 tracking-wider">
              CV • 2026
            </span>

          </div>

        </footer>

      </div>

    </main>
  );
};

export default MainContent;