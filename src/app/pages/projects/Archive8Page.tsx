import ProjectDetailLayout, { MissingDetailPage } from "@/app/pages/ProjectDetailLayout";
import { getOtherProjectBySlug } from "@/content/projects";

export default function Archive8Page() {
  const project = getOtherProjectBySlug("archive-8");
  if (!project) {
    return <MissingDetailPage label="archive-8" />;
  }

  return <ProjectDetailLayout projectSlug="archive-8" cards={project.page.cards} />;
}
