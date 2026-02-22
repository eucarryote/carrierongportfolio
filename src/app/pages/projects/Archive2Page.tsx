import ProjectDetailLayout, { MissingDetailPage } from "@/app/pages/ProjectDetailLayout";
import { getOtherProjectBySlug } from "@/content/projects";

export default function Archive2Page() {
  const project = getOtherProjectBySlug("archive-2");
  if (!project) {
    return <MissingDetailPage label="archive-2" />;
  }

  return <ProjectDetailLayout cards={project.page.cards} />;
}
