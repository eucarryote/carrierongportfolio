import { Link } from "react-router";
import ProjectTemplate from "@/app/components/ProjectTemplate";
import { aboutBodyText } from "@/content/about";

export default function AboutPage() {
  const paragraphs = aboutBodyText.split("\n\n").filter(Boolean);

  return (
    <ProjectTemplate
      siteTitle="Carrie Rong Portfolio"
      headerLeft="About"
      headerLeftTo="/about"
      headerRight="CV"
      navItems={[
        { label: "Projects", to: "/projects" },
        { label: "Other Projects", to: "/other-projects" },
        { label: "Contact", to: "/contact" },
      ]}
      cards={[]}
      bottomRightContent={
        <div className="bottom-right-text">
          {paragraphs.map((paragraph, index) => (
            <p key={`about-paragraph-${index}`} style={{ marginBottom: "1rem" }}>
              {paragraph}
            </p>
          ))}
          <p>
            <Link to="/">Back</Link>
          </p>
        </div>
      }
    />
  );
}
