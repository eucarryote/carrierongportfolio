import ProjectTemplate from "@/app/components/ProjectTemplate";
import { getGridCollection } from "@/content/projects";

const homeCards = getGridCollection("projects")?.cards ?? [];

export default function App() {
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
      cards={homeCards}
    />
  );
}
