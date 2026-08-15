import { Link } from "react-router";
import PageTemplate from "@/app/components/PageTemplate";
import { getGridCollection } from "@/content/projects";
import { routes } from "@/content/site";

function GridCollectionPage({
  collectionKey,
}: {
  collectionKey: string;
}) {
  const collection = getGridCollection(collectionKey);

  if (!collection) {
    return (
      <div className="missing-page">
        <h1>Collection not found</h1>
        <p>
          Missing collection: <code>{collectionKey}</code>
        </p>
        <p>
          <Link to={routes.home}>Back to home</Link>
        </p>
      </div>
    );
  }

  return <PageTemplate cards={collection.cards} cardsColumnsDesktop={2} />;
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
