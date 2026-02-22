import { Link } from "react-router";
import ProjectTemplate, { TemplateNavItem } from "@/app/components/ProjectTemplate";
import { getProjectHeroBySlug, type TemplateCard } from "@/content/projects";

function buildSectionNav(cards: TemplateCard[]): TemplateNavItem[] {
  return cards.map((card) => ({
    label: card.title,
    href: `#${card.id}`,
  }));
}

export function MissingDetailPage({ label }: { label: string }) {
  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Project not found</h1>
      <p>
        Missing page config: <code>{label}</code>
      </p>
      <p>
        <Link to="/">Back to home</Link>
      </p>
    </div>
  );
}

function ProjectSectionLink({ card }: { card: TemplateCard }) {
  if (card.to) {
    return <Link to={card.to}>{card.linkLabel ?? card.to}</Link>;
  }

  if (card.href) {
    return (
      <a href={card.href} target="_blank" rel="noreferrer">
        {card.linkLabel ?? card.href}
      </a>
    );
  }

  return null;
}

export default function ProjectDetailLayout({
  cards,
  projectSlug,
}: {
  cards: TemplateCard[];
  projectSlug?: string;
}) {
  const hero = projectSlug ? getProjectHeroBySlug(projectSlug) : undefined;
  const firstCardImage = cards[0]?.imageSrc;
  const shouldRenderHero = Boolean(hero?.imageSrc) && hero?.imageSrc !== firstCardImage;
  const projectImageWidth = "calc((100% - 24px) / 2)";

  const breakdownContent = (
    <div style={{ width: "100%" }}>
      {shouldRenderHero ? (
        <img
          src={hero?.imageSrc}
          alt={hero?.imageAlt ?? `${projectSlug} hero image`}
          loading="lazy"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
          style={{
            width: projectImageWidth,
            aspectRatio: "4 / 3",
            objectFit: "cover",
            display: "block",
            borderRadius: "4px",
            marginBottom: "1.5rem",
          }}
        />
      ) : null}
      {cards.map((card) => (
        <article id={card.id} key={card.id} style={{ marginBottom: "2.5rem" }}>
          {card.imageSrc ? (
            <img
              src={card.imageSrc}
              alt={card.imageAlt ?? card.title}
              loading="lazy"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
              style={{
                width: projectImageWidth,
                aspectRatio: "4 / 3",
                objectFit: "cover",
                display: "block",
                borderRadius: "4px",
                marginBottom: "0.85rem",
              }}
            />
          ) : null}
          <h3
            style={{
              fontFamily: '"Rand Bold Trial", system-ui, -apple-system, sans-serif',
              fontSize: "24px",
              fontWeight: 700,
              marginBottom: "0.5rem",
              lineHeight: 1.2,
            }}
          >
            {card.title}
          </h3>
          <p style={{ fontFamily: "Times New Roman, serif", fontSize: "24px", lineHeight: 1.35 }}>{card.body}</p>
          <div style={{ fontFamily: "Times New Roman, serif", fontSize: "24px", marginTop: "0.35rem" }}>
            <ProjectSectionLink card={card} />
          </div>
        </article>
      ))}
    </div>
  );

  return (
    <ProjectTemplate
      siteTitle="Carrie Rong"
      headerLeft="About"
      headerLeftTo="/about"
      headerRight="CV"
      navItems={buildSectionNav(cards)}
      cards={[]}
      bottomRightContent={breakdownContent}
    />
  );
}
