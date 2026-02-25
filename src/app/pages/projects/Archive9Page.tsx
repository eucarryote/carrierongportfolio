import ProjectLayout, { MissingDetailPage } from "@/app/pages/ProjectLayout";
import { getOtherProjectBySlug } from "@/content/projects";

export default function Archive9Page() {
  const project = getOtherProjectBySlug("archive-9");
  if (!project) {
    return <MissingDetailPage label="archive-9" />;
  }

  return <ProjectLayout projectSlug="archive-9" cards={project.page.cards} />;
}
