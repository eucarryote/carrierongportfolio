import ProjectDetailLayout, { MissingDetailPage } from "@/app/pages/ProjectDetailLayout";
import { getOtherProjectBySlug } from "@/content/projects";

export default function MusicPage() {
  const project = getOtherProjectBySlug("music");
  if (!project) {
    return <MissingDetailPage label="music" />;
  }

  return <ProjectDetailLayout projectSlug="music" cards={project.page.cards} />;
}
