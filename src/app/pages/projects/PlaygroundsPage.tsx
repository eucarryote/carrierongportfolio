import ProjectDetailLayout, { MissingDetailPage } from "@/app/pages/ProjectDetailLayout";
import { getOtherProjectBySlug } from "@/content/projects";

export default function PlaygroundsPage() {
  const project = getOtherProjectBySlug("playgrounds");
  if (!project) {
    return <MissingDetailPage label="playgrounds" />;
  }

  return <ProjectDetailLayout cards={project.page.cards} />;
}
