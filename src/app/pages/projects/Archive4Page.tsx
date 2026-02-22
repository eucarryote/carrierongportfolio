import ProjectDetailLayout, { MissingDetailPage } from "@/app/pages/ProjectDetailLayout";
import { getOtherProjectBySlug } from "@/content/projects";

export default function Archive4Page() {
  const project = getOtherProjectBySlug("archive-4");
  if (!project) {
    return <MissingDetailPage label="archive-4" />;
  }

  return <ProjectDetailLayout projectSlug="archive-4" cards={project.page.cards} />;
}
