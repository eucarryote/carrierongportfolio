import ProjectDetailLayout, { MissingDetailPage } from "@/app/pages/ProjectDetailLayout";
import { getProjectBySlug } from "@/content/projects";

export default function BearBlogPage() {
  const project = getProjectBySlug("bear-blog");
  if (!project) {
    return <MissingDetailPage label="bear-blog" />;
  }

  return <ProjectDetailLayout projectSlug="bear-blog" cards={project.page.cards} />;
}
