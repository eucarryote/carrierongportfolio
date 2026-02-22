import ProjectDetailLayout, { MissingDetailPage } from "@/app/pages/ProjectDetailLayout";
import { getOtherProjectBySlug } from "@/content/projects";

export default function Archive3Page() {
  const project = getOtherProjectBySlug("archive-3");
  if (!project) {
    return <MissingDetailPage label="archive-3" />;
  }

  return <ProjectDetailLayout projectSlug="archive-3" cards={project.page.cards} />;
}
