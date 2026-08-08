import Image from "next/image";
import { ArrowUpRight, GithubIcon, MailIcon } from "@/components/icons";
import { CopyEmail } from "@/components/copy-email";
import { SiteHeader } from "@/components/site-header";
import { InteractivePortrait } from "@/components/interactive-portrait";
import { portfolio } from "@/data/portfolio";
import { siteUrl } from "@/lib/site-url";

export default function Home() {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: portfolio.name,
    jobTitle: portfolio.role,
    email: `mailto:${portfolio.email}`,
    url: siteUrl,
    sameAs: portfolio.socials.map((social) => social.href),
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main-content">
        <section className="hero shell" id="top">
          <div className="hero-copy">
            <p className="eyebrow">
              <span />
              Hello, I’m June Rhomel
            </p>
            <h1>
              Building digital work with <em>clarity</em> and character.
            </h1>
            <p className="hero-lede">{portfolio.introduction}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                Explore selected work <ArrowUpRight />
              </a>
              <a
                className="button button-secondary"
                href={`mailto:${portfolio.email}`}
              >
                Let’s talk
              </a>
            </div>
          </div>
          <div className="portrait-wrap" aria-label="Portrait of June Rhomel">
            <div className="portrait-orbit">
              <span>Developer</span>
              <span>Designer</span>
            </div>
            <InteractivePortrait />
            <p className="availability">
              <span /> Available for opportunities
            </p>
          </div>
          <a className="scroll-cue" href="#about">
            <span>Scroll to discover</span>
            <i />
          </a>
        </section>

        <section className="section shell about-grid" id="about">
          <div className="section-heading">
            <p className="section-number">01 / About</p>
            <h2>Ideas become useful when the details are cared for.</h2>
          </div>
          <div className="about-copy">
            {portfolio.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <a
              className="inline-link"
              href="/documents/june-rhomel-resume.pdf"
              download
            >
              Download my résumé <ArrowUpRight />
            </a>
          </div>
        </section>

        <section className="section expertise" id="expertise">
          <div className="shell">
            <div className="section-topline">
              <p className="section-number">02 / Expertise</p>
              <p>From first screen to final query</p>
            </div>
            <div className="skills-grid">
              {portfolio.skills.map((skill) => (
                <article className="skill-card" key={skill.title}>
                  <span>{skill.label}</span>
                  <h3>{skill.title}</h3>
                  <p>{skill.description}</p>
                </article>
              ))}
            </div>
            <div className="toolkit">
              <p>Tools and technologies</p>
              <ul>
                {portfolio.technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section shell experience" id="experience">
          <div className="experience-heading">
            <p className="section-number">03 / Experience</p>
            <h2>
              Building reliable products with people who care about the outcome.
            </h2>
          </div>
          <div className="experience-list">
            {portfolio.experience.map((experience) => (
              <article
                className="experience-item"
                key={`${experience.company}-${experience.role}`}
              >
                <div className="experience-meta">
                  <p>{experience.period}</p>
                  <p>{experience.location}</p>
                </div>
                <div className="experience-content">
                  <p className="company">{experience.company}</p>
                  <h3>{experience.role}</h3>
                  <p>{experience.description}</p>
                  <ul>
                    {experience.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section shell" id="work">
          <div className="work-heading">
            <div>
              <p className="section-number">04 / Selected work</p>
              <h2>Projects shaped around real user journeys.</h2>
            </div>
            <p>
              A selection of interface, commerce, and full-stack work built to
              make complex tasks feel straightforward.
            </p>
          </div>
          <div className="projects">
            {portfolio.projects.map((project, index) => (
              <article className="project" key={project.title}>
                <a
                  className={`project-image project-image--${project.imageLayout}`}
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${project.title} live`}
                >
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 800px) 92vw, 58vw"
                  />
                  <span>
                    View live <ArrowUpRight />
                  </span>
                </a>
                <div className="project-details">
                  <p className="project-index">
                    0{index + 1} · {project.accent}
                  </p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <ul>
                    {project.technologies.map((technology) => (
                      <li key={technology}>{technology}</li>
                    ))}
                  </ul>
                  <div className="project-links">
                    {project.repository && (
                      <a
                        href={project.repository}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <GithubIcon /> Source code
                      </a>
                    )}
                    <a href={project.liveUrl} target="_blank" rel="noreferrer">
                      Live project <ArrowUpRight />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section contact" id="contact">
          <div className="shell contact-inner">
            <p className="section-number">05 / Contact</p>
            <h2>
              Have a project in mind?
              <br />
              <em>Let’s make it happen.</em>
            </h2>
            <p>
              I’m open to frontend, backend, and full-stack opportunities. Tell
              me what you’re building and where I can help.
            </p>
            <a className="email-link" href={`mailto:${portfolio.email}`}>
              <MailIcon />
              {portfolio.email}
              <ArrowUpRight />
            </a>
            <CopyEmail email={portfolio.email} />
          </div>
        </section>
      </main>
      <footer className="footer shell">
        <p>
          Designed &amp; built by <span>{portfolio.name}</span>
        </p>
        <nav aria-label="Social links">
          {portfolio.socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
            >
              {social.label}
            </a>
          ))}
        </nav>
        <p>Next.js · TypeScript</p>
      </footer>
    </>
  );
}
