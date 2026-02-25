import ProjectLayout, { MissingDetailPage } from "@/app/pages/ProjectLayout";
import { getOtherProjectBySlug } from "@/content/projects";

export default function EnlevePage() {
  const project = getOtherProjectBySlug("enlève");
  if (!project) {
    return <MissingDetailPage label="enlève" />;
  }

  return <ProjectLayout projectSlug="enlève" cards={project.page.cards} />;
}
