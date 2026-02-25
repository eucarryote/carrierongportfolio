import ProjectLayout, { MissingDetailPage } from "@/app/pages/ProjectLayout";
import { getOtherProjectBySlug } from "@/content/projects";

export default function MusicPage() {
  const project = getOtherProjectBySlug("music");
  if (!project) {
    return <MissingDetailPage label="music" />;
  }

  return <ProjectLayout projectSlug="music" cards={project.page.cards} />;
}
