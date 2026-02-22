export type TemplateCard = {
  id: string;
  title: string;
  body: string;
  imageSrc?: string;
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

export type Project = {
  slug: string;
  title: string;
  homeBody: string;
  projectUrl?: string;
  page: ProjectPageContent;
};

export const projects: Project[] = [
  {
    slug: "bear-blog",
    title: "Bear Blog",
    homeBody: "carrie.bearblog.dev",
    projectUrl: "https://carrie.bearblog.dev",
    page: {
      headerLeft: "Bear Blog",
      headerRight: "Project",
      cards: [
        {
          id: "overview",
          title: "Overview",
          body: "A writing space for essays, observations, and notes in progress.",
        },
        {
          id: "focus",
          title: "Focus",
          body: "Simple publishing flow and clear typography without visual noise.",
        },
        {
          id: "process",
          title: "Process",
          body: "Iterate on writing rhythm first, then improve structure and archives.",
        },
        {
          id: "visit",
          title: "Visit",
          body: "Read the latest posts on Bear Blog.",
          linkLabel: "Open site",
          href: "https://carrie.bearblog.dev",
        },
      ],
    },
  },
  {
    slug: "substack",
    title: "Substack",
    homeBody: "lookingthroughtime.substack.com",
    projectUrl: "https://lookingthroughtime.substack.com",
    page: {
      headerLeft: "Substack",
      headerRight: "Project",
      cards: [
        {
          id: "overview",
          title: "Overview",
          body: "Newsletter essays and serialized notes sent directly to subscribers.",
        },
        {
          id: "audience",
          title: "Audience",
          body: "Build a recurring reader relationship through consistent publication.",
        },
        {
          id: "workflow",
          title: "Workflow",
          body: "Draft, revise, schedule, and measure reader responses over time.",
        },
        {
          id: "visit",
          title: "Visit",
          body: "Browse issues on Substack.",
          linkLabel: "Open site",
          href: "https://lookingthroughtime.substack.com",
        },
      ],
    },
  },
  {
    slug: "pinkroom-117",
    title: "Pinkroom 117",
    homeBody: "mailchi.mp/2f14c22734c9/from-the-pink-room-13878026",
    projectUrl: "https://mailchi.mp/2f14c22734c9/from-the-pink-room-13878026",
    page: {
      headerLeft: "Pinkroom 117",
      headerRight: "Project",
      cards: [
        {
          id: "overview",
          title: "Overview",
          body: "Issue-based publication with visual motifs and archival references.",
        },
        {
          id: "theme",
          title: "Theme",
          body: "A focused issue with time, memory, and place as recurring threads.",
        },
        {
          id: "format",
          title: "Format",
          body: "Layered text and references arranged for quick and deep reading.",
        },
        {
          id: "visit",
          title: "Visit",
          body: "Read the full issue.",
          linkLabel: "Open issue",
          href: "https://mailchi.mp/2f14c22734c9/from-the-pink-room-13878026",
        },
      ],
    },
  },
  {
    slug: "pinkroom-111",
    title: "Pinkroom 111",
    homeBody: "mailchi.mp/2f14c22734c9/from-the-pink-room-13878026",
    projectUrl: "https://mailchi.mp/2f14c22734c9/from-the-pink-room-13878026",
    page: {
      headerLeft: "Pinkroom 111",
      headerRight: "Project",
      cards: [
        {
          id: "overview",
          title: "Overview",
          body: "Early issue documenting experiments in voice and publication rhythm.",
        },
        {
          id: "intent",
          title: "Intent",
          body: "Capture observations quickly while preserving a strong editorial tone.",
        },
        {
          id: "notes",
          title: "Notes",
          body: "The issue structure informed later formats used in Pinkroom 117.",
        },
        {
          id: "visit",
          title: "Visit",
          body: "Read the issue archive.",
          linkLabel: "Open issue",
          href: "https://mailchi.mp/2f14c22734c9/from-the-pink-room-13878026",
        },
      ],
    },
  },
  {
    slug: "fragmeister",
    title: "Fragmeister",
    homeBody: "Longform writing experiments and fragments.",
    page: {
      headerLeft: "Fragmeister",
      headerRight: "Project",
      cards: [
        {
          id: "overview",
          title: "Overview",
          body: "Writing fragments, notes, and assembled essays in progress.",
        },
        {
          id: "theme",
          title: "Theme",
          body: "Test narrative texture and tone before full publication.",
        },
        {
          id: "process",
          title: "Process",
          body: "Capture, revise, and reorganize short-form text into longer pieces.",
        },
        {
          id: "visit",
          title: "Visit",
          body: "Project page coming soon.",
        },
      ],
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

type CollectionKey = "projects" | "otherProjects" | "writing";

export type DatabaseItem = {
  slug: string;
  collection: CollectionKey;
  title: string;
  description: string;
  href?: string;
  imageHref?: string;
  imageSrc?: string;
  previewColor?: string;
  imageAlt?: string;
  linkLabel?: string;
};

// Batch-edit preview colors here by slug.
export const previewColorsBySlug: Record<string, string> = {
  writing: "#ded2b7ff",
  community: "#F2B91C",
  music: "#9dbddeff",
  art: "#D61C1B",
  "bear-blog": "#2C2111",
  "substack": "#ff6719",
  "pinkroom-117": "#f2bac8ff",
  fragmeister: "#cfd8d0",
  "pinkroom-111": "#e4decf",
};

// Single place to edit index-card content (title/description/link/image) for both databases.
export const databaseItems: DatabaseItem[] = [
  { collection: "projects", slug: "playgrounds", title: "Playgrounds", description: "Book Design", imageSrc: "/images/previews/projects/playgrounds-hero.webp", imageAlt: "Playgrounds preview", linkLabel: "Open project page" },
  { collection: "projects", slug: "plastic", title: "To All The Plastic I've Loved Before", description: "Plastic Poncho", imageSrc: "/images/previews/projects/plastic-hero.webp", imageAlt: "Plastic poncho preview", linkLabel: "Open project page" },
  { collection: "projects", slug: "enlève", title: "Enleve", description: "Product Engineering", imageSrc: "/images/previews/projects/enleve-hero.webp", imageAlt: "Enleve preview", linkLabel: "Open project page" },
  { collection: "projects", slug: "huaweimagic", title: "HuaweiMagic", description: "Interface Concept", imageSrc: "/images/previews/projects/huaweimagic-hero.webp", imageAlt: "HuaweiMagic preview", linkLabel: "Open project page" },
  { collection: "projects", slug: "cariad", title: "CARIAD Future of Mobility", description: "UX Strategy", imageSrc: "/images/previews/projects/cariad-hero.webp", imageAlt: "CARIAD preview", linkLabel: "Open project page" },
  { collection: "projects", slug: "from-now-to-now", title: "From Now To Now", description: "Photo Installation", imageSrc: "/images/previews/projects/fromnowtonow-hero.webp", imageAlt: "From now to now preview", linkLabel: "Open project page" },
  { collection: "projects", slug: "slingshot", title: "Slingshot AI", description: "Branding", imageSrc: "/images/previews/projects/slingshot-hero.webp", imageAlt: "Slingshot preview", linkLabel: "Open project page" },
  { collection: "projects", slug: "onsemble", title: "Onsemble Home", description: "Branding", imageSrc: "/images/previews/projects/onsemble-hero.webp", imageAlt: "Onsemble preview", linkLabel: "Open project page" },
  { collection: "projects", slug: "thebraincolouringbook", title: "The Brain Colouring Book", description: "Website", imageSrc: "/images/previews/projects/tbcb-hero.webp", imageAlt: "The Brain Colouring Book", linkLabel: "Open project page" },
  { collection: "projects", slug: "nuro", title: "Nuro", description: "Neurotechnology Interface", imageSrc: "/images/previews/projects/nuro-hero.webp", imageAlt: "Nuro preview", linkLabel: "Open project page" },
  { collection: "otherProjects", slug: "writing", title: "Writing", description: "Bear Blog, Substack, Pinkroom, Fragmeister" },
  { collection: "otherProjects", slug: "community", title: "Community", description: "Picnic Club, Design Collective" },
  { collection: "otherProjects", slug: "art", title: "Art", description: "instagram.com/eucarryart", href: "https://instagram.com/eucarryart" },
  { collection: "otherProjects", slug: "music", title: "Music", description: "rothkappchen.bandcamp.com", href: "https://rothkappchen.bandcamp.com" },
  { collection: "writing", slug: "bear-blog", title: "Bear Blog", description: "carrie.bearblog.dev", href: "https://carrie.bearblog.dev/blog", linkLabel: "Open project page" },
  { collection: "writing", slug: "substack", title: "Substack", description: "lookingthroughtime.substack.com", href: "https://lookingthroughtime.substack.com", linkLabel: "Open project page" },
  { collection: "writing", slug: "pinkroom-117", title: "From the Pinkroom", description: "IDE Newsletter", linkLabel: "Open project page" },
  { collection: "writing", slug: "fragmeister", title: "Fragmeister", description: "Design writing journal", imageHref: "https://fragmeister.com/who-are-we-before-design", linkLabel: "Open project page" },
];

function collectionPath(collection: CollectionKey): string {
  if (collection === "projects") return "projects";
  if (collection === "writing") return "other-projects/writing";
  return "other-projects";
}

function buildCollection(collection: CollectionKey, label: string): GridCollection {
  return {
    key: collection,
    label,
    cards: databaseItems
      .filter((item) => item.collection === collection)
      .map((item) => ({
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

export const gridCollections: Record<CollectionKey, GridCollection> = {
  projects: buildCollection("projects", "Projects"),
  otherProjects: buildCollection("otherProjects", "Other Projects"),
  writing: buildCollection("writing", "Writing"),
};

export function getGridCollection(key: string): GridCollection | undefined {
  return gridCollections[key];
}

export const otherProjectPages: OtherProjectPage[] = [
  {
    slug: "playgrounds",
    title: "Playgrounds",
    page: {
      headerLeft: "Playgrounds",
      headerRight: "Project",
      cards: [
        {
          id: "overview",
          title: "Overview",
          body: "Project breakdown and context for Playgrounds.",
          imageSrc: "/images/project-pages/projects/playgrounds/01.jpg",
          imageAlt: "Playgrounds image",
        },
        {
          id: "process",
          title: "Process",
          body: "Summarize how this project developed over time.",
        },
        {
          id: "outcome",
          title: "Outcome",
          body: "Describe outcomes, reflections, and key learnings.",
        },
        {
          id: "links",
          title: "Links",
          body: "Add links to demos, repos, or references.",
        },
      ],
    },
  },
  {
    slug: "archive-1",
    title: "Archive Entry 01",
    page: {
      headerLeft: "Archive Entry 01",
      headerRight: "Project",
      cards: [
        {
          id: "overview",
          title: "Overview",
          body: "Describe what this archive project is about.",
          imageSrc: "/images/other-projects/archive-1.jpg",
          imageAlt: "Archive entry 01 image",
        },
        {
          id: "approach",
          title: "Approach",
          body: "Explain your process, tools, and decisions.",
        },
        {
          id: "outcome",
          title: "Outcome",
          body: "Summarize key results and reflections.",
        },
        {
          id: "links",
          title: "Links",
          body: "Add links to related work or references.",
        },
      ],
    },
  },
  {
    slug: "archive-2",
    title: "Archive Entry 02",
    page: {
      headerLeft: "Archive Entry 02",
      headerRight: "Project",
      cards: [
        {
          id: "overview",
          title: "Overview",
          body: "Describe what this archive project is about.",
          imageSrc: "/images/other-projects/archive-2.jpg",
          imageAlt: "Archive entry 02 image",
        },
        {
          id: "approach",
          title: "Approach",
          body: "Explain your process, tools, and decisions.",
        },
        {
          id: "outcome",
          title: "Outcome",
          body: "Summarize key results and reflections.",
        },
        {
          id: "links",
          title: "Links",
          body: "Add links to related work or references.",
        },
      ],
    },
  },
  {
    slug: "archive-3",
    title: "Archive Entry 03",
    page: {
      headerLeft: "Archive Entry 03",
      headerRight: "Project",
      cards: [
        {
          id: "overview",
          title: "Overview",
          body: "Describe what this archive project is about.",
          imageSrc: "/images/other-projects/archive-3.jpg",
          imageAlt: "Archive entry 03 image",
        },
        { id: "approach", title: "Approach", body: "Explain your process, tools, and decisions." },
        { id: "outcome", title: "Outcome", body: "Summarize key results and reflections." },
        { id: "links", title: "Links", body: "Add links to related work or references." },
      ],
    },
  },
  {
    slug: "archive-4",
    title: "Archive Entry 04",
    page: {
      headerLeft: "Archive Entry 04",
      headerRight: "Project",
      cards: [
        {
          id: "overview",
          title: "Overview",
          body: "Describe what this archive project is about.",
          imageSrc: "/images/other-projects/archive-4.jpg",
          imageAlt: "Archive entry 04 image",
        },
        { id: "approach", title: "Approach", body: "Explain your process, tools, and decisions." },
        { id: "outcome", title: "Outcome", body: "Summarize key results and reflections." },
        { id: "links", title: "Links", body: "Add links to related work or references." },
      ],
    },
  },
  {
    slug: "archive-5",
    title: "Archive Entry 05",
    page: {
      headerLeft: "Archive Entry 05",
      headerRight: "Project",
      cards: [
        {
          id: "overview",
          title: "Overview",
          body: "Describe what this archive project is about.",
          imageSrc: "/images/other-projects/archive-5.jpg",
          imageAlt: "Archive entry 05 image",
        },
        { id: "approach", title: "Approach", body: "Explain your process, tools, and decisions." },
        { id: "outcome", title: "Outcome", body: "Summarize key results and reflections." },
        { id: "links", title: "Links", body: "Add links to related work or references." },
      ],
    },
  },
  {
    slug: "archive-6",
    title: "Archive Entry 06",
    page: {
      headerLeft: "Archive Entry 06",
      headerRight: "Project",
      cards: [
        {
          id: "overview",
          title: "Overview",
          body: "Describe what this archive project is about.",
          imageSrc: "/images/other-projects/archive-6.jpg",
          imageAlt: "Archive entry 06 image",
        },
        { id: "approach", title: "Approach", body: "Explain your process, tools, and decisions." },
        { id: "outcome", title: "Outcome", body: "Summarize key results and reflections." },
        { id: "links", title: "Links", body: "Add links to related work or references." },
      ],
    },
  },
  {
    slug: "archive-7",
    title: "Archive Entry 07",
    page: {
      headerLeft: "Archive Entry 07",
      headerRight: "Project",
      cards: [
        {
          id: "overview",
          title: "Overview",
          body: "Describe what this archive project is about.",
          imageSrc: "/images/other-projects/archive-7.jpg",
          imageAlt: "Archive entry 07 image",
        },
        { id: "approach", title: "Approach", body: "Explain your process, tools, and decisions." },
        { id: "outcome", title: "Outcome", body: "Summarize key results and reflections." },
        { id: "links", title: "Links", body: "Add links to related work or references." },
      ],
    },
  },
  {
    slug: "archive-8",
    title: "Archive Entry 08",
    page: {
      headerLeft: "Archive Entry 08",
      headerRight: "Project",
      cards: [
        {
          id: "overview",
          title: "Overview",
          body: "Describe what this archive project is about.",
          imageSrc: "/images/other-projects/archive-8.jpg",
          imageAlt: "Archive entry 08 image",
        },
        { id: "approach", title: "Approach", body: "Explain your process, tools, and decisions." },
        { id: "outcome", title: "Outcome", body: "Summarize key results and reflections." },
        { id: "links", title: "Links", body: "Add links to related work or references." },
      ],
    },
  },
  {
    slug: "archive-9",
    title: "Archive Entry 09",
    page: {
      headerLeft: "Archive Entry 09",
      headerRight: "Project",
      cards: [
        {
          id: "overview",
          title: "Overview",
          body: "Describe what this archive project is about.",
          imageSrc: "/images/other-projects/archive-9.jpg",
          imageAlt: "Archive entry 09 image",
        },
        { id: "approach", title: "Approach", body: "Explain your process, tools, and decisions." },
        { id: "outcome", title: "Outcome", body: "Summarize key results and reflections." },
        { id: "links", title: "Links", body: "Add links to related work or references." },
      ],
    },
  },
  {
    slug: "archive-10",
    title: "Archive Entry 10",
    page: {
      headerLeft: "Archive Entry 10",
      headerRight: "Project",
      cards: [
        {
          id: "overview",
          title: "Overview",
          body: "Describe what this archive project is about.",
          imageSrc: "/images/other-projects/archive-10.jpg",
          imageAlt: "Archive entry 10 image",
        },
        { id: "approach", title: "Approach", body: "Explain your process, tools, and decisions." },
        { id: "outcome", title: "Outcome", body: "Summarize key results and reflections." },
        { id: "links", title: "Links", body: "Add links to related work or references." },
      ],
    },
  },
  {
    slug: "community",
    title: "Community",
    page: {
      headerLeft: "Community",
      headerRight: "Project",
      cards: [
        {
          id: "overview",
          title: "Overview",
          body: "Community-facing projects, collaborations, and workshop formats.",
        },
        {
          id: "involvement",
          title: "Involvement",
          body: "Document your role, partners, and audience.",
        },
        {
          id: "impact",
          title: "Impact",
          body: "Capture measurable outcomes and qualitative feedback.",
        },
      ],
    },
  },
  {
    slug: "music",
    title: "Music",
    page: {
      headerLeft: "Music",
      headerRight: "Project",
      cards: [
        {
          id: "overview",
          title: "Overview",
          body: "Music releases, compositions, and in-progress sonic experiments.",
        },
        {
          id: "process",
          title: "Process",
          body: "Describe tools, recording workflow, and iteration approach.",
        },
        {
          id: "listening",
          title: "Listening",
          body: "Add links to tracks, sets, or albums when ready.",
        },
      ],
    },
  },
  {
    slug: "art",
    title: "Art",
    page: {
      headerLeft: "Art",
      headerRight: "Project",
      cards: [
        {
          id: "overview",
          title: "Overview",
          body: "Visual work across mediums, experiments, and process studies.",
        },
        {
          id: "materials",
          title: "Materials",
          body: "List materials, medium, and format notes.",
        },
        {
          id: "context",
          title: "Context",
          body: "Capture intent, references, and presentation context.",
        },
      ],
    },
  },
];

export function getOtherProjectBySlug(slug: string): OtherProjectPage | undefined {
  return otherProjectPages.find((project) => project.slug === slug);
}
