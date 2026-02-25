import ProjectLayout, { MissingDetailPage } from "@/app/pages/ProjectLayout";
import { getOtherProjectBySlug } from "@/content/projects";

export default function HuaweiMagicPage() {
  const project = getOtherProjectBySlug("huaweimagic");
  if (!project) {
    return <MissingDetailPage label="huaweimagic" />;
  }

  return <ProjectLayout projectSlug="huaweimagic" cards={project.page.cards} />;
}
