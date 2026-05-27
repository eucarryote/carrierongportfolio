import { CSSProperties, useEffect, useState } from "react";
import { Link } from "react-router";
import PageTemplate from "@/app/components/PageTemplate";
import { routes } from "@/content/site";
import {
  getCardColourBySlug,
  getNextProjectBySlug,
  getProjectBackPathBySlug,
  getProjectHeroBySlug,
  getProjectPageBySlug,
  getProjectPathBySlug,
  type ProjectContentBlock,
  type TemplateCard,
} from "@/content/projects";

type SectionImage = {
  key: string;
  src: string;
  alt: string;
};

export function MissingDetailPage({ label }: { label: string }) {
  return (
    <div className="missing-page">
      <h1>Project not found</h1>
      <p>
        Missing page config: <code>{label}</code>
      </p>
      <p>
        <Link to={routes.home}>Back to home</Link>
      </p>
    </div>
  );
}

function getCardImages(card?: TemplateCard, keyPrefix = "card"): SectionImage[] {
  const explicit = card?.images?.map((image, index) => ({
    key: `${keyPrefix}-explicit-${index}`,
    src: image.src,
    alt: image.alt ?? card.title,
  }));
  if (explicit && explicit.length > 0) return explicit;

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

function CardBody({ body }: { body: string }) {
  const paragraphs = body
    .split(/\n+/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

  return paragraphs.map((paragraph, index) => (
    <p className="project-card-body" key={`card-paragraph-${index}`}>
      {paragraph}
    </p>
  ));
}

function CardLink({ card }: { card?: TemplateCard }) {
  if (!card?.href) return null;

  return (
    <p className="project-card-link">
      <a href={card.href} target="_blank" rel="noreferrer">
        {card.linkLabel ?? card.href}
      </a>
    </p>
  );
}

function ProjectText({ text }: { text: string }) {
  return text
    .split(/\n+/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean)
    .map((paragraph, index) => <p key={`project-block-paragraph-${index}`}>{paragraph}</p>);
}

function getProjectImageClass(variant: Extract<ProjectContentBlock, { type: "image" }>["variant"]): string {
  if (variant === "two-thirds") return "project-image-block project-image-two-thirds";
  if (variant === "half") return "project-image-block project-image-half";
  if (variant === "indented") return "project-image-block project-image-indented";
  return "project-image-block project-image-full";
}

function ProjectContentBlocks({
  blocks,
  onImageClick,
}: {
  blocks: ProjectContentBlock[];
  onImageClick: (image: SectionImage) => void;
}) {
  return (
    <div className="project-blocks">
      {blocks.map((block, blockIndex) => {
        const blockKey = block.id ?? `${block.type}-${blockIndex}`;
        const blockAnchor = block.id ? { id: block.id } : {};

        if (block.type === "specs") {
          return (
            <div className="project-specs" key={blockKey} {...blockAnchor}>
              {block.items.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          );
        }

        if (block.type === "quote") {
          return (
            <div className="project-quote" key={blockKey} {...blockAnchor}>
              <ProjectText text={block.text} />
            </div>
          );
        }

        if (block.type === "paragraph") {
          return (
            <div
              className={`project-paragraph ${block.variant === "indented" ? "project-paragraph-indented" : "project-paragraph-default"}`}
              key={blockKey}
              {...blockAnchor}
            >
              <ProjectText text={block.body} />
            </div>
          );
        }

        if (block.type === "paragraph-heading") {
          return (
            <h3
              className={`project-paragraph-heading ${block.variant === "indented" ? "project-paragraph-indented" : "project-paragraph-default"}`}
              key={blockKey}
              {...blockAnchor}
            >
              {block.text}
            </h3>
          );
        }

        if (block.type === "section-heading") {
          return (
            <div
              className={`project-section-heading ${block.variant === "indented" ? "project-paragraph-indented" : "project-paragraph-default"}`}
              key={blockKey}
              {...blockAnchor}
            >
              {block.text}
            </div>
          );
        }

        const images = block.images ?? (block.src ? [{ src: block.src, alt: block.alt }] : []);
        if (images.length === 0) return null;

        return (
          <div className={getProjectImageClass(block.variant)} key={blockKey} {...blockAnchor}>
            {images.map((image, index) => {
              const sectionImage = {
                key: `${blockKey}-${index}`,
                src: image.src,
                alt: image.alt ?? block.alt ?? "",
              };

              return (
                <img
                  key={sectionImage.key}
                  src={sectionImage.src}
                  alt={sectionImage.alt}
                  loading="lazy"
                  onClick={() => onImageClick(sectionImage)}
                  onError={(event) => {
                    event.currentTarget.hidden = true;
                  }}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

function cardStyle(cardColour?: string): CSSProperties | undefined {
  if (!cardColour) return undefined;
  return { "--card-colour": cardColour } as CSSProperties;
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
      if (event.key === "Escape") setLightboxImage(null);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lightboxImage]);

  const project = projectSlug ? getProjectPageBySlug(projectSlug) : undefined;
  const hero = projectSlug ? getProjectHeroBySlug(projectSlug) : undefined;
  const nextProject = projectSlug ? getNextProjectBySlug(projectSlug) : undefined;
  const nextPath = nextProject ? getProjectPathBySlug(nextProject.slug) : undefined;
  const backPath = getProjectBackPathBySlug(projectSlug);
  const cardColour = projectSlug ? getCardColourBySlug(projectSlug) : undefined;
  const contentBlocks = project?.page?.blocks;
  const overviewCard = cards.find((card) => card.id === "overview") ?? cards[0];
  const processCard = cards.find((card) => card.id === "process") ?? cards.find((card) => card.id === "approach");
  const outcomeCard = cards.find((card) => card.id === "outcome");
  const processImages = getProcessImages(cards, processCard);
  const outcomeImages = getCardImages(outcomeCard, "outcome");
  const overviewHasContent = Boolean(overviewCard?.body?.trim() || overviewCard?.href);
  const processHasContent = Boolean(processCard?.body?.trim() || processCard?.href);
  const outcomeHasContent = Boolean(outcomeCard?.body?.trim() || outcomeCard?.href);
  const isLinkOnlyCard = (card?: TemplateCard) => Boolean(card?.href && !card?.body?.trim());

  const breakdownContent = (
    <div className="project-layout">
      {project?.title ? (
        <div className="project-title-block">
          <h2 className="project-page-title">{project.title}</h2>
        </div>
      ) : null}

      {hero?.imageSrc ? (
        <img
          className="project-media hero"
          src={hero.imageSrc}
          alt={hero.imageAlt ?? `${projectSlug} hero image`}
          loading="eager"
          fetchPriority="high"
          onError={(event) => {
            event.currentTarget.hidden = true;
          }}
        />
      ) : cardColour ? (
        <div className="project-media hero project-colour-block" style={cardStyle(cardColour)} aria-label={`${projectSlug} colour block`} />
      ) : null}

      {contentBlocks?.length ? (
        <ProjectContentBlocks blocks={contentBlocks} onImageClick={setLightboxImage} />
      ) : (
        <>
          {overviewCard ? (
            <section id="overview" className={`project-overview ${isLinkOnlyCard(processCard) ? "compact" : ""}`}>
              {overviewHasContent ? <h3 className="project-card-title">Concept</h3> : null}
              <div className="project-copy">
                <CardBody body={overviewCard.body} />
              </div>
              <CardLink card={overviewCard} />
            </section>
          ) : null}

          {processCard ? (
            <section id="process" className={`project-section ${isLinkOnlyCard(processCard) ? "project-section-link-only" : ""}`}>
              {processHasContent && processCard.title?.trim() ? <h3 className="project-card-title">{processCard.title}</h3> : null}
              <div className="project-copy">
                <CardBody body={processCard.body} />
              </div>
              <CardLink card={processCard} />
              {processImages.length > 0 ? (
                <div className={getGalleryClass(processImages.length)}>
                  {processImages.map((image) => (
                    <img
                      key={image.key}
                      className="section-gallery-image"
                      src={image.src}
                      alt={image.alt}
                      loading="lazy"
                      onClick={() => setLightboxImage(image)}
                      onError={(event) => {
                        event.currentTarget.hidden = true;
                      }}
                    />
                  ))}
                </div>
              ) : null}
            </section>
          ) : null}

          {outcomeCard ? (
            <section id="outcome" className={`project-section ${isLinkOnlyCard(outcomeCard) ? "project-section-link-only" : ""}`}>
              {outcomeHasContent && outcomeCard.title?.trim() ? <h3 className="project-card-title">{outcomeCard.title}</h3> : null}
              <div className="project-copy">
                <CardBody body={outcomeCard.body} />
              </div>
              <CardLink card={outcomeCard} />
              {outcomeImages.length > 0 ? (
                <div className={getGalleryClass(outcomeImages.length)}>
                  {outcomeImages.map((image) => (
                    <img
                      key={image.key}
                      className="section-gallery-image"
                      src={image.src}
                      alt={image.alt}
                      loading="lazy"
                      onClick={() => setLightboxImage(image)}
                      onError={(event) => {
                        event.currentTarget.hidden = true;
                      }}
                    />
                  ))}
                </div>
              ) : null}
            </section>
          ) : null}
        </>
      )}

      <div className="project-pagination">
        <Link to={backPath}>Back</Link>
        {nextPath ? <Link to={nextPath}>Next</Link> : <span />}
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
      cards={[]}
      bottomRightContent={breakdownContent}
    />
  );
}
