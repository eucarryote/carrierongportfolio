import ProjectDetailLayout, { MissingDetailPage } from "@/app/pages/ProjectDetailLayout";
import { getOtherProjectBySlug } from "@/content/projects";

export default function CommunityPage() {
  const project = getOtherProjectBySlug("community");
  if (!project) {
    return <MissingDetailPage label="community" />;
  }

  return <ProjectDetailLayout cards={project.page.cards} />;
}
