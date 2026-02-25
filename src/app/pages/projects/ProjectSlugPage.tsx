import { useParams } from "react-router";
import ProjectLayout, { MissingDetailPage } from "@/app/pages/ProjectLayout";
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

  return <ProjectLayout projectSlug={slug} cards={project.page.cards} />;
}
