import { describe, expect, it } from "vitest";
import { portfolio } from "./portfolio";

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
