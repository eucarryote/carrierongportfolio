import { projects } from "./other-projects-database";
import { projectsDatabase } from "./projects-database";
import type { CollectionKey, DatabaseItem, GridCollection } from "./types";

// Batch-edit preview colors here by slug.
export const previewColorsBySlug: Record<string, string> = {
  writing: "#ded2b7ff",
  community: "#F2B91C",
  music: "#9dbddeff",
  art: "#D61C1B",
  "bear-blog": "#2C2111",
  "substack": "#ff6719",
  "pinkroom-117": "#eecdd6ff",
  fragmeister: "#c0efc5ff",
  "pinkroom-111": "#e4decf",
  "picnic-club": "#F2B91C",
  "design-collective": "#F2B91C",
};

export const databaseItems: DatabaseItem[] = [
  ...projects.categories,
  ...projects.subcategories.writing,
  ...projects.subcategories.community,
  ...projects.subcategories.art,
  ...projects.subcategories.music,
  ...projectsDatabase,
];

function collectionPath(collection: CollectionKey): string {
  if (collection === "projects") return "projects";
  if (collection === "writing") return "other-projects/writing";
  return "other-projects";
}

function buildCards(items: DatabaseItem[], collection: CollectionKey): GridCollection {
  return {
    key: collection,
    label: collection === "projects" ? "Projects" : collection === "otherProjects" ? "Other Projects" : "Writing",
    cards: items.map((item) => ({
      id: item.slug,
      title: item.title,
      body: item.description,
      to: item.href ? undefined : `/${collectionPath(collection)}/${item.slug}`,
      href: item.href,
      imageHref: item.imageHref,
      imageSrc: item.imageSrc,
      previewColor: item.previewColor ?? previewColorsBySlug[item.slug],
      imageAlt: item.imageAlt,
      linkLabel: item.linkLabel,
    })),
  };
}

const projectCards = projectsDatabase;
const otherProjectCategoryCards = projects.categories;
const writingCards = projects.subcategories.writing;

export const gridCollections: Record<CollectionKey, GridCollection> = {
  projects: buildCards(projectCards, "projects"),
  otherProjects: buildCards(otherProjectCategoryCards, "otherProjects"),
  writing: buildCards(writingCards, "writing"),
};

export function getGridCollection(key: string): GridCollection | undefined {
  return gridCollections[key as CollectionKey];
}

export function getProjectHeroBySlug(slug: string): { imageSrc: string; imageAlt?: string } | undefined {
  const item = projectsDatabase.find((entry) => entry.slug === slug && entry.imageSrc);
  if (!item?.imageSrc) return undefined;
  return { imageSrc: item.imageSrc, imageAlt: item.imageAlt };
}

export { projects, projectsDatabase };
