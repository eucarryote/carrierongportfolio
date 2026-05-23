import PageTemplate from "@/app/components/PageTemplate";
import { getGridCollection } from "@/content/projects";

const homeCards = getGridCollection("projects")?.cards ?? [];

export default function App() {
  return (
    <PageTemplate
      cards={homeCards}
    />
  );
}
