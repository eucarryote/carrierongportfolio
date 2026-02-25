import ProjectLayout, { MissingDetailPage } from "@/app/pages/ProjectLayout";
import { getOtherProjectBySlug } from "@/content/projects";

export default function CariadPage() {
  const project = getOtherProjectBySlug("cariad");
  if (!project) {
    return <MissingDetailPage label="cariad" />;
  }

  return <ProjectLayout projectSlug="cariad" cards={project.page.cards} />;
}
