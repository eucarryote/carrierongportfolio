import ProjectDetailLayout, { MissingDetailPage } from "@/app/pages/ProjectDetailLayout";
import { getOtherProjectBySlug } from "@/content/projects";

export default function Archive1Page() {
  const project = getOtherProjectBySlug("archive-1");
  if (!project) {
    return <MissingDetailPage label="archive-1" />;
  }

  return <ProjectDetailLayout cards={project.page.cards} />;
}
