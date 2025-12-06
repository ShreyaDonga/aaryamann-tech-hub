import { skills } from "@/data/portfolio";

export function SkillBadges() {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {skills.map((skill, index) => (
        <span
          key={skill}
          className="skill-badge animate-fade-in"
          style={{ animationDelay: `${index * 50}ms` }}
        >
          {skill}
        </span>
      ))}
    </div>
  );
}
