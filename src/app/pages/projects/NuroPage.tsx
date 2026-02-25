import ProjectLayout, { MissingDetailPage } from "@/app/pages/ProjectLayout";
import { getOtherProjectBySlug } from "@/content/projects";

export default function NuroPage() {
  const project = getOtherProjectBySlug("nuro");
  if (!project) {
    return <MissingDetailPage label="nuro" />;
  }

  return <ProjectLayout projectSlug="nuro" cards={project.page.cards} />;
}
