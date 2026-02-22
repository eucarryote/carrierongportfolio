import ProjectDetailLayout, { MissingDetailPage } from "@/app/pages/ProjectDetailLayout";
import { getOtherProjectBySlug } from "@/content/projects";

export default function Archive7Page() {
  const project = getOtherProjectBySlug("archive-7");
  if (!project) {
    return <MissingDetailPage label="archive-7" />;
  }

  return <ProjectDetailLayout cards={project.page.cards} />;
}
