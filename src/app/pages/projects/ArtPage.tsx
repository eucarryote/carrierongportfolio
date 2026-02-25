import ProjectLayout, { MissingDetailPage } from "@/app/pages/ProjectLayout";
import { getOtherProjectBySlug } from "@/content/projects";

export default function ArtPage() {
  const project = getOtherProjectBySlug("art");
  if (!project) {
    return <MissingDetailPage label="art" />;
  }

  return <ProjectLayout projectSlug="art" cards={project.page.cards} />;
}
