import { Link } from "react-router";
import PageTemplate, { TemplateNavItem } from "@/app/components/PageTemplate";
import { getGridCollection } from "@/content/projects";

function buildNavItems(_collectionKey: string): TemplateNavItem[] {
  return [
    { label: "Projects", to: "/projects" },
    { label: "Other Projects", to: "/other-projects" },
    { label: "Contact", to: "/contact" },
  ];
}

function GridCollectionPage({
  collectionKey,
}: {
  collectionKey: string;
}) {
  const collection = getGridCollection(collectionKey);

  if (!collection) {
    return (
      <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
        <h1>Collection not found</h1>
        <p>
          Missing collection: <code>{collectionKey}</code>
        </p>
        <p>
          <Link to="/">Back to home</Link>
        </p>
      </div>
    );
  }

  return (
    <PageTemplate
      siteTitle="Carrie Rong"
      headerLeft="About"
      headerLeftTo="/about"
      headerRight="CV"
      navItems={buildNavItems(collectionKey)}
      cards={collection.cards}
      cardsColumnsDesktop={2}
    />
  );
}

export function ProjectsPage() {
  return <GridCollectionPage collectionKey="projects" />;
}

export function OtherProjectsPage() {
  return <GridCollectionPage collectionKey="otherProjects" />;
}

export function WritingPage() {
  return <GridCollectionPage collectionKey="writing" />;
}
