export type TemplateCard = {
  id: string;
  title: string;
  body: string;
  imageSrc?: string;
  images?: Array<{ src: string; alt?: string }>;
  previewColor?: string;
  imageAlt?: string;
  linkLabel?: string;
  href?: string;
  imageHref?: string;
  to?: string;
};

export type GridCollection = {
  key: string;
  label: string;
  cards: TemplateCard[];
};

export type OtherProjectPage = {
  slug: string;
  title: string;
  page: ProjectPageContent;
};

export type ProjectPageContent = {
  headerLeft: string;
  headerRight: string;
  cards: TemplateCard[];
};

export type OtherProjectDatabaseEntry = {
  slug: string;
  title: string;
  homeBody: string;
  projectUrl?: string;
  page: ProjectPageContent;
};

// Backward-compatible alias for existing imports.
export type Project = OtherProjectDatabaseEntry;

export type CollectionKey = "projects" | "otherProjects" | "writing";

export type DatabaseCollection = "projects" | "otherProjects";

export type OtherProjectsSubcategory = "writing" | "community" | "art" | "music";

export type DatabaseItem = {
  slug: string;
  collection: DatabaseCollection;
  subcategory?: OtherProjectsSubcategory;
  title: string;
  description: string;
  href?: string;
  imageHref?: string;
  imageSrc?: string;
  previewColor?: string;
  imageAlt?: string;
  linkLabel?: string;
};
