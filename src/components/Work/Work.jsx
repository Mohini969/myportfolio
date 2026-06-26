import React from "react";
import { motion as Motion } from "framer-motion";
import { BriefcaseBusiness, Code2, Laptop, Medal, Trophy } from "lucide-react";

const Work = () => {
  const workData = [
    {
      title: "Java Intern",
      company: "OCAC, Bhubaneswar",
      icon: <BriefcaseBusiness />,
      description:
        "Worked with Java, OOP concepts, Collections, File Handling and core APIs while developing practical applications and improving problem-solving skills.",
    },
    {
      title: "Backend Development Intern",
      company: "Web_Bocket Pvt. Ltd.",
      icon: <Laptop />,
      description:
        "Developed REST APIs using Node.js, Express.js and MongoDB. Implemented authentication, CRUD operations and optimized backend functionality.",
    },
  ];

  const experienceData = [
    {
      title: "Frontend Development",
      description:
        "I have hands-on experience in building interactive and responsive frontend applications using HTML, CSS, JavaScript, React, Tailwind CSS, and Bootstrap. I have developed my personal portfolio to showcase my projects.",
    },
    {
      title: "Backend Development",
      description:
        "I have experience creating backend services using Node.js, Express, and MongoDB. I have implemented APIs and worked on data management for my projects, preparing for full-stack development.",
    },
    {
      title: "Java Development",
      description:
        "I have built projects using Java including Flight Management System and Bank Management System. These projects helped me understand OOP concepts, file handling, and basic database integration.",
    },
  ];

  const hackathonData = {
    title: "Hackathon Participant",
    competition: "Participated in 4+ hackathons and coding competitions",
    year: "Ongoing",
    technologies: "Full-stack solutions",
    achievement:
      "Strengthened problem-solving, rapid prototyping, teamwork, and software development skills in a fast-paced environment.",
    description:
      "Collaborated with a team to design and develop full-stack solutions for real-world challenges.",
  };

  return (
    <section id="work" className="section">
      <div className="relative z-10 max-w-7xl mx-auto">
        <Motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <p className="section-kicker">Experience & achievements</p>
          <h2 className="mt-3 text-4xl font-extrabold theme-heading sm:text-5xl">
            Internships <span className="text-cyan-400">& Hackathons</span>
          </h2>

          <p className="theme-muted mt-5 max-w-2xl mx-auto">
            Practical experience gained through internships, hackathons and
            real-world development projects.
          </p>
        </Motion.div>

        <div className="relative grid gap-6 lg:grid-cols-2">
          {workData.map((item, index) => (
            <Motion.article
              key={index}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              whileHover={{ y: -8 }}
              className="glass-card p-6 sm:p-8"
            >
              <div className="mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-cyan-400/10 text-cyan-400">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold theme-heading">{item.title}</h3>

              <p className="text-cyan-400 mt-2 font-semibold">{item.company}</p>

              <p className="theme-muted mt-5 leading-7">{item.description}</p>
            </Motion.article>
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[.92fr_1.08fr]">
          <Motion.article
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
            whileHover={{ y: -8 }}
            className="glass-card p-6 sm:p-8"
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="section-kicker">Hackathons</p>
                <h3 className="mt-2 text-2xl font-bold theme-heading">{hackathonData.title}</h3>
              </div>
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-amber-400/10 text-amber-300">
                <Trophy size={28} />
              </span>
            </div>

            <div className="space-y-4">
              <div>
                <p className="theme-muted text-sm">Competition</p>
                <p className="font-semibold theme-heading">{hackathonData.competition}</p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <span className="rounded-2xl border border-cyan-400/15 bg-cyan-400/10 px-4 py-3">
                  <span className="theme-muted block text-xs">Year</span>
                  <span className="font-semibold text-cyan-400">{hackathonData.year}</span>
                </span>
                <span className="rounded-2xl border border-emerald-400/15 bg-emerald-400/10 px-4 py-3">
                  <span className="theme-muted block text-xs">Technologies</span>
                  <span className="font-semibold text-emerald-300">{hackathonData.technologies}</span>
                </span>
              </div>
              <p className="theme-muted leading-7">{hackathonData.description}</p>
              <p className="theme-text rounded-2xl border border-amber-400/15 bg-amber-400/10 px-4 py-3 leading-7">
                {hackathonData.achievement}
              </p>
            </div>
          </Motion.article>

          <Motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="glass-card p-6 sm:p-8"
          >
            <div className="mb-7 flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-cyan-400/10 text-cyan-400">
                <Code2 size={25} />
              </span>
              <div>
                <p className="section-kicker">Development focus</p>
                <h3 className="text-2xl font-bold theme-heading">Hands-on Experience</h3>
              </div>
            </div>

            <div className="space-y-4">
              {experienceData.map((item, index) => (
                <Motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className="relative rounded-2xl border border-cyan-400/10 bg-cyan-400/[.04] p-4"
                >
                  <div className="mb-2 flex items-center gap-3">
                    <Medal size={18} className="text-cyan-400" />
                    <h4 className="font-bold theme-heading">{item.title}</h4>
                  </div>
                  <p className="theme-muted leading-7">{item.description}</p>
                </Motion.div>
              ))}
            </div>
          </Motion.div>
        </div>

      </div>
    </section>
  );
};

export default Work;
