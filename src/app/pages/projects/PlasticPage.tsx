import ProjectDetailLayout, { MissingDetailPage } from "@/app/pages/ProjectDetailLayout";
import { getOtherProjectBySlug } from "@/content/projects";

export default function PlasticPage() {
  const project = getOtherProjectBySlug("plastic");
  if (!project) {
    return <MissingDetailPage label="plastic" />;
  }

  return <ProjectDetailLayout projectSlug="plastic" cards={project.page.cards} />;
}
