import ProjectLayout, { MissingDetailPage } from "@/app/pages/ProjectLayout";
import { getOtherProjectBySlug } from "@/content/projects";

export default function TheBrainColouringBookPage() {
  const project = getOtherProjectBySlug("thebraincolouringbook");
  if (!project) {
    return <MissingDetailPage label="thebraincolouringbook" />;
  }

  return <ProjectLayout projectSlug="thebraincolouringbook" cards={project.page.cards} />;
}
