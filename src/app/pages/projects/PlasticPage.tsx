import ProjectLayout, { MissingDetailPage } from "@/app/pages/ProjectLayout";
import { getOtherProjectBySlug } from "@/content/projects";

export default function PlasticPage() {
  const project = getOtherProjectBySlug("plastic");
  if (!project) {
    return <MissingDetailPage label="plastic" />;
  }

  return <ProjectLayout projectSlug="plastic" cards={project.page.cards} />;
}
