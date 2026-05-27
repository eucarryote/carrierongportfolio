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
      id?: string;
      type: "specs";
      items: string[];
    }
  | {
      id?: string;
      type: "quote";
      text: string;
    }
  | {
      id?: string;
      type: "paragraph";
      variant?: "default" | "indented";
      body: string;
    }
  | {
      id?: string;
      type: "paragraph-heading";
      variant?: "default" | "indented";
      text: string;
    }
  | {
      id?: string;
      type: "section-heading";
      variant?: "default" | "indented";
      text: string;
    }
  | {
      id?: string;
      type: "image";
      variant?: "full" | "two-thirds" | "half" | "indented";
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
    slug: "enlève",
    title: "Enleve",
    description: "Product Engineering",
    cardColour: "#EBE050",
    cardTextColour: "dark",
    imageSrc: "/images/previews/projects/enleve-hero.webp",
    imageAlt: "Enleve preview",
    linkLabel: "Open project page",
    page: {
      blocks: [
        {
          type: "specs",
          items: ["2025", "2 months", "Solo project"],
        },
        {
          type: "paragraph",
          body: paragraphs(
            "After surviving cancer, the journey to recovery is far from over. Rather, individuals must adjust to a ‘new normal’ after undergoing treatment, which often includes fatigue and muscle weakness as well as lasting side effects from toxic therapies.",
            "One such symptom is damage to the peripheral nerves. In breast cancer survivors treated with chemotherapy, around 68% of patients experience a degree of peripheral neuropathy caused by chemotoxic agents. This is a debilitating symptom that significantly impacts one’s independence, movement, and confidence."
          ),
        },
        {
          type: "image",
          variant: "two-thirds",
          src: "/images/project-pages/projects/enleve/enleve-1.webp",
          alt: "chemotherapy-induced peripheral neuropathy",
        },
        {
          type: "paragraph-heading",
          variant: "indented",
          text: "Movement is medicine",
        },
        {
          type: "paragraph",
          variant: "indented",
          body: "In the healthcare community, the benefits of movement and exercise for recovery and rehabilitation are well established. Beyond improving mobility, strength, and other physical functions, group exercise classes also create opportunities for socialization, emotional support, and encouragement among participants.",
        },
        {
          type: "image",
          variant: "indented",
          src: "/images/project-pages/projects/enleve/enleve-2.webp",
          alt: "Group exercise class for cancer recovery and rehabilitation",
        },
        {
          type: "paragraph",
          body: "However, through interviews with eight (8) participants in a ballet class for cancer survivors, I found that peripheral neuropathy could be severe enough to prevent them from attending class. Neuropathy’s debilitating effects of pain, numbness, tingling, and balance instability was interfering with their ability to enjoy the physical, emotional, and social benefits of movement and dance.",
        },
        {
          type: "section-heading",
          text: "Research",
        },
        {
          type: "paragraph",
          body: "Chemo-induced peripheral neuropathy (CIPN) is a dose-limiting symptom resulting from the administration of neurotoxic chemotherapy for the treatment of cancer. There are no standard therapies, cures, or non-pharmaceutical interventions, with a highly negative impact on patient quality of life.",
        },
        {
          type: "image",
          variant: "half",
          src: "/images/project-pages/projects/enleve/enleve-3.webp",
          alt: "Diagram showing effects of peripheral neuropathy on balance and sensation",
        },
        {
          type: "quote",
          text: "Could vibration be used as sensory augmentation for people experiencing chemo-induced peripheral neuropathy?",
        },
        {
          type: "paragraph",
          body: "In CIPN, sensory receptors responsible for light touch and pressure (Meissner corpuscles, Merkel disks, and Ruffini endings) are often most affected, leading to a loss of precise feedback from the feet. However, Pacinian corpuscles, located deeper in the subcutaneous layer and specialised for detecting vibration, are less affected.",
        },
        {
          type: "image",
          variant: "two-thirds",
          src: "/images/project-pages/projects/enleve/enleve-4.webp",
          alt: "Diagram explaining sensory receptors affected by chemo-induced peripheral neuropathy",
        },
      ],
    },
  },
  {
    collection: "projects",
    slug: "playgrounds",
    title: "Playgrounds",
    description: "Book Design",
    cardColour: "#462669",
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
          type: "image",
          variant: "full",
          src: "/images/project-pages/projects/playgrounds/playgrounds-1.webp",
          alt: "Black and white archival photos of playground structures and children playing",
        },
        {
          id: "reflection",
          type: "paragraph",
          body: "My own journey, reflected in those of many classmates, involved navigating through a landscape of uncertainties and doubts, as well as unlearning the perfectionistic tendencies and self-imposed limitations that kept us back. It was only through light-hearted experimentation and play that the shape of our projects began to surface and this idea became the starting point of the book .",
        },
        {
          id: "process-heading",
          type: "section-heading",
          variant: "indented",
          text: "Process",
        },
        {
          id: "process-text",
          type: "paragraph",
          variant: "indented",
          body: "Juliët and I set out to capture this shared experience by creating a yearbook that would document the cohort’s projects. We collected photos, written documentation, quotes, and tributes that were a representation of the work that had been achieved to date and the environment that shaped it.",
        },
        {
          type: "image",
          variant: "indented",
          src: "/images/project-pages/projects/playgrounds/playgrounds-2.webp",
        },
        {
          id: "outcome-heading",
          type: "section-heading",
          text: "Outcome",
        },
        {
          type: "image",
          variant: "full",
          src: "/images/project-pages/projects/playgrounds/playgrounds-7.webp",
          alt: "Playgrounds outcome image",
        },
        {
          type: "paragraph",
          body: "The Playgrounds Yearbook is a collection of all the projects completed by the students of the pre-master class of 2023-2024, along with photos, quotes, and tributes to our tutors. Printed and bound by hand, it was distributed to all students and tutors as a keepsake.",
        },
        {
          type: "image",
          variant: "full",
          images: [
            { src: "/images/project-pages/projects/playgrounds/playgrounds-3.webp", alt: "Playgrounds yearbook spread" },
            { src: "/images/project-pages/projects/playgrounds/playgrounds-5.webp", alt: "Playgrounds yearbook spread" },
          ],
        },
        {
          type: "image",
          variant: "full",
          src: "/images/project-pages/projects/playgrounds/playgrounds-6.webp",
          alt: "Playgrounds yearbook spread",
        },
        {
          type: "paragraph",
          body: "It also created an opportunity for students to sign one another’s books with parting messages and sentiments at the conclusion of the year.",
        },
        {
          type: "image",
          variant: "indented",
          src: "/images/project-pages/projects/playgrounds/playgrounds-8.webp",        },
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
    slug: "huaweimagic",
    title: "HuaweiMagic",
    description: "Interface Concept",
    cardColour: "#171718",
    imageSrc: "/images/previews/projects/huaweimagic-hero.webp",
    imageAlt: "HuaweiMagic preview",
    linkLabel: "Open project page",
  },
  {
    collection: "projects",
    slug: "from-now-to-now",
    title: "From Now To Now",
    description: "Photo Installation",
    cardColour: "#20415E",
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
    slug: "cariad",
    title: "CARIAD Future of Mobility",
    description: "UX Strategy",
    cardColour: "#186932",
    imageSrc: "/images/previews/projects/cariad-hero.webp",
    imageAlt: "CARIAD preview",
    linkLabel: "Open project page",
  },
  {
    collection: "projects",
    slug: "slingshot",
    title: "Slingshot AI",
    description: "Branding",
    cardColour: "#CE0309",
    imageSrc: "/images/previews/projects/slingshot-hero.webp",
    imageAlt: "Slingshot preview",
    linkLabel: "Open project page",
  },
  {
    collection: "projects",
    slug: "onsemble",
    title: "Onsemble Home",
    description: "Branding",
    cardColour: "#B8C83D",
    imageSrc: "/images/previews/projects/onsemble-hero.webp",
    imageAlt: "Onsemble preview",
    linkLabel: "Open project page",
  },
  {
    collection: "projects",
    slug: "thebraincolouringbook",
    title: "The Brain Colouring Book",
    description: "Website",
    cardColour: "#134E5A",
    imageSrc: "/images/previews/projects/tbcb-hero.webp",
    imageAlt: "The Brain Colouring Book",
    linkLabel: "Open project page",
  },
  {
    collection: "projects",
    slug: "emgeyboard",
    title: "EMGeyboard",
    description: "Neurotechnology Interface",
    cardColour: "#F4B7EF",
    cardTextColour: "dark",
    imageSrc: "/images/previews/projects/nuro-hero.webp",
    imageAlt: "EMGeyboard preview",
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
