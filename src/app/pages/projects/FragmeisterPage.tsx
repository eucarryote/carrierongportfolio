import ProjectLayout, { MissingDetailPage } from "@/app/pages/ProjectLayout";
import { getProjectBySlug } from "@/content/projects";

export default function FragmeisterPage() {
  const project = getProjectBySlug("fragmeister");
  if (!project) {
    return <MissingDetailPage label="fragmeister" />;
  }

  return <ProjectLayout projectSlug="fragmeister" cards={project.page.cards} />;
}
