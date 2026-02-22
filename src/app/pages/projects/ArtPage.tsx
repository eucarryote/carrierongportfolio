import ProjectDetailLayout, { MissingDetailPage } from "@/app/pages/ProjectDetailLayout";
import { getOtherProjectBySlug } from "@/content/projects";

export default function ArtPage() {
  const project = getOtherProjectBySlug("art");
  if (!project) {
    return <MissingDetailPage label="art" />;
  }

  return <ProjectDetailLayout cards={project.page.cards} />;
}
