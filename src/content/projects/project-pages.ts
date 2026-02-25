import { databaseItems } from "./database";
import type { OtherProjectDatabaseEntry, OtherProjectPage } from "./types";

const paragraphs = (...items: string[]) =>
  items
    .map((item) => item.trim())
    .filter(Boolean)
    .join("\n\n");

export const projectDatabase: OtherProjectPage[] = [
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
          body: paragraphs(
            "Inspired by the philosophy of Aldo van Eyck, a Dutch architect, whose playground structures remain sprinkled throughout the streets and neighbourhoods of Holland, I wanted to draw a connection between the personal journeys we experienced as the first Design Academy Eindhoven pre-master cohort and re-learning to play.",
            "My own journey, reflected in that of many classmates, involved navigating through a muddled landscape of uncertainty and doubts. It required unlearning the perfectionistic tendencies and self-imposed inhibitions in order to not take ourselves too seriously. It was only through light-hearted play and experimentation that the shape of our projects begin to surface.",
            "With this project I set out to pay tribute to the environment created by the pre-master students and tutors in establishing a safe space to play."
          ),
          imageSrc: "/images/project-pages/projects/playgrounds/01.jpg",
          imageAlt: "Playgrounds image",
        },
        {
          id: "process",
          title: "",
          body: paragraphs(),
          images: [
         
          ],
        },
        {
          id: "outcome",
          title: "Outcome",
          body: paragraphs(
            "The Playgrounds Yearbook is a collection of all the projects completed by the students of the pre-master class of 2023-2024, along with photos, quotes, and tributes to our tutors. Designed, printed and bound by hand, it was distributed to all students and tutors as a keepsake.",
            "It also created an opportunity for students to sign one another’s books with parting messages and sentiments at the conclusion of the year.",
            "In collaboration with Juliët Nyland"
          ),
          images: [
            {src: "/images/project-pages/projects/playgrounds/playgrounds-1.webp"},
            {src: "/images/project-pages/projects/playgrounds/playgrounds-2.webp"},
            {src: "/images/project-pages/projects/playgrounds/playgrounds-3.webp"},
            {src: "/images/project-pages/projects/playgrounds/playgrounds-4.webp"},
          ],
        },
        {
          id: "links",
          title: "Links",
          body: paragraphs(),
        },
      ],
    },
  },
  {
    slug: "plastic",
    title: "To All The Plastic I've Loved Before",
    page: {
      headerLeft: "To All The Plastic I've Loved Before",
      headerRight: "Project",
      cards: [
        {
          id: "overview",
          title: "Overview",
          body: paragraphs(
            "A single-use shopping bag is used for an average of twelve minutes before being discarded. Many other plastics are similarly destined for single use, such as packaging deliveries and plastics used in construction. The recycling paradigm is largely broken. This project looks at our relationship to disposable plastics and reframes it as something valuable, held close to the body, in the form of a waterproof poncho.",
          ),
        },
        {
          id: "process",
          title: "Process",
          body: paragraphs(  
            "Using found construction packaging and collected shopping bags, the properties of plastic are celebrated: its ability to melt under heat, and its transparency, durability, and lightweightness. I used a heat press in order to meld separate pieces together, generating a new textile from layers of different plastics.",
            "Instead of using traditional sewing methods to join the pieces together, the pattern was ironed together, in order to save the use of thread.",
            ),
          images: [],
          },
        {
          id: "outcome",
          title: "Outcome",
          body: paragraphs(),
          images: [],
        },
        {
          id: "links",
          title: "Links",
          body: paragraphs(),
        },
      ],
    },
  },
  {
    slug: "enlève",
    title: "Enleve",
    page: {
      headerLeft: "Enleve",
      headerRight: "Project",
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
    slug: "huaweimagic",
    title: "HuaweiMagic",
    page: {
      headerLeft: "HuaweiMagic",
      headerRight: "Project",
      cards: [
        {
          id: "overview",
          title: "Overview",
          body: paragraphs(),
          imageSrc: "/images/previews/projects/huaweimagic-hero.webp",
          imageAlt: "HuaweiMagic preview",
        },
        { id: "approach", title: "Approach", body: paragraphs(), images: [] },
        { id: "outcome", title: "Outcome", body: paragraphs(), images: [] },
        { id: "links", title: "Links", body: paragraphs() },
      ],
    },
  },
  {
    slug: "cariad",
    title: "CARIAD Future of Mobility",
    page: {
      headerLeft: "CARIAD Future of Mobility",
      headerRight: "Project",
      cards: [
        {
          id: "overview",
          title: "Overview",
          body: paragraphs(),
          imageSrc: "/images/previews/projects/cariad-hero.webp",
          imageAlt: "CARIAD preview",
        },
        { id: "approach", title: "Approach", body: paragraphs(), images: [] },
        { id: "outcome", title: "Outcome", body: paragraphs(), images: [] },
        { id: "links", title: "Links", body: paragraphs() },
      ],
    },
  },
  {
    slug: "from-now-to-now",
    title: "From Now To Now",
    page: {
      headerLeft: "From Now To Now",
      headerRight: "Project",
      cards: [
        {
          id: "overview",
          title: "Overview",
          body: paragraphs(),
          imageSrc: "/images/previews/projects/fromnowtonow-hero.webp",
          imageAlt: "From now to now preview",
        },
        { id: "approach", title: "Approach", body: paragraphs(), images: [] },
        { id: "outcome", title: "Outcome", body: paragraphs(), images: [] },
        { id: "links", title: "Links", body: paragraphs() },
      ],
    },
  },
  {
    slug: "slingshot",
    title: "Slingshot AI",
    page: {
      headerLeft: "Slingshot AI",
      headerRight: "Project",
      cards: [
        {
          id: "overview",
          title: "Overview",
          body: paragraphs(),
          imageSrc: "/images/previews/projects/slingshot-hero.webp",
          imageAlt: "Slingshot preview",
        },
        { id: "approach", title: "Approach", body: paragraphs(), images: [] },
        { id: "outcome", title: "Outcome", body: paragraphs(), images: [] },
        { id: "links", title: "Links", body: paragraphs() },
      ],
    },
  },
  {
    slug: "onsemble",
    title: "Onsemble Home",
    page: {
      headerLeft: "Onsemble Home",
      headerRight: "Project",
      cards: [
        {
          id: "overview",
          title: "Overview",
          body: paragraphs(),
          imageSrc: "/images/previews/projects/onsemble-hero.webp",
          imageAlt: "Onsemble preview",
        },
        { id: "approach", title: "Approach", body: paragraphs(), images: [] },
        { id: "outcome", title: "Outcome", body: paragraphs(), images: [] },
        { id: "links", title: "Links", body: paragraphs() },
      ],
    },
  },
  {
    slug: "thebraincolouringbook",
    title: "The Brain Colouring Book",
    page: {
      headerLeft: "The Brain Colouring Book",
      headerRight: "Project",
      cards: [
        {
          id: "overview",
          title: "Overview",
          body: paragraphs(),
          imageSrc: "/images/previews/projects/tbcb-hero.webp",
          imageAlt: "The Brain Colouring Book",
        },
        { id: "approach", title: "Approach", body: paragraphs(), images: [] },
        { id: "outcome", title: "Outcome", body: paragraphs(), images: [] },
        { id: "links", title: "Links", body: paragraphs() },
      ],
    },
  },
  {
    slug: "nuro",
    title: "Nuro",
    page: {
      headerLeft: "Nuro",
      headerRight: "Project",
      cards: [
        {
          id: "overview",
          title: "Overview",
          body: paragraphs(),
          imageSrc: "/images/previews/projects/nuro-hero.webp",
          imageAlt: "Nuro preview",
        },
        { id: "approach", title: "Approach", body: paragraphs(), images: [] },
        { id: "outcome", title: "Outcome", body: paragraphs(), images: [] },
        { id: "links", title: "Links", body: paragraphs() },
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
          body: paragraphs(),
        },
        {
          id: "involvement",
          title: "Involvement",
          body: paragraphs(),
        },
        {
          id: "impact",
          title: "Impact",
          body: paragraphs(),
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
          body: paragraphs(),
        },
        {
          id: "process",
          title: "Process",
          body: paragraphs(),
          images: [],
        },
        {
          id: "listening",
          title: "Listening",
          body: paragraphs(),
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
          body: paragraphs(),
        },
        {
          id: "materials",
          title: "Materials",
          body: paragraphs(),
        },
        {
          id: "context",
          title: "Context",
          body: paragraphs(),
        },
      ],
    },
  },
];

export const otherProjectDatabase: OtherProjectDatabaseEntry[] = [
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
          body: paragraphs("A writing space for essays, observations, and notes in progress."),
        },
        {
          id: "focus",
          title: "Focus",
          body: paragraphs("Simple publishing flow and clear typography without visual noise."),
        },
        {
          id: "process",
          title: "Process",
          body: paragraphs("Iterate on writing rhythm first, then improve structure and archives."),
          images: [],
        },
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
          body: paragraphs("Newsletter essays and serialized notes sent directly to subscribers."),
        },
        {
          id: "audience",
          title: "Audience",
          body: paragraphs("Build a recurring reader relationship through consistent publication."),
        },
        {
          id: "workflow",
          title: "Workflow",
          body: paragraphs("Draft, revise, schedule, and measure reader responses over time."),
        },
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
    slug: "pinkroom-117",
    title: "Pinkroom",
    homeBody: "mailchi.mp/2f14c22734c9/from-the-pink-room-13878026",
    projectUrl: "https://mailchi.mp/2f14c22734c9/from-the-pink-room-13878026",
    page: {
      headerLeft: "Pinkroom",
      headerRight: "Project",
      cards: [
        {
          id: "overview",
          title: "Overview",
          body: paragraphs("Issue-based publication with visual motifs and archival references."),
        },
        {
          id: "theme",
          title: "Theme",
          body: paragraphs("A focused issue with time, memory, and place as recurring threads."),
        },
        {
          id: "format",
          title: "Format",
          body: paragraphs("Layered text and references arranged for quick and deep reading."),
        },
        {
          id: "visit",
          title: "Visit",
          body: paragraphs("Read the full issue."),
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
          body: paragraphs("Early issue documenting experiments in voice and publication rhythm."),
        },
        {
          id: "intent",
          title: "Intent",
          body: paragraphs("Capture observations quickly while preserving a strong editorial tone."),
        },
        {
          id: "notes",
          title: "Notes",
          body: paragraphs("The issue structure informed later formats used in Pinkroom 117."),
        },
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
          body: paragraphs("Writing fragments, notes, and assembled essays in progress."),
        },
        {
          id: "theme",
          title: "Theme",
          body: paragraphs("Test narrative texture and tone before full publication."),
        },
        {
          id: "process",
          title: "Process",
          body: paragraphs("Capture, revise, and reorganize short-form text into longer pieces."),
          images: [],
        },
        {
          id: "visit",
          title: "Visit",
          body: paragraphs(),
        },
      ],
    },
  },
];

export function getProjectBySlug(slug: string): OtherProjectDatabaseEntry | undefined {
  return otherProjectDatabase.find((project) => project.slug === slug);
}


export function getOtherProjectBySlug(slug: string): OtherProjectPage | undefined {
  return projectDatabase.find((project) => project.slug === slug);
}

export function getProjectPageBySlug(slug: string): OtherProjectPage | undefined {
  const existing = getOtherProjectBySlug(slug);
  if (existing) return existing;

  const item = databaseItems.find((entry) => entry.collection === "projects" && entry.slug === slug);
  if (!item) return undefined;

  return {
    slug: item.slug,
    title: item.title,
    page: {
      headerLeft: item.title,
      headerRight: "Project",
      cards: [
        {
          id: "overview",
          title: "Overview",
          body: item.description || "",
        },
        {
          id: "process",
          title: "Process",
          body: paragraphs(),
          images: [],
        },
        {
          id: "outcome",
          title: "Outcome",
          body: paragraphs(),
          images: [],
        },
      ],
    },
  };
}

function getNextBySlug<T extends { slug: string; title: string }>(
  items: T[],
  slug: string
): { slug: string; title: string } | undefined {
  if (items.length < 2) return undefined;
  const currentIndex = items.findIndex((item) => item.slug === slug);
  if (currentIndex === -1) return undefined;

  const nextIndex = (currentIndex + 1) % items.length;
  const nextItem = items[nextIndex];
  return { slug: nextItem.slug, title: nextItem.title };
}

export function getNextProjectBySlug(slug: string): { slug: string; title: string } | undefined {
  const nextFromProjectDatabase = getNextBySlug(projectDatabase, slug);
  if (nextFromProjectDatabase) return nextFromProjectDatabase;

  const nextFromOtherProjectDatabase = getNextBySlug(otherProjectDatabase, slug);
  if (nextFromOtherProjectDatabase) return nextFromOtherProjectDatabase;

  const projectItems = databaseItems.filter((entry) => entry.collection === "projects");
  const nextFromDatabaseItems = getNextBySlug(projectItems, slug);
  if (nextFromDatabaseItems) return nextFromDatabaseItems;

  return undefined;
}

// Backward-compatible aliases
export const writingProjects = otherProjectDatabase;
export const projectPages = projectDatabase;
