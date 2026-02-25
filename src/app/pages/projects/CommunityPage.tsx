import ProjectLayout, { MissingDetailPage } from "@/app/pages/ProjectLayout";
import { getOtherProjectBySlug } from "@/content/projects";

export default function CommunityPage() {
  const project = getOtherProjectBySlug("community");
  if (!project) {
    return <MissingDetailPage label="community" />;
  }

  return <ProjectLayout projectSlug="community" cards={project.page.cards} />;
}
