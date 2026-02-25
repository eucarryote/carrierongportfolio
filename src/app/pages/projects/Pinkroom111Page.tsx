import ProjectLayout, { MissingDetailPage } from "@/app/pages/ProjectLayout";
import { getProjectBySlug } from "@/content/projects";

export default function Pinkroom111Page() {
  const project = getProjectBySlug("pinkroom-111");
  if (!project) {
    return <MissingDetailPage label="pinkroom-111" />;
  }

  return <ProjectLayout projectSlug="pinkroom-111" cards={project.page.cards} />;
}
