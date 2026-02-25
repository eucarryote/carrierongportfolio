import ProjectLayout, { MissingDetailPage } from "@/app/pages/ProjectLayout";
import { getOtherProjectBySlug } from "@/content/projects";

export default function FromNowToNowPage() {
  const project = getOtherProjectBySlug("from-now-to-now");
  if (!project) {
    return <MissingDetailPage label="from-now-to-now" />;
  }

  return <ProjectLayout projectSlug="from-now-to-now" cards={project.page.cards} />;
}
