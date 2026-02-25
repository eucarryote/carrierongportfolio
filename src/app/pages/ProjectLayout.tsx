import { Link } from "react-router";
import { useEffect, useState } from "react";
import PageTemplate, { TemplateNavItem } from "@/app/components/PageTemplate";
import { getNextProjectBySlug, getProjectBySlug, getProjectHeroBySlug, getProjectPageBySlug, type TemplateCard } from "@/content/projects";

const defaultPageNav: TemplateNavItem[] = [
  { label: "Projects", to: "/projects" },
  { label: "Other Projects", to: "/other-projects" },
  { label: "Contact", to: "/contact" },
];

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

type SectionImage = {
  key: string;
  src: string;
  alt: string;
};

function getCardImages(card?: TemplateCard, keyPrefix = "card"): SectionImage[] {
  const explicit = card?.images?.map((image, index) => ({
    key: `${keyPrefix}-explicit-${index}`,
    src: image.src,
    alt: image.alt ?? card.title,
  }));
  if (explicit && explicit.length > 0) {
    return explicit;
  }

  if (card?.imageSrc) {
    return [{ key: `${keyPrefix}-card-image`, src: card.imageSrc, alt: card.imageAlt ?? card.title }];
  }

  return [];
}

function getGalleryClass(imageCount: number): string {
  if (imageCount === 4) return "section-gallery count-4";
  if (imageCount <= 1) return "section-gallery count-1";
  if (imageCount === 2) return "section-gallery count-2";
  if (imageCount === 3) return "section-gallery count-3";
  return "section-gallery count-many";
}

function getProcessImages(cards: TemplateCard[], processCard?: TemplateCard): SectionImage[] {
  const fromProcessCard = getCardImages(processCard, "process");
  if (fromProcessCard.length > 0) return fromProcessCard;

  return cards
    .filter((card) => card.id !== "overview" && card.id !== "outcome" && card.id !== "links" && card.imageSrc)
    .map((card, index) => ({
      key: `process-fallback-${card.id}-${index}`,
      src: card.imageSrc as string,
      alt: card.imageAlt ?? card.title,
    }));
}

function renderCardBody(body: string) {
  const paragraphs = body
    .split(/\n+/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

  if (paragraphs.length === 0) {
    return null;
  }

  return paragraphs.map((paragraph, index) => (
    <p
      className="project-card-body"
      key={`card-paragraph-${index}`}
      style={{
        fontFamily: "Times New Roman, serif",
        lineHeight: 1.35,
        marginBottom: index === paragraphs.length - 1 ? 0 : "0.75rem",
      }}
    >
      {paragraph}
    </p>
  ));
}

export default function ProjectLayout({
  cards,
  projectSlug,
}: {
  cards: TemplateCard[];
  projectSlug?: string;
}) {
  const [lightboxImage, setLightboxImage] = useState<SectionImage | null>(null);

  useEffect(() => {
    if (!lightboxImage) return undefined;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setLightboxImage(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lightboxImage]);

  const hero = projectSlug ? getProjectHeroBySlug(projectSlug) : undefined;
  const heroSrc = hero?.imageSrc;
  const heroAlt = hero?.imageAlt ?? (projectSlug ? `${projectSlug} hero image` : "Project hero image");
  const projectTitle = projectSlug ? getProjectPageBySlug(projectSlug)?.title ?? getProjectBySlug(projectSlug)?.title : undefined;
  const nextProject = projectSlug ? getNextProjectBySlug(projectSlug) : undefined;
  const overviewCard = cards.find((card) => card.id === "overview") ?? cards[0];
  const processCard = cards.find((card) => card.id === "process") ?? cards.find((card) => card.id === "approach");
  const outcomeCard = cards.find((card) => card.id === "outcome");
  const processImages = getProcessImages(cards, processCard);
  const outcomeImages = getCardImages(outcomeCard, "outcome");
  const processGridClass = getGalleryClass(processImages.length);
  const outcomeGridClass = getGalleryClass(outcomeImages.length);
  const overviewHasText = Boolean(overviewCard?.body?.trim());
  const processHasText = Boolean(processCard?.body?.trim());
  const outcomeHasText = Boolean(outcomeCard?.body?.trim());
  const titleStyle = {
    fontFamily: '"Rand Bold Trial", system-ui, -apple-system, sans-serif',
    fontWeight: 700 as const,
    lineHeight: 1.15,
    margin: 0,
  };

  const breakdownContent = (
    <div className="project-layout" style={{ width: "100%" }}>
      <style>{`
        .project-layout {
          --project-section-gap: 40px;
        }

        .project-media {
          width: calc((100% - 24px) / 2);
        }

        .project-title-block {
          padding-bottom: 12px;
        }

        .project-page-title {
          font-size: var(--project-page-title-size, 32px);
        }

        .project-copy {
          max-width: min(70%, 70ch);
        }

        .project-overview {
          margin-top: var(--project-section-gap);
          margin-bottom: var(--project-section-gap);
        }

        .project-section {
          margin-bottom: var(--project-section-gap);
        }

        .project-card-title {
          font-family: "Rand Bold Trial", system-ui, -apple-system, sans-serif;
          font-size: var(--project-card-title-size, 24px);
          font-weight: 700;
          margin-bottom: 0.5rem;
          line-height: 1.2;
        }

        .project-card-body,
        .project-card-link {
          font-size: var(--project-card-copy-size, 24px);
        }

        .project-pagination {
          margin-top: var(--project-section-gap);
          font-family: "Times New Roman", serif;
          font-size: var(--font-size-copyright, 24px);
          line-height: 1.2;
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 1rem;
        }

        .project-pagination a {
          color: #382202;
        }

        .section-gallery {
          display: flex;
          flex-direction: column;
          gap: 24px;
          margin-top: var(--project-section-gap);
          width: 70%;
        }

        .section-gallery.count-1 {
          width: calc(((100% - 24px) / 2) * 0.7);
        }

        .section-gallery-image {
          width: 100%;
          aspect-ratio: 4 / 3;
          object-fit: cover;
          display: block;
          border-radius: 4px;
          cursor: zoom-in;
        }

        .project-lightbox {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.82);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          z-index: 1000;
        }

        .project-lightbox img {
          max-width: min(92vw, 1400px);
          max-height: 90vh;
          width: auto;
          height: auto;
          display: block;
        }

        @media (max-width: 1024px) {
          .project-media.hero {
            width: 100%;
          }

          .project-copy {
            max-width: 70%;
          }

          .section-gallery {
            width: 100%;
          }
        }

        @media (max-width: 900px) {
          .project-copy {
            max-width: 100%;
          }

          .section-gallery.count-1 {
            width: 70%;
          }
        }

        @media (max-width: 768px) {
          :root {
            --project-page-title-size: 24px;
          }

          .project-layout {
            --project-section-gap: 24px;
          }

          .project-page-title {
            font-size: var(--project-page-title-size, 24px);
          }
        }

        @media (max-width: 425px) {
          :root {
            --project-page-title-size: 20px;
            --project-card-title-size: 20px;
            --project-card-copy-size: 20px;
          }

          .project-layout {
            --project-section-gap: 20px;
          }

          .project-pagination {
            flex-direction: column;
            align-items: flex-start;
            gap: 0;
          }

          .section-gallery.count-1 {
            width: 100%;
          }
        }
      `}</style>
      {heroSrc ? (
        <img
          className="project-media hero"
          src={heroSrc}
          alt={heroAlt}
          loading="lazy"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
          style={{
            aspectRatio: "4 / 3",
            objectFit: "cover",
            display: "block",
            borderRadius: "4px",
            marginBottom: "1.5rem",
          }}
        />
      ) : null}
      {projectTitle ? (
        <div className="project-title-block">
          <h2 className="project-page-title" style={titleStyle}>
            {projectTitle}
          </h2>
        </div>
      ) : null}
      {overviewCard ? (
        <section id="overview" className="project-overview">
          {overviewHasText ? <h3 className="project-card-title">Concept</h3> : null}
          <div className="project-copy">{renderCardBody(overviewCard.body)}</div>
        </section>
      ) : null}

      {processCard ? (
        <section id="process" className="project-section">
          {processHasText ? <h3 className="project-card-title">{processCard.title}</h3> : null}
          <div className="project-copy">{renderCardBody(processCard.body)}</div>
          {processImages.length > 0 ? (
            <div className={processGridClass}>
              {processImages.map((image) => (
                <img
                  key={image.key}
                  className="section-gallery-image"
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  onClick={() => setLightboxImage(image)}
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />
              ))}
            </div>
          ) : null}
        </section>
      ) : null}

      {outcomeCard ? (
        <section id="outcome" className="project-section">
          {outcomeHasText ? <h3 className="project-card-title">{outcomeCard.title}</h3> : null}
          <div className="project-copy">{renderCardBody(outcomeCard.body)}</div>
          {outcomeImages.length > 0 ? (
            <div className={outcomeGridClass}>
              {outcomeImages.map((image) => (
                <img
                  key={image.key}
                  className="section-gallery-image"
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  onClick={() => setLightboxImage(image)}
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />
              ))}
            </div>
          ) : null}
        </section>
      ) : null}
      <div className="project-pagination">
        <Link to="/projects">Back</Link>
        {nextProject ? <Link to={`/projects/${nextProject.slug}`}>Next</Link> : <span />}
      </div>
      {lightboxImage ? (
        <div className="project-lightbox" onClick={() => setLightboxImage(null)}>
          <img
            src={lightboxImage.src}
            alt={lightboxImage.alt}
            onClick={(event) => {
              event.stopPropagation();
            }}
          />
        </div>
      ) : null}
    </div>
  );

  return (
    <PageTemplate
      siteTitle="Carrie Rong"
      headerLeft="About"
      headerLeftTo="/about"
      headerRight="CV"
      navItems={defaultPageNav}
      cards={[]}
      bottomRightContent={breakdownContent}
    />
  );
}
