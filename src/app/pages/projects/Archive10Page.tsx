import ProjectLayout, { MissingDetailPage } from "@/app/pages/ProjectLayout";
import { getOtherProjectBySlug } from "@/content/projects";

export default function Archive10Page() {
  const project = getOtherProjectBySlug("archive-10");
  if (!project) {
    return <MissingDetailPage label="archive-10" />;
  }

  return <ProjectLayout projectSlug="archive-10" cards={project.page.cards} />;
}
