import ProjectDetailLayout, { MissingDetailPage } from "@/app/pages/ProjectDetailLayout";
import { getProjectBySlug } from "@/content/projects";

export default function FragmeisterPage() {
  const project = getProjectBySlug("fragmeister");
  if (!project) {
    return <MissingDetailPage label="fragmeister" />;
  }

  return <ProjectDetailLayout projectSlug="fragmeister" cards={project.page.cards} />;
}
