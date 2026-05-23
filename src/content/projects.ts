import { routes } from "@/content/site";

export type TemplateCard = {
  id: string;
  title: string;
  body: string;
  imageSrc?: string;
  images?: Array<{ src: string; alt?: string }>;
  cardColour?: string;
  cardTextColour?: "dark" | "light";
  imageAlt?: string;
  linkLabel?: string;
  href?: string;
  imageHref?: string;
  to?: string;
  year?: string;
};

export type CollectionKey = "projects" | "otherProjects" | "writing";

export type TemplateNavItem = {
  label: string;
  href?: string;
  to?: string;
};

export type GridCollection = {
  key: CollectionKey;
  label: string;
  cards: TemplateCard[];
};

export type ProjectPageContent = {
  cards?: TemplateCard[];
  blocks?: ProjectContentBlock[];
};

export type ProjectContentBlock =
  | {
      id: string;
      type: "specs";
      items: string[];
    }
  | {
      id: string;
      type: "quote";
      text: string;
    }
  | {
      id: string;
      type: "paragraph";
      variant?: "default" | "indented";
      body: string;
    }
  | {
      id: string;
      type: "section-heading";
      text: string;
    }
  | {
      id: string;
      type: "image";
      variant?: "full" | "two-thirds" | "indented";
      src?: string;
      alt?: string;
      images?: Array<{ src: string; alt?: string }>;
    };

export type ProjectPage = {
  slug: string;
  title: string;
  collection: CollectionKey;
  description: string;
  cardColour: string;
  cardTextColour?: "dark" | "light";
  href?: string;
  imageHref?: string;
  imageSrc?: string;
  imageAlt?: string;
  linkLabel?: string;
  listed?: boolean;
  page?: ProjectPageContent;
};

export const defaultCardColour = "#000000";

const paragraphs = (...items: string[]) =>
  items
    .map((item) => item.trim())
    .filter(Boolean)
    .join("\n\n");

const projectEntries: ProjectPage[] = [
  {
    collection: "projects",
    slug: "playgrounds",
    title: "Playgrounds",
    description: "Book Design",
    cardColour: "#5B3982",
    imageSrc: "/images/previews/projects/playgrounds-hero.webp",
    imageAlt: "Playgrounds preview",
    linkLabel: "Open project page",
    page: {
      blocks: [
        {
          id: "specs",
          type: "specs",
          items: ["2023", "1 month", "Collaboration with Juliët Nyland"],
        },
        {
          id: "intro-quote",
          type: "quote",
          text: "Part archive, part manifesto for the inaugural pre-master cohort of Design Academy Eindhoven.",
        },
        {
          id: "context",
          type: "paragraph",
          body: "Inspired by the ideology of Dutch architect Aldo van Eyck, whose post-war playground structures still remain sprinkled throughout the streets of Holland, I wanted to draw a connection between those places to play and the environment we experienced as the first pre-master students of Design Academy Eindhoven.",
        },
        {
          id: "research-images",
          type: "image",
          variant: "full",
          images: [
            { src: "/images/project-pages/projects/playgrounds/playgrounds-2.webp", alt: "Playground structure in a city square" },
            { src: "/images/project-pages/projects/playgrounds/playgrounds-3.webp", alt: "Circular playground climbing structure" },
            { src: "/images/project-pages/projects/playgrounds/playgrounds-4.webp", alt: "Children playing on circular stepping forms" },
          ],
        },
        {
          id: "reflection",
          type: "paragraph",
          variant: "indented",
          body: "My own journey, reflected in those of many classmates, involved navigating through a landscape of uncertainties and doubts, as well as unlearning the perfectionistic tendencies and self-imposed limitations that kept us back. It was only through light-hearted experimentation and play that the shape of our projects began to surface. This publication was a chance to capture and honour that shared process.",
        },
        {
          id: "process-heading",
          type: "section-heading",
          text: "Process",
        },
        {
          id: "process-text",
          type: "paragraph",
          body: "Juliët and I set out to capture this shared experience by creating a yearbook that would document the cohort’s projects. We collected photos, written documentation, quotes, and tributes that were a representation of the work that had been achieved to date and the environment that shaped it.",
        },
      ],
    },
  },
  {
    collection: "projects",
    slug: "plastic",
    title: "To All The Plastic I've Loved Before",
    description: "Plastic Poncho",
    cardColour: "#8C9DAD",
    imageSrc: "/images/previews/projects/plastic-hero.webp",
    imageAlt: "Plastic poncho preview",
    linkLabel: "Open project page",
    page: {
      cards: [
        {
          id: "overview",
          title: "Overview",
          body: paragraphs(
            "A single-use shopping bag is used for an average of twelve minutes before being discarded. Many other plastics are similarly destined for single use, such as packaging deliveries and plastics used in construction. The recycling paradigm is largely broken. This project looks at our relationship to disposable plastics and reframes it as something valuable, held close to the body, in the form of a waterproof poncho."
          ),
        },
        {
          id: "process",
          title: "Process",
          body: paragraphs(
            "Using found construction packaging and collected shopping bags, the properties of plastic are celebrated: its ability to melt under heat, and its transparency, durability, and lightweightness. I used a heat press in order to meld separate pieces together, generating a new textile from layers of different plastics.",
            "Instead of using traditional sewing methods to join the pieces together, the pattern was ironed together, in order to save the use of thread."
          ),
          images: [],
        },
        { id: "outcome", title: "Outcome", body: paragraphs(), images: [] },
        { id: "links", title: "Links", body: paragraphs() },
      ],
    },
  },
  {
    collection: "projects",
    slug: "enlève",
    title: "Enleve",
    description: "Product Engineering",
    cardColour: "#EBE649",
    cardTextColour: "dark",
    imageSrc: "/images/previews/projects/enleve-hero.webp",
    imageAlt: "Enleve preview",
    linkLabel: "Open project page",
    page: {
      cards: [
        {
          id: "overview",
          title: "Overview",
          body: paragraphs(),
          imageSrc: "/images/previews/projects/enleve-hero.webp",
          imageAlt: "Enleve preview",
        },
        { id: "approach", title: "Approach", body: paragraphs(), images: [] },
        { id: "outcome", title: "Outcome", body: paragraphs(), images: [] },
        { id: "links", title: "Links", body: paragraphs() },
      ],
    },
  },
  {
    collection: "projects",
    slug: "huaweimagic",
    title: "HuaweiMagic",
    description: "Interface Concept",
    cardColour: defaultCardColour,
    imageSrc: "/images/previews/projects/huaweimagic-hero.webp",
    imageAlt: "HuaweiMagic preview",
    linkLabel: "Open project page",
  },
  {
    collection: "projects",
    slug: "cariad",
    title: "CARIAD Future of Mobility",
    description: "UX Strategy",
    cardColour: defaultCardColour,
    imageSrc: "/images/previews/projects/cariad-hero.webp",
    imageAlt: "CARIAD preview",
    linkLabel: "Open project page",
  },
  {
    collection: "projects",
    slug: "from-now-to-now",
    title: "From Now To Now",
    description: "Photo Installation",
    cardColour: defaultCardColour,
    imageSrc: "/images/previews/projects/fromnowtonow-hero.webp",
    imageAlt: "From now to now preview",
    linkLabel: "Open project page",
    page: {
      blocks: [
        {
          id: "specs",
          type: "specs",
          items: ["2023", "4 months", "Solo project"],
        },
        {
          id: "prompt",
          type: "quote",
          text: "How does our perception of time shape the way we relate to the present moment?",
        },
        {
          id: "intro-heading",
          type: "section-heading",
          text: "Intro",
        },
        {
          id: "intro",
          type: "paragraph",
          body: paragraphs(
            "The project began with a personal question: what should I do with my limited time, as a young person entering a world defined by political instability, climate crisis, and growing uncertainty? Faced with the scale of these global challenges, I initially searched for areas where design intervention might create meaningful impact. However, the magnitude of these problems often felt overwhelming, leaving me questioning the significance of any individual action at all.",
            "Through this process, my focus gradually shifted away from attempting to solve external systems and toward the one thing I could directly influence: my own relationship to the present moment. In reconsidering how I spent my time, I became increasingly aware of how much modern life encourages time to be experienced primarily through productivity, urgency, and optimization."
          ),
        },
        {
          id: "process-heading",
          type: "section-heading",
          text: "Process",
        },
        {
          id: "process",
          type: "paragraph",
          body: paragraphs(
            "I began taking photographs of moments in which I felt fully present, usually of natural phenomena. I chose 12 of my own photographs that captured moments where I felt completely present. The subject matter and composition represent the state of mind that embraces patience and the intuition that arises when the mind is still. They are accompanied by twelve quotations gathered from literature, philosophy, religion, and personal reflection that offer provocative perspectives into the true nature of time.",
            "These twelve image-text pairings were arranged in the form of a clock, inviting viewers to navigate time through imagery, text, and contemplation rather than chronology alone."
          ),
        },
        {
          id: "outcome-heading",
          type: "section-heading",
          text: "Outcome",
        },
        {
          id: "outcome-image",
          type: "image",
          variant: "full",
          src: "/images/previews/projects/fromnowtonow-hero-1.webp",
          alt: "From Now To Now photographic installation",
        },
        {
          id: "outcome",
          type: "paragraph",
          body: "From Now to Now is a photographic installation first exhibited at Design Academy Eindhoven’s Pre-Master Exhibition in March 2024. It was introduced through a performative lecture explaining the significance of how the projects, photos, and concept came to be.",
        },
        {
          id: "reflection-quote",
          type: "quote",
          text: "By representing time through poetic and photographic moments, the project invites deeper emotional contemplation on temporal experience.",
        },
        {
          id: "reflection",
          type: "paragraph",
          body: "Ultimately, the work is a manifestation of how creating and engaging with art can cultivate a deeper relationship to time and everyday life. In response to the overwhelming scale of contemporary global crises, the project in fact leads focus away from them, and instead proposes attention and presence as small but meaningful forms of individual agency.",
        },
      ],
    },
  },
  {
    collection: "projects",
    slug: "slingshot",
    title: "Slingshot AI",
    description: "Branding",
    cardColour: defaultCardColour,
    imageSrc: "/images/previews/projects/slingshot-hero.webp",
    imageAlt: "Slingshot preview",
    linkLabel: "Open project page",
  },
  {
    collection: "projects",
    slug: "onsemble",
    title: "Onsemble Home",
    description: "Branding",
    cardColour: defaultCardColour,
    imageSrc: "/images/previews/projects/onsemble-hero.webp",
    imageAlt: "Onsemble preview",
    linkLabel: "Open project page",
  },
  {
    collection: "projects",
    slug: "thebraincolouringbook",
    title: "The Brain Colouring Book",
    description: "Website",
    cardColour: defaultCardColour,
    imageSrc: "/images/previews/projects/tbcb-hero.webp",
    imageAlt: "The Brain Colouring Book",
    linkLabel: "Open project page",
  },
  {
    collection: "projects",
    slug: "nuro",
    title: "Nuro",
    description: "Neurotechnology Interface",
    cardColour: defaultCardColour,
    imageSrc: "/images/previews/projects/nuro-hero.webp",
    imageAlt: "Nuro preview",
    linkLabel: "Open project page",
  },
];

const otherProjectEntries: ProjectPage[] = [
  {
    collection: "otherProjects",
    slug: "writing",
    title: "Writing",
    description: "Bear Blog, Substack, Pinkroom, Fragmeister",
    cardColour: defaultCardColour,
  },
  {
    collection: "otherProjects",
    slug: "community",
    title: "Community",
    description: "Picnic Club, Design Collective",
    cardColour: defaultCardColour,
    page: {
      cards: [
        { id: "overview", title: "Overview", body: paragraphs() },
        { id: "involvement", title: "Involvement", body: paragraphs() },
        { id: "impact", title: "Impact", body: paragraphs() },
      ],
    },
  },
  {
    collection: "otherProjects",
    slug: "art",
    title: "Art",
    description: "instagram.com/eucarryart",
    cardColour: defaultCardColour,
    href: "https://instagram.com/eucarryart",
    linkLabel: "Open site",
    page: {
      cards: [
        { id: "overview", title: "Overview", body: paragraphs() },
        { id: "materials", title: "Materials", body: paragraphs() },
        { id: "context", title: "Context", body: paragraphs() },
      ],
    },
  },
  {
    collection: "otherProjects",
    slug: "music",
    title: "Music",
    description: "rothkappchen.bandcamp.com",
    cardColour: defaultCardColour,
    href: "https://rothkappchen.bandcamp.com",
    linkLabel: "Open site",
    page: {
      cards: [
        { id: "overview", title: "Overview", body: paragraphs() },
        { id: "process", title: "Process", body: paragraphs(), images: [] },
        { id: "listening", title: "Listening", body: paragraphs() },
      ],
    },
  },
];

const writingEntries: ProjectPage[] = [
  {
    collection: "writing",
    slug: "bear-blog",
    title: "Bear Blog",
    description: "carrie.bearblog.dev",
    cardColour: defaultCardColour,
    href: "https://carrie.bearblog.dev",
    linkLabel: "Open site",
    page: {
      cards: [
        { id: "overview", title: "Overview", body: paragraphs("A writing space for essays, observations, and notes in progress.") },
        { id: "focus", title: "Focus", body: paragraphs("Simple publishing flow and clear typography without visual noise.") },
        { id: "process", title: "Process", body: paragraphs("Iterate on writing rhythm first, then improve structure and archives."), images: [] },
        {
          id: "visit",
          title: "Visit",
          body: paragraphs("Read the latest posts on Bear Blog."),
          linkLabel: "Open site",
          href: "https://carrie.bearblog.dev",
        },
      ],
    },
  },
  {
    collection: "writing",
    slug: "substack",
    title: "Substack",
    description: "lookingthroughtime.substack.com",
    cardColour: defaultCardColour,
    href: "https://lookingthroughtime.substack.com",
    linkLabel: "Open site",
    page: {
      cards: [
        { id: "overview", title: "Overview", body: paragraphs("Newsletter essays and serialized notes sent directly to subscribers.") },
        { id: "audience", title: "Audience", body: paragraphs("Build a recurring reader relationship through consistent publication.") },
        { id: "workflow", title: "Workflow", body: paragraphs("Draft, revise, schedule, and measure reader responses over time.") },
        {
          id: "visit",
          title: "Visit",
          body: paragraphs("Browse issues on Substack."),
          linkLabel: "Open site",
          href: "https://lookingthroughtime.substack.com",
        },
      ],
    },
  },
  {
    collection: "writing",
    slug: "pinkroom-117",
    title: "From the Pinkroom",
    description: "IDE Newsletter",
    cardColour: defaultCardColour,
    linkLabel: "Open project page",
    page: {
      cards: [
        {
          id: "overview",
          title: "Overview",
          body: paragraphs(
            "From the Pinkroom is the official newsletter for the double masters Innovation Design Engineering program. Circulated biweekly, the readership includes staff, students, and alumni of the program."
          ),
        },
        {
          id: "process",
          title: "",
          body: paragraphs(),
          linkLabel: "Pinkroom #109 - Beginning of a Journey",
          href: "https://mailchi.mp/2f14c22734c9/from-the-pink-room-13878026?e=ab89eaa6b8#:~:text=IDE%201%0AThe,IDE1%2C%C2%A0%20Carrie%20Rong",
        },
        {
          id: "outcome",
          title: "",
          body: paragraphs(),
          linkLabel: "Pinkroom #117 - What is Innovation?",
          href: "https://mailchi.mp/7a4ff87f3f1e/from-the-pink-room-13881394?e=4fb450b3b1#:~:text=what%20is%20innovation,Carrie%20Rong%20IDE1",
        },
      ],
    },
  },
  {
    collection: "writing",
    slug: "pinkroom-111",
    title: "Pinkroom 111",
    description: "mailchi.mp/2f14c22734c9/from-the-pink-room-13878026",
    cardColour: defaultCardColour,
    listed: false,
    page: {
      cards: [
        { id: "overview", title: "Overview", body: paragraphs("Early issue documenting experiments in voice and publication rhythm.") },
        { id: "intent", title: "Intent", body: paragraphs("Capture observations quickly while preserving a strong editorial tone.") },
        { id: "notes", title: "Notes", body: paragraphs("The issue structure informed later formats used in Pinkroom 117.") },
        {
          id: "visit",
          title: "Visit",
          body: paragraphs("Read the issue archive."),
          linkLabel: "Open issue",
          href: "https://mailchi.mp/2f14c22734c9/from-the-pink-room-13878026",
        },
      ],
    },
  },
  {
    collection: "writing",
    slug: "fragmeister",
    title: "Fragmeister",
    description: "Design writing journal",
    cardColour: defaultCardColour,
    imageHref: "https://fragmeister.com/who-are-we-before-design",
    linkLabel: "Open project page",
    page: {
      cards: [
        { id: "overview", title: "Overview", body: paragraphs("Writing fragments, notes, and assembled essays in progress.") },
        { id: "theme", title: "Theme", body: paragraphs("Test narrative texture and tone before full publication.") },
        { id: "process", title: "Process", body: paragraphs("Capture, revise, and reorganize short-form text into longer pieces."), images: [] },
        { id: "visit", title: "Visit", body: paragraphs() },
      ],
    },
  },
];

const allEntries = [...projectEntries, ...otherProjectEntries, ...writingEntries];

function detailCardsFor(project: ProjectPage): TemplateCard[] {
  if (project.page?.cards) return project.page.cards;

  return [
    { id: "overview", title: "Overview", body: project.description },
    { id: "process", title: "Process", body: paragraphs(), images: [] },
    { id: "outcome", title: "Outcome", body: paragraphs(), images: [] },
  ];
}

function gridPath(project: ProjectPage): string | undefined {
  if (project.href) return undefined;
  if (project.collection === "projects") return `${routes.projects}/${project.slug}`;
  if (project.collection === "otherProjects" && project.slug === "writing") return routes.writing;
  if (project.collection === "writing") return `${routes.writing}/${project.slug}`;
  return `${routes.experiments}/${project.slug}`;
}

function toGridCard(project: ProjectPage): TemplateCard {
  return {
    id: project.slug,
    title: project.title,
    body: project.description,
    to: gridPath(project),
    href: project.href,
    imageHref: project.imageHref,
    imageSrc: project.imageSrc,
    cardColour: project.cardColour,
    cardTextColour: project.cardTextColour,
    imageAlt: project.imageAlt,
    linkLabel: project.linkLabel,
  };
}

function findProject(slug: string): ProjectPage | undefined {
  return allEntries.find((project) => project.slug === slug);
}

function getNextInCollection(project: ProjectPage): { slug: string; title: string } | undefined {
  const collectionItems = allEntries.filter((entry) => entry.collection === project.collection && entry.slug !== "writing");
  if (collectionItems.length < 2) return undefined;

  const currentIndex = collectionItems.findIndex((entry) => entry.slug === project.slug);
  if (currentIndex === -1) return undefined;

  const next = collectionItems[(currentIndex + 1) % collectionItems.length];
  return { slug: next.slug, title: next.title };
}

export const projects = projectEntries;
export const databaseItems = allEntries;

export const gridCollections: Record<CollectionKey, GridCollection> = {
  projects: { key: "projects", label: "Projects", cards: projectEntries.map(toGridCard) },
  otherProjects: { key: "otherProjects", label: "Experiments", cards: otherProjectEntries.map(toGridCard) },
  writing: { key: "writing", label: "Writing", cards: writingEntries.filter((entry) => entry.listed !== false).map(toGridCard) },
};

export function getGridCollection(key: string): GridCollection | undefined {
  return gridCollections[key as CollectionKey];
}

export function getProjectHeroBySlug(slug: string): { imageSrc: string; imageAlt?: string } | undefined {
  const project = findProject(slug);
  if (!project?.imageSrc) return undefined;
  return { imageSrc: project.imageSrc, imageAlt: project.imageAlt };
}

export function getCardColourBySlug(slug: string): string {
  return findProject(slug)?.cardColour ?? defaultCardColour;
}

export function getProjectBySlug(slug: string): ProjectPage | undefined {
  const project = findProject(slug);
  return project?.collection === "writing" ? project : undefined;
}

export function getOtherProjectBySlug(slug: string): ProjectPage | undefined {
  const project = findProject(slug);
  return project?.collection === "otherProjects" ? project : undefined;
}

export function getProjectPageBySlug(slug: string): ProjectPage | undefined {
  const project = findProject(slug);
  if (!project) return undefined;
  return { ...project, page: { ...project.page, cards: detailCardsFor(project) } };
}

export function getNextProjectBySlug(slug: string): { slug: string; title: string } | undefined {
  const project = findProject(slug);
  return project ? getNextInCollection(project) : undefined;
}

export function getProjectPathBySlug(slug: string): string | undefined {
  const project = findProject(slug);
  if (!project) return undefined;
  if (project.collection === "projects") return `${routes.projects}/${slug}`;
  if (project.collection === "writing") return `${routes.writing}/${slug}`;
  return `${routes.experiments}/${slug}`;
}

export function getProjectBackPathBySlug(slug?: string): string {
  if (!slug) return routes.projects;

  const project = findProject(slug);
  if (project?.collection === "writing") return routes.writing;
  if (project?.collection === "otherProjects") return routes.experiments;
  return routes.projects;
}

export const projectsDatabase = projectEntries;
export const projectDatabase = projectEntries;
export const otherProjectDatabase = writingEntries;
export const writingProjects = writingEntries;
export const projectPages = projectEntries;
