import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, GithubIcon } from "@/components/icons";
import { getProjectBySlug, portfolio } from "@/data/portfolio";
import { siteUrl } from "@/lib/site-url";

type ProjectPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return portfolio.projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: `${project.title} Case Study — June Rhomel Mandigma`,
    description: project.description,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: `${project.title} Engineering Case Study`,
      description: project.overview,
      url: `/projects/${project.slug}`,
      type: "article",
      images: [{ url: project.image, alt: project.imageAlt }],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const projectJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.title,
    description: project.description,
    applicationCategory: "WebApplication",
    url: project.liveUrl,
    author: { "@type": "Person", name: portfolio.name, url: siteUrl },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }} />
      <header className="case-header">
        <div className="shell case-nav">
          <Link href="/#work">← Back to selected work</Link>
          <a href={project.liveUrl} target="_blank" rel="noreferrer">View live <ArrowUpRight /></a>
        </div>
      </header>
      <main className="case-study">
        <section className="case-hero shell">
          <div className="case-kicker"><span>{project.accent}</span><span>{project.role}</span></div>
          <h1>{project.title}</h1>
          <p>{project.overview}</p>
          <ul className="case-stack">{project.technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul>
          <div className={`case-cover case-cover--${project.imageLayout}`}>
            <Image src={project.image} alt={project.imageAlt} fill priority sizes="(max-width: 900px) 94vw, 1200px" />
          </div>
        </section>

        <section className="case-section shell case-two-column">
          <p className="case-label">01 / Context</p>
          <div className="case-context-grid">
            <article><h2>The problem</h2><p>{project.problem}</p></article>
            <article><h2>The solution</h2><p>{project.solution}</p></article>
          </div>
        </section>

        <section className="case-section case-panel">
          <div className="shell case-two-column">
            <p className="case-label">02 / Product</p>
            <div><h2>What the experience supports</h2><ul className="case-feature-grid">{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul></div>
          </div>
        </section>

        <section className="case-section shell case-two-column">
          <p className="case-label">03 / Architecture</p>
          <div>
            <h2>A clear path from interface to infrastructure.</h2>
            <div className="architecture-flow">{project.architecture.map((layer, index) => <article key={layer.title}><span>{layer.label}</span><div><h3>{layer.title}</h3><p>{layer.description}</p></div>{index < project.architecture.length - 1 && <i aria-hidden="true">↓</i>}</article>)}</div>
          </div>
        </section>

        <section className="case-section case-panel">
          <div className="shell case-two-column">
            <p className="case-label">04 / Decisions</p>
            <div><h2>Engineering choices and why they fit.</h2><div className="decision-grid">{project.decisions.map((decision) => <article key={decision.title}><h3>{decision.title}</h3><p>{decision.rationale}</p></article>)}</div></div>
          </div>
        </section>

        <section className="case-section shell case-two-column">
          <p className="case-label">05 / Reflection</p>
          <div className="reflection-grid">
            <article><h2>Challenges addressed</h2><ul>{project.challenges.map((challenge) => <li key={challenge}>{challenge}</li>)}</ul></article>
            <article><h2>Lessons carried forward</h2><ul>{project.lessons.map((lesson) => <li key={lesson}>{lesson}</li>)}</ul></article>
          </div>
        </section>

        <section className="case-cta">
          <div className="shell"><p>Explore the working product</p><h2>{project.title}</h2><div>
            <a className="button case-live-button" href={project.liveUrl} target="_blank" rel="noreferrer">View live project <ArrowUpRight /></a>
            {project.repository && <a className="button case-source-button" href={project.repository} target="_blank" rel="noreferrer"><GithubIcon /> Source code</a>}
          </div></div>
        </section>
      </main>
    </>
  );
}
