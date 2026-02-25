import ProjectLayout, { MissingDetailPage } from "@/app/pages/ProjectLayout";
import { getProjectBySlug } from "@/content/projects";

export default function BearBlogPage() {
  const project = getProjectBySlug("bear-blog");
  if (!project) {
    return <MissingDetailPage label="bear-blog" />;
  }

  return <ProjectLayout projectSlug="bear-blog" cards={project.page.cards} />;
}
