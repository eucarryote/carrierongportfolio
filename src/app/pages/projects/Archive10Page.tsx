import ProjectDetailLayout, { MissingDetailPage } from "@/app/pages/ProjectDetailLayout";
import { getOtherProjectBySlug } from "@/content/projects";

export default function Archive10Page() {
  const project = getOtherProjectBySlug("archive-10");
  if (!project) {
    return <MissingDetailPage label="archive-10" />;
  }

  return <ProjectDetailLayout projectSlug="archive-10" cards={project.page.cards} />;
}
