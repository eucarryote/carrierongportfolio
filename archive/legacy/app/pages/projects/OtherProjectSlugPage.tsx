import { useParams } from "react-router";
import ProjectLayout, { MissingDetailPage } from "@/app/pages/ProjectLayout";
import { getProjectPageBySlug } from "@/content/projects";

export default function OtherProjectSlugPage() {
  const { slug } = useParams();
  if (!slug) {
    return <MissingDetailPage label="missing-other-project-slug" />;
  }

  const project = getProjectPageBySlug(slug);
  if (project?.page) {
    return <ProjectLayout projectSlug={slug} cards={project.page.cards} />;
  }

  return <MissingDetailPage label={slug} />;
}
