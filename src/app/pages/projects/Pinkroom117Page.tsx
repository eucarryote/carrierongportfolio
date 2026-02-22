import ProjectDetailLayout, { MissingDetailPage } from "@/app/pages/ProjectDetailLayout";
import { getProjectBySlug } from "@/content/projects";

export default function Pinkroom117Page() {
  const project = getProjectBySlug("pinkroom-117");
  if (!project) {
    return <MissingDetailPage label="pinkroom-117" />;
  }

  return <ProjectDetailLayout cards={project.page.cards} />;
}
