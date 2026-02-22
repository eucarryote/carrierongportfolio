import ProjectDetailLayout, { MissingDetailPage } from "@/app/pages/ProjectDetailLayout";
import { getOtherProjectBySlug } from "@/content/projects";

export default function Archive6Page() {
  const project = getOtherProjectBySlug("archive-6");
  if (!project) {
    return <MissingDetailPage label="archive-6" />;
  }

  return <ProjectDetailLayout cards={project.page.cards} />;
}
