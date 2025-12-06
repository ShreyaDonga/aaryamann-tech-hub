import { Layout } from "@/components/Layout";
import { SkillBadges } from "@/components/SkillBadges";
import { aboutData } from "@/data/portfolio";
import { GraduationCap, Award, BookOpen, Users } from "lucide-react";

const About = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4 animate-slide-up">
            About Me
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl animate-slide-up delay-100">
            {aboutData.bio}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Technical Background */}
              <Card icon={<BookOpen />} title="Technical Background">
                <ul className="space-y-2">
                  {aboutData.technicalBackground.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>

              {/* Key Achievements */}
              <Card icon={<Award />} title="Key Technical Achievements">
                <ul className="space-y-2">
                  {aboutData.achievements.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>

              {/* Leadership */}
              <Card icon={<Users />} title="Technical Leadership">
                <ul className="space-y-2">
                  {aboutData.leadership.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Education */}
              <Card icon={<GraduationCap />} title="Education">
                <div className="space-y-2">
                  <p className="font-medium text-foreground">{aboutData.education.school}</p>
                  <p className="text-sm text-muted-foreground">{aboutData.education.graduation}</p>
                  <p className="text-sm text-muted-foreground mt-3">{aboutData.education.grades}</p>
                </div>
              </Card>

              {/* Courses */}
              <Card icon={<BookOpen />} title="Technical Courses">
                <ul className="space-y-2">
                  {aboutData.courses.map((course, index) => (
                    <li key={index} className="flex items-start gap-2 text-muted-foreground text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                      {course}
                    </li>
                  ))}
                </ul>
              </Card>

              {/* Skills */}
              <div className="p-6 rounded-xl bg-card border border-border">
                <h3 className="font-display font-semibold text-lg text-foreground mb-4">
                  Skills
                </h3>
                <SkillBadges />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

function Card({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="p-6 rounded-xl bg-card border border-border animate-slide-up">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
          {icon}
        </div>
        <h3 className="font-display font-semibold text-lg text-foreground">{title}</h3>
      </div>
      {children}
    </div>
  );
}

export default About;
