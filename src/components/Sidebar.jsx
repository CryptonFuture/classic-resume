import {
  Mail,
  MapPin,
  Phone,
  GraduationCap,
  Code2,
  Languages,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

import {
  personalInfo,
  education,
  skills,
  softSkills,
  languages,
} from "../data/resumeData";

import Asad from "../assets/Ad.jpg";

/* =========================================================
   SKILL BAR
========================================================= */

const SkillBar = ({ level }) => (
  <div className="w-full h-[3px] bg-white/[0.08] rounded-full overflow-hidden">
    <div
      className="
        h-full
        rounded-full
        bg-gradient-to-r
        from-cyan-400
        via-sky-400
        to-blue-500
        transition-all
        duration-700
        ease-out
      "
      style={{ width: `${level}%` }}
    />
  </div>
);

/* =========================================================
   SECTION LABEL
========================================================= */

const SectionLabel = ({ icon: Icon, children }) => (
  <div className="flex items-center gap-2 mb-4">

    <Icon className="w-3.5 h-3.5 text-cyan-400" />

    <span
      className="
        text-[9px]
        font-bold
        uppercase
        tracking-[0.2em]
        text-white/45
      "
    >
      {children}
    </span>

    <div className="flex-1 h-px bg-white/[0.07]" />

  </div>
);

/* =========================================================
   CONTACT ITEM
========================================================= */

const ContactItem = ({ icon: Icon, label, value }) => (
  <div className="group flex items-center gap-3">

    <div
      className="
        w-9
        h-9
        flex-shrink-0
        rounded-xl
        bg-white/[0.045]
        border
        border-white/[0.07]
        flex
        items-center
        justify-center
        group-hover:bg-cyan-400/[0.08]
        group-hover:border-cyan-400/20
        transition-all
        duration-300
      "
    >
      <Icon className="w-3.5 h-3.5 text-cyan-400" />
    </div>

    <div className="min-w-0">

      <p
        className="
          text-[7px]
          uppercase
          tracking-[0.16em]
          text-white/30
          mb-0.5
        "
      >
        {label}
      </p>

      <p
        className="
          text-[10px]
          text-white/75
          leading-relaxed
          break-all
          group-hover:text-white
          transition-colors
        "
      >
        {value}
      </p>

    </div>

  </div>
);

/* =========================================================
   SIDEBAR
========================================================= */

const Sidebar = () => {
  const initials = personalInfo.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <aside
      className="
        w-full
        md:w-[300px]
        flex-shrink-0
        relative
        overflow-hidden
        bg-[#0a1119]
        text-white
        border-r
        border-white/[0.07]
      "
    >

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="absolute inset-0 pointer-events-none">

        {/* Large glow */}

        <div
          className="
            absolute
            -top-32
            -right-32
            w-80
            h-80
            rounded-full
            bg-cyan-400/[0.07]
            blur-[90px]
          "
        />

        {/* Bottom glow */}

        <div
          className="
            absolute
            -bottom-32
            -left-32
            w-80
            h-80
            rounded-full
            bg-blue-500/[0.06]
            blur-[90px]
          "
        />

        {/* Vertical line */}

        <div
          className="
            absolute
            top-0
            right-8
            bottom-0
            w-px
            bg-gradient-to-b
            from-cyan-400/10
            via-white/[0.03]
            to-transparent
          "
        />

        {/* Grid */}

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />

      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative px-5 sm:px-6 py-7">

        {/* ===================================================
            PROFILE CARD
        =================================================== */}

        <div
          className="
            relative
            rounded-[24px]
            overflow-hidden
            border
            border-white/[0.08]
            bg-gradient-to-br
            from-[#111c28]
            via-[#0d1722]
            to-[#0a1119]
            p-5
            mb-7
          "
        >

          {/* Card glow */}

          <div
            className="
              absolute
              -top-16
              -right-16
              w-36
              h-36
              rounded-full
              bg-cyan-400/[0.08]
              blur-3xl
            "
          />

          {/* Top label */}

          <div className="relative flex items-center justify-between mb-5">

            <div className="flex items-center gap-2">

              <span
                className="
                  w-1.5
                  h-1.5
                  rounded-full
                  bg-cyan-400
                  shadow-[0_0_8px_rgba(34,211,238,.8)]
                "
              />

              <span
                className="
                  text-[7px]
                  uppercase
                  tracking-[0.2em]
                  text-white/35
                "
              >
                Professional Profile
              </span>

            </div>

            <span className="text-[8px] text-white/20">
              01
            </span>

          </div>

          {/* Photo */}

          <div className="relative flex justify-center mb-5">

            {/* Outer ring */}

            <div
              className="
                relative
                w-[125px]
                h-[125px]
                rounded-full
                p-[2px]
                bg-gradient-to-br
                from-cyan-300
                via-sky-500
                to-blue-700
              "
            >

              <div
                className="
                  w-full
                  h-full
                  rounded-full
                  p-[5px]
                  bg-[#0a1119]
                "
              >

                <div
                  className="
                    w-full
                    h-full
                    rounded-full
                    overflow-hidden
                    bg-[#142131]
                  "
                >

                  {personalInfo ? (
                    <img
                      src={Asad}
                      alt={personalInfo.name}
                      className="
                        w-full
                        h-full
                        object-cover
                        object-center
                        hover:scale-105
                        transition-transform
                        duration-500
                      "
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span
                        className="
                          text-3xl
                          font-bold
                          text-cyan-300
                        "
                      >
                        {initials}
                      </span>
                    </div>
                  )}

                </div>

              </div>

            </div>

            {/* Status */}

            <span
              className="
                absolute
                bottom-1
                right-[calc(50%-58px)]
                w-4
                h-4
                rounded-full
                bg-emerald-400
                border-[3px]
                border-[#0d1722]
                shadow-[0_0_10px_rgba(52,211,153,.6)]
              "
            />

          </div>

          {/* Name */}

          <div className="relative text-center">

            <h1
              className="
                text-[21px]
                font-extrabold
                tracking-[-0.02em]
                text-white
              "
            >
              {personalInfo.name}
            </h1>

            <p
              className="
                text-[9px]
                text-cyan-300
                uppercase
                tracking-[0.18em]
                font-semibold
                mt-2
              "
            >
              {personalInfo.title}
            </p>

            <div
              className="
                mt-4
                mx-auto
                h-px
                w-16
                bg-gradient-to-r
                from-transparent
                via-cyan-400
                to-transparent
              "
            />

          </div>

        </div>

        {/* ===================================================
            CONTACT
        =================================================== */}

        <section className="mb-8">

          <SectionLabel icon={Mail}>
            Contact
          </SectionLabel>

          <div
            className="
              rounded-2xl
              border
              border-white/[0.06]
              bg-white/[0.02]
              p-4
              space-y-4
            "
          >

            <ContactItem
              icon={Mail}
              label="Email"
              value={personalInfo.email}
            />

            <ContactItem
              icon={MapPin}
              label="Location"
              value={personalInfo.address}
            />

            <ContactItem
              icon={Phone}
              label="Phone"
              value={personalInfo.phone}
            />

          </div>

        </section>

        {/* ===================================================
            EDUCATION
        =================================================== */}

        <section className="mb-8">

          <SectionLabel icon={GraduationCap}>
            Education
          </SectionLabel>

          <div className="relative">

            {/* Timeline */}

            <div
              className="
                absolute
                left-[5px]
                top-2
                bottom-2
                w-px
                bg-gradient-to-b
                from-cyan-400/60
                via-white/10
                to-transparent
              "
            />

            <div className="space-y-6">

              {education.map((edu, i) => (
                <div
                  key={i}
                  className="
                    relative
                    pl-6
                  "
                >

                  {/* Timeline point */}

                  <div
                    className="
                      absolute
                      left-0
                      top-1
                      w-[11px]
                      h-[11px]
                      rounded-full
                      bg-[#0a1119]
                      border-2
                      border-cyan-400
                      shadow-[0_0_8px_rgba(34,211,238,.35)]
                    "
                  />

                  <p
                    className="
                      text-[11px]
                      font-bold
                      text-white/90
                      leading-snug
                    "
                  >
                    {edu.degree}
                  </p>

                  <p
                    className="
                      text-[9px]
                      text-cyan-300/80
                      font-medium
                      mt-1
                    "
                  >
                    {edu.institution}
                  </p>

                  <p
                    className="
                      text-[8px]
                      text-white/35
                      mt-1
                    "
                  >
                    {edu.location}
                  </p>

                  <span
                    className="
                      inline-flex
                      mt-2
                      px-2
                      py-1
                      rounded-md
                      bg-white/[0.04]
                      border
                      border-white/[0.06]
                      text-[7px]
                      text-white/40
                      tracking-wider
                    "
                  >
                    {edu.period}
                  </span>

                </div>
              ))}

            </div>

          </div>

        </section>

        {/* ===================================================
            TECHNICAL SKILLS
        =================================================== */}

        <section className="mb-8">

          <SectionLabel icon={Code2}>
            Technical Skills
          </SectionLabel>

          <div className="space-y-4">

            {skills.map((skill, i) => (
              <div key={i} className="group">

                <div className="flex items-center justify-between mb-1.5">

                  <div className="flex items-center gap-2">

                    <span
                      className="
                        w-1
                        h-1
                        rounded-full
                        bg-cyan-400
                        opacity-50
                        group-hover:opacity-100
                        transition-opacity
                      "
                    />

                    <span
                      className="
                        text-[9px]
                        font-medium
                        text-white/65
                        group-hover:text-white/90
                        transition-colors
                      "
                    >
                      {skill.name}
                    </span>

                  </div>

                  <span
                    className="
                      text-[7px]
                      text-cyan-300/50
                    "
                  >
                    {skill.level}%
                  </span>

                </div>

                <SkillBar level={skill.level} />

              </div>
            ))}

          </div>

        </section>

        {/* ===================================================
            PROFESSIONAL STRENGTHS
        =================================================== */}

        <section className="mb-8">

          <SectionLabel icon={Sparkles}>
            Professional Strengths
          </SectionLabel>

          <div className="grid grid-cols-2 gap-2">

            {softSkills.map((skill, i) => (
              <div
                key={i}
                className="
                  group
                  relative
                  rounded-xl
                  border
                  border-white/[0.06]
                  bg-white/[0.025]
                  p-3
                  hover:bg-white/[0.05]
                  hover:border-cyan-400/15
                  transition-all
                  duration-300
                "
              >

                <div className="flex items-center justify-between gap-2">

                  <span
                    className="
                      text-[8px]
                      text-white/65
                      leading-tight
                    "
                  >
                    {skill.name}
                  </span>

                  <ArrowUpRight
                    className="
                      w-2.5
                      h-2.5
                      text-white/15
                      group-hover:text-cyan-400
                      transition-colors
                    "
                  />

                </div>

                <div className="mt-2">

                  <div
                    className="
                      h-[2px]
                      rounded-full
                      bg-white/[0.08]
                      overflow-hidden
                    "
                  >

                    <div
                      className="
                        h-full
                        rounded-full
                        bg-cyan-400/70
                      "
                      style={{
                        width: `${skill.level}%`,
                      }}
                    />

                  </div>

                </div>

              </div>
            ))}

          </div>

        </section>

        {/* ===================================================
            LANGUAGES
        =================================================== */}

        <section>

          <SectionLabel icon={Languages}>
            Languages
          </SectionLabel>

          <div
            className="
              rounded-2xl
              border
              border-white/[0.06]
              bg-white/[0.02]
              p-4
              space-y-4
            "
          >

            {languages.map((lang, i) => (
              <div key={i}>

                <div className="flex items-center justify-between mb-1.5">

                  <span
                    className="
                      text-[9px]
                      font-medium
                      text-white/70
                    "
                  >
                    {lang.name}
                  </span>

                  <span
                    className="
                      text-[7px]
                      text-white/30
                    "
                  >
                    {lang.level}%
                  </span>

                </div>

                <div
                  className="
                    w-full
                    h-[3px]
                    rounded-full
                    bg-white/[0.08]
                    overflow-hidden
                  "
                >

                  <div
                    className="
                      h-full
                      rounded-full
                      bg-gradient-to-r
                      from-cyan-400
                      to-blue-500
                    "
                    style={{
                      width: `${lang.level}%`,
                    }}
                  />

                </div>

              </div>
            ))}

          </div>

        </section>

        {/* ===================================================
            FOOTER
        =================================================== */}

        <div
          className="
            mt-8
            pt-5
            border-t
            border-white/[0.06]
          "
        >

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-2">

              <span
                className="
                  w-1.5
                  h-1.5
                  rounded-full
                  bg-cyan-400
                  shadow-[0_0_7px_rgba(34,211,238,.6)]
                "
              />

              <span
                className="
                  text-[7px]
                  uppercase
                  tracking-[0.18em]
                  text-white/30
                "
              >
                Full Stack • MERN
              </span>

            </div>

            <span
              className="
                text-[7px]
                uppercase
                tracking-wider
                text-white/20
              "
            >
              2026
            </span>

          </div>

        </div>

      </div>
    </aside>
  );
};

export default Sidebar;