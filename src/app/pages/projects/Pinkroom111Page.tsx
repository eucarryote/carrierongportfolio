import ProjectDetailLayout, { MissingDetailPage } from "@/app/pages/ProjectDetailLayout";
import { getProjectBySlug } from "@/content/projects";

export default function Pinkroom111Page() {
  const project = getProjectBySlug("pinkroom-111");
  if (!project) {
    return <MissingDetailPage label="pinkroom-111" />;
  }

  return <ProjectDetailLayout cards={project.page.cards} />;
}
