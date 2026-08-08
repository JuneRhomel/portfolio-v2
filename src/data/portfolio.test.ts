import { describe, expect, it } from "vitest";
import { getProjectBySlug, portfolio } from "./portfolio";

describe("portfolio content", () => {
  it("contains complete featured projects", () => {
    expect(portfolio.projects).toHaveLength(2);
    for (const project of portfolio.projects) {
      expect(project.title).toBeTruthy();
      expect(project.description.length).toBeGreaterThan(40);
      if (project.repository) expect(project.repository).toMatch(/^https:\/\/github\.com\//);
      expect(project.liveUrl).toMatch(/^https:\/\//);
      expect(project.technologies.length).toBeGreaterThan(0);
    }
    expect(portfolio.projects.map((project) => project.title)).toEqual(["AmbagMo!", "Recivo"]);
    expect(portfolio.projects.find((project) => project.title === "Recivo")?.technologies).toContain("Docker");
    for (const project of portfolio.projects) {
      expect(project.slug).toMatch(/^[a-z0-9-]+$/);
      expect(project.architecture.length).toBeGreaterThanOrEqual(5);
      expect(project.decisions.length).toBeGreaterThanOrEqual(4);
      expect(project.features.length).toBeGreaterThanOrEqual(5);
    }
  });

  it("looks projects up by their public route slug", () => {
    expect(getProjectBySlug("ambagmo")?.title).toBe("AmbagMo!");
    expect(getProjectBySlug("recivo")?.title).toBe("Recivo");
    expect(getProjectBySlug("missing-project")).toBeUndefined();
  });

  it("uses only public contact and social links", () => {
    expect(portfolio.email).toMatch(/@/);
    expect(portfolio.socials.every((social) => social.href.startsWith("https://"))).toBe(true);
  });

  it("contains the current professional experience", () => {
    expect(portfolio.experience).toHaveLength(1);
    expect(portfolio.experience[0]).toMatchObject({
      company: "Inventi Philippines",
      role: "Full Stack Developer",
      period: "March 2023 — Present",
    });
    expect(portfolio.experience[0].highlights.length).toBeGreaterThanOrEqual(3);
  });

  it("includes the current tools and technologies", () => {
    expect(portfolio.technologies).toContain("AI Engineering");
    expect(portfolio.technologies).toContain("React Native");
    expect(portfolio.technologies).toContain("Redis");
  });
});
