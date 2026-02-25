import ProjectLayout, { MissingDetailPage } from "@/app/pages/ProjectLayout";
import { getProjectBySlug } from "@/content/projects";

export default function SubstackPage() {
  const project = getProjectBySlug("substack");
  if (!project) {
    return <MissingDetailPage label="substack" />;
  }

  return <ProjectLayout projectSlug="substack" cards={project.page.cards} />;
}
