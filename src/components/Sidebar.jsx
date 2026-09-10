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
  <div className="relative w-full h-[3px] bg-white/[0.07] rounded-full overflow-hidden">
    <div
      className="
        h-full
        rounded-full
        bg-gradient-to-r
        from-cyan-400
        via-emerald-400
        to-green-400
        shadow-[0_0_8px_rgba(52,211,153,0.35)]
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
  <div className="flex items-center gap-2.5 mb-4">
    <div
      className="
        relative
        w-7
        h-7
        flex-shrink-0
        rounded-lg
        flex
        items-center
        justify-center
        bg-gradient-to-br
        from-cyan-400/[0.12]
        to-emerald-400/[0.05]
        border
        border-cyan-400/[0.12]
        shadow-[0_4px_14px_rgba(34,211,238,0.05)]
      "
    >
      <Icon className="w-3.5 h-3.5 text-cyan-300" />
    </div>

    <span
      className="
        text-[9px]
        font-bold
        uppercase
        tracking-[0.22em]
        text-white/55
        whitespace-nowrap
      "
    >
      {children}
    </span>

    <div className="flex-1 h-px bg-gradient-to-r from-cyan-400/15 via-white/[0.05] to-transparent" />
  </div>
);

/* =========================================================
   CONTACT ITEM
========================================================= */

const ContactItem = ({ icon: Icon, label, value }) => (
  <div className="group flex items-center gap-3">
    <div
      className="
        relative
        w-9
        h-9
        flex-shrink-0
        rounded-xl
        bg-gradient-to-br
        from-white/[0.06]
        to-white/[0.015]
        border
        border-white/[0.07]
        flex
        items-center
        justify-center
        group-hover:bg-cyan-400/[0.08]
        group-hover:border-cyan-400/20
        group-hover:shadow-[0_0_18px_rgba(34,211,238,0.08)]
        transition-all
        duration-300
      "
    >
      <Icon className="w-3.5 h-3.5 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
    </div>

    <div className="min-w-0">
      <p
        className="
          text-[7px]
          uppercase
          tracking-[0.18em]
          text-cyan-400/35
          mb-0.5
        "
      >
        {label}
      </p>

      <p
        className="
          text-[10px]
          text-white/70
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
  return (
    <aside
      className="
        w-full
        md:w-[300px]
        flex-shrink-0
        relative
        overflow-hidden
        bg-[#071018]
        text-white
        border-r
        border-cyan-400/[0.08]
      "
    >
      {/* =====================================================
          PREMIUM BACKGROUND
      ===================================================== */}

      <div className="absolute inset-0 pointer-events-none">

        {/* Top Cyan Glow */}
        <div
          className="
            absolute
            -top-40
            -right-40
            w-[420px]
            h-[420px]
            rounded-full
            bg-cyan-400/[0.065]
            blur-[120px]
          "
        />

        {/* Middle Emerald Glow */}
        <div
          className="
            absolute
            top-[35%]
            -left-40
            w-[350px]
            h-[350px]
            rounded-full
            bg-emerald-400/[0.045]
            blur-[110px]
          "
        />

        {/* Bottom Blue Glow */}
        <div
          className="
            absolute
            -bottom-40
            right-[-100px]
            w-[360px]
            h-[360px]
            rounded-full
            bg-blue-500/[0.045]
            blur-[120px]
          "
        />

        {/* Right Vertical Line */}
        <div
          className="
            absolute
            top-0
            right-7
            bottom-0
            w-px
            bg-gradient-to-b
            from-cyan-400/20
            via-white/[0.035]
            to-transparent
          "
        />

        {/* Vertical Accent */}
        <div
          className="
            absolute
            top-[230px]
            right-[25px]
            w-[2px]
            h-16
            rounded-full
            bg-gradient-to-b
            from-cyan-400/70
            via-emerald-400/40
            to-transparent
            shadow-[0_0_12px_rgba(34,211,238,0.3)]
          "
        />

        {/* Premium Grid */}
        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Top Edge */}
        <div
          className="
            absolute
            top-0
            left-0
            right-0
            h-px
            bg-gradient-to-r
            from-transparent
            via-cyan-400/40
            to-transparent
          "
        />
      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative px-5 sm:px-6 py-7">

        {/* ===================================================
            LARGE PROFILE IMAGE
        =================================================== */}

        <div className="relative flex justify-center mb-10">

          {/* Ambient Glow */}
          <div
            className="
              absolute
              inset-[-30px]
              rounded-full
              bg-cyan-400/[0.055]
              blur-[35px]
            "
          />

          {/* Outer Ring */}
          <div
            className="
              absolute
              w-[198px]
              h-[198px]
              rounded-full
              border
              border-cyan-400/[0.07]
            "
          />

          {/* Dashed Ring */}
          <div
            className="
              absolute
              w-[188px]
              h-[188px]
              rounded-full
              border
              border-dashed
              border-cyan-400/[0.16]
              rotate-6
            "
          />

          {/* Inner Decorative Ring */}
          <div
            className="
              absolute
              w-[180px]
              h-[180px]
              rounded-full
              border
              border-emerald-400/[0.08]
              -rotate-6
            "
          />

          {/* Image Ring */}
          <div
            className="
              relative
              w-[174px]
              h-[174px]
              rounded-full
              p-[3px]
              bg-gradient-to-br
              from-cyan-300
              via-emerald-400
              to-blue-700
              shadow-[0_0_45px_rgba(34,211,238,0.20)]
            "
          >
            {/* Dark Inner Border */}
            <div
              className="
                w-full
                h-full
                rounded-full
                p-[6px]
                bg-[#071018]
              "
            >
              {/* Image */}
              <div
                className="
                  w-full
                  h-full
                  rounded-full
                  overflow-hidden
                  bg-[#101c27]
                  border
                  border-cyan-400/[0.10]
                "
              >
                <img
                  src={Asad}
                  alt="Muhammad Asad Ali Akbar"
                  className="
                    w-full
                    h-full
                    object-cover
                    object-center
                    hover:scale-105
                    transition-transform
                    duration-700
                  "
                />

                {/* Image Overlay */}
                <div
                  className="
                    absolute
                    inset-0
                    rounded-full
                    bg-gradient-to-t
                    from-emerald-950/20
                    via-transparent
                    to-white/[0.03]
                    pointer-events-none
                  "
                />
              </div>
            </div>
          </div>

          {/* Online Status */}
          <span
            className="
              absolute
              bottom-[2px]
              right-[calc(50%-82px)]
              w-6
              h-6
              rounded-full
              bg-[#071018]
              flex
              items-center
              justify-center
              shadow-[0_0_14px_rgba(52,211,153,0.25)]
            "
          >
            <span
              className="
                w-3.5
                h-3.5
                rounded-full
                bg-emerald-400
                border-2
                border-[#071018]
                shadow-[0_0_10px_rgba(52,211,153,0.9)]
              "
            />
          </span>

          {/* Decorative Dot */}
          <span
            className="
              absolute
              top-[7px]
              right-[calc(50%-78px)]
              w-2
              h-2
              rounded-full
              bg-cyan-300
              shadow-[0_0_10px_rgba(103,232,249,0.8)]
            "
          />
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
              relative
              rounded-2xl
              border
              border-white/[0.06]
              bg-gradient-to-br
              from-white/[0.035]
              via-white/[0.018]
              to-transparent
              p-4
              space-y-4
              shadow-[0_12px_30px_rgba(0,0,0,0.10)]
            "
          >
            {/* Top Highlight */}
            <div
              className="
                absolute
                top-0
                left-6
                right-6
                h-px
                bg-gradient-to-r
                from-transparent
                via-cyan-400/25
                to-transparent
              "
            />

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
                via-emerald-400/15
                to-transparent
              "
            />

            <div className="space-y-6">
              {education.map((edu, i) => (
                <div
                  key={i}
                  className="relative pl-6 group"
                >
                  {/* Timeline Point */}
                  <div
                    className="
                      absolute
                      left-0
                      top-1
                      w-[11px]
                      h-[11px]
                      rounded-full
                      bg-[#071018]
                      border-2
                      border-cyan-400
                      shadow-[0_0_9px_rgba(34,211,238,0.35)]
                      group-hover:bg-cyan-400
                      transition-all
                    "
                  />

                  <p
                    className="
                      text-[11px]
                      font-bold
                      text-white/90
                      leading-snug
                      group-hover:text-cyan-200
                      transition-colors
                    "
                  >
                    {edu.degree}
                  </p>

                  <p
                    className="
                      text-[9px]
                      text-cyan-300/80
                      font-semibold
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
                      px-2.5
                      py-1
                      rounded-md
                      bg-cyan-400/[0.045]
                      border
                      border-cyan-400/[0.09]
                      text-[7px]
                      text-cyan-200/50
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
              <div
                key={i}
                className="group"
              >
                <div className="flex items-center justify-between mb-1.5">

                  <div className="flex items-center gap-2">
                    <span
                      className="
                        w-1.5
                        h-1.5
                        rounded-full
                        bg-cyan-400
                        shadow-[0_0_6px_rgba(34,211,238,0.5)]
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
                      font-semibold
                      text-cyan-300/50
                      group-hover:text-cyan-200
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
                  overflow-hidden
                  rounded-xl
                  border
                  border-white/[0.06]
                  bg-gradient-to-br
                  from-white/[0.035]
                  to-white/[0.012]
                  p-3
                  hover:bg-cyan-400/[0.055]
                  hover:border-cyan-400/15
                  hover:-translate-y-[1px]
                  transition-all
                  duration-300
                "
              >
                {/* Hover Glow */}
                <div
                  className="
                    absolute
                    -top-5
                    -right-5
                    w-12
                    h-12
                    rounded-full
                    bg-cyan-400/[0.08]
                    blur-xl
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity
                  "
                />

                <div className="relative flex items-center justify-between gap-2">

                  <span
                    className="
                      text-[8px]
                      text-white/65
                      leading-tight
                      group-hover:text-white
                      transition-colors
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

                <div className="relative mt-2.5">
                  <div
                    className="
                      h-[2px]
                      rounded-full
                      bg-white/[0.07]
                      overflow-hidden
                    "
                  >
                    <div
                      className="
                        h-full
                        rounded-full
                        bg-gradient-to-r
                        from-cyan-400
                        to-emerald-400
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
              relative
              rounded-2xl
              border
              border-white/[0.06]
              bg-gradient-to-br
              from-white/[0.03]
              to-white/[0.012]
              p-4
              space-y-4
            "
          >
            {/* Top Highlight */}
            <div
              className="
                absolute
                top-0
                left-6
                right-6
                h-px
                bg-gradient-to-r
                from-transparent
                via-cyan-400/20
                to-transparent
              "
            />

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
                      font-semibold
                      text-cyan-300/45
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
                    bg-white/[0.07]
                    overflow-hidden
                  "
                >
                  <div
                    className="
                      h-full
                      rounded-full
                      bg-gradient-to-r
                      from-cyan-400
                      via-emerald-400
                      to-green-400
                      shadow-[0_0_8px_rgba(52,211,153,0.3)]
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
              <div
                className="
                  w-6
                  h-6
                  rounded-lg
                  bg-cyan-400/[0.06]
                  border
                  border-cyan-400/[0.10]
                  flex
                  items-center
                  justify-center
                "
              >
                <Code2 className="w-3 h-3 text-cyan-400" />
              </div>

              <div>
                <p
                  className="
                    text-[7px]
                    uppercase
                    tracking-[0.18em]
                    text-white/35
                  "
                >
                  Full Stack • MERN
                </p>

                <p
                  className="
                    text-[6px]
                    uppercase
                    tracking-[0.12em]
                    text-cyan-400/25
                    mt-0.5
                  "
                >
                  Engineering Excellence
                </p>
              </div>
            </div>

            <span
              className="
                text-[7px]
                uppercase
                tracking-wider
                text-cyan-400/25
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