import ProjectLayout, { MissingDetailPage } from "@/app/pages/ProjectLayout";
import { getOtherProjectBySlug } from "@/content/projects";

export default function PlaygroundsPage() {
  const project = getOtherProjectBySlug("playgrounds");
  if (!project) {
    return <MissingDetailPage label="playgrounds" />;
  }

  return <ProjectLayout projectSlug="playgrounds" cards={project.page.cards} />;
}
