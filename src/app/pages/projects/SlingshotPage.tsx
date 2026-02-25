import ProjectLayout, { MissingDetailPage } from "@/app/pages/ProjectLayout";
import { getOtherProjectBySlug } from "@/content/projects";

export default function SlingshotPage() {
  const project = getOtherProjectBySlug("slingshot");
  if (!project) {
    return <MissingDetailPage label="slingshot" />;
  }

  return <ProjectLayout projectSlug="slingshot" cards={project.page.cards} />;
}
