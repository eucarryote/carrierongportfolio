import ProjectLayout, { MissingDetailPage } from "@/app/pages/ProjectLayout";
import { getOtherProjectBySlug } from "@/content/projects";

export default function OnsemblePage() {
  const project = getOtherProjectBySlug("onsemble");
  if (!project) {
    return <MissingDetailPage label="onsemble" />;
  }

  return <ProjectLayout projectSlug="onsemble" cards={project.page.cards} />;
}
