import type { DatabaseItem } from "./types";

export const projects = {
  categories: [
    { collection: "otherProjects", slug: "writing", title: "Writing", description: "Bear Blog, Substack, Pinkroom, Fragmeister" },
    { collection: "otherProjects", slug: "community", title: "Community", description: "Picnic Club, Design Collective" },
    { collection: "otherProjects", slug: "art", title: "Art", description: "instagram.com/eucarryart", href: "https://instagram.com/eucarryart", linkLabel: "Open site" },
    { collection: "otherProjects", slug: "music", title: "Music", description: "rothkappchen.bandcamp.com", href: "https://rothkappchen.bandcamp.com", linkLabel: "Open site" },
  ] as DatabaseItem[],
  subcategories: {
    writing: [
      { collection: "otherProjects", subcategory: "writing", slug: "bear-blog", title: "Bear Blog", description: "carrie.bearblog.dev", href: "https://carrie.bearblog.dev", linkLabel: "Open site" },
      { collection: "otherProjects", subcategory: "writing", slug: "substack", title: "Substack", description: "lookingthroughtime.substack.com", href: "https://lookingthroughtime.substack.com", linkLabel: "Open site" },
      { collection: "otherProjects", subcategory: "writing", slug: "pinkroom-117", title: "From the Pinkroom", description: "IDE Newsletter", linkLabel: "Open project page" },
      { collection: "otherProjects", subcategory: "writing", slug: "fragmeister", title: "Fragmeister", description: "Design writing journal", imageHref: "https://fragmeister.com/who-are-we-before-design", linkLabel: "Open project page" },
    ] as DatabaseItem[],
    community: [
      { collection: "otherProjects", subcategory: "community", slug: "picnic-club", title: "Picnic Club", description: "Community gathering format" },
      { collection: "otherProjects", subcategory: "community", slug: "design-collective", title: "Design Collective", description: "Collaborative design initiatives" },
    ] as DatabaseItem[],
    art: [] as DatabaseItem[],
    music: [] as DatabaseItem[],
  },
};
