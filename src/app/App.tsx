import PageTemplate from "@/app/components/PageTemplate";
import { getGridCollection } from "@/content/projects";

const homeCards = getGridCollection("projects")?.cards ?? [];

export default function App() {
  return (
    <PageTemplate
      siteTitle="Carrie Rong"
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
