import ProjectDetailLayout, { MissingDetailPage } from "@/app/pages/ProjectDetailLayout";
import { getProjectBySlug } from "@/content/projects";

export default function SubstackPage() {
  const project = getProjectBySlug("substack");
  if (!project) {
    return <MissingDetailPage label="substack" />;
  }

  return <ProjectDetailLayout cards={project.page.cards} />;
}
