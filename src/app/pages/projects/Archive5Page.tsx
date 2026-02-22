import ProjectDetailLayout, { MissingDetailPage } from "@/app/pages/ProjectDetailLayout";
import { getOtherProjectBySlug } from "@/content/projects";

export default function Archive5Page() {
  const project = getOtherProjectBySlug("archive-5");
  if (!project) {
    return <MissingDetailPage label="archive-5" />;
  }

  return <ProjectDetailLayout projectSlug="archive-5" cards={project.page.cards} />;
}
