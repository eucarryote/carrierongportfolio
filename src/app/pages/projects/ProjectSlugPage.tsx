import { useParams } from "react-router";
import ProjectDetailLayout, { MissingDetailPage } from "@/app/pages/ProjectDetailLayout";
import { getProjectPageBySlug } from "@/content/projects";

export default function ProjectSlugPage() {
  const { slug } = useParams();
  if (!slug) {
    return <MissingDetailPage label="missing-project-slug" />;
  }

  const project = getProjectPageBySlug(slug);
  if (!project) {
    return <MissingDetailPage label={slug} />;
  }

  return <ProjectDetailLayout projectSlug={slug} cards={project.page.cards} />;
}
