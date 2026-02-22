import { Link } from "react-router";
import type { TemplateCard } from "@/content/projects";
import { ReactNode } from "react";

const MOBILE_BREAKPOINT_PX = 900;

export type TemplateNavItem = {
  label: string;
  href?: string;
  to?: string;
};

type ProjectTemplateProps = {
  siteTitle: string;
  headerLeft: string;
  headerLeftTo?: string;
  headerRight: string;
  headerRightHref?: string;
  navItems: TemplateNavItem[];
  cards: TemplateCard[];
  cardsColumnsDesktop?: 2 | 3;
  bottomRightContent?: ReactNode;
  renderImage?: (card: TemplateCard, index: number) => ReactNode;
};

function DefaultCardImage({ card }: { card: TemplateCard }) {
  const style = card.previewColor ? { backgroundColor: card.previewColor } : undefined;
  const content = card.imageSrc ? (
    <img src={card.imageSrc} alt={card.imageAlt ?? card.title} loading="lazy" />
  ) : null;
  const targetHref = card.imageHref ?? card.href;

  if (card.imageHref) {
    return (
      <a href={card.imageHref} target="_blank" rel="noreferrer" className="grid-item-image" style={style}>
        {content}
      </a>
    );
  }

  if (card.to) {
    return (
      <Link to={card.to} className="grid-item-image" style={style}>
        {content}
      </Link>
    );
  }

  if (targetHref) {
    return (
      <a href={targetHref} target="_blank" rel="noreferrer" className="grid-item-image" style={style}>
        {content}
      </a>
    );
  }

  return (
    <div className="grid-item-image" style={style} aria-hidden={!card.imageSrc}>
      {content}
    </div>
  );
}

function TemplateStyles() {
  return (
    <style>{`
      @font-face {
        font-family: "Rand Trial";
        src: url("/fonts/Rand-Medium-Trial.otf") format("opentype");
        font-weight: 400;
        font-style: normal;
        font-display: swap;
      }

      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body, html {
        min-height: 100%;
        font-family: "Rand Trial", system-ui, -apple-system, sans-serif;
        background: white;
        color: #382202;
        overflow-x: hidden;
      }

      :root {
        --layout-left-column-width: 300px;
        --layout-mobile-breakpoint: 900px;
        --layout-top-row-height: 100px;
        --layout-panel-padding-y: 12px;
        --layout-panel-padding-x: 20px;
        --layout-header-gap: 12px;
        --layout-cards-gap: 24px;
        --layout-cards-gap-mobile: 20px;
        --layout-site-title-size: 32px;
        --layout-section-title-size: 32px;
        --layout-section-title-size-mobile: 24px;
        --layout-nav-size: 32px;
        --layout-nav-size-mobile: 24px;
        --layout-nav-gap: 0;
      }

      .page-grid {
        min-height: 100vh;
        display: grid;
        grid-template-columns: var(--layout-left-column-width) minmax(0, 1fr);
        grid-template-rows: var(--layout-top-row-height) minmax(0, 1fr);
        grid-template-areas:
          "top-left top-right"
          "bottom-left bottom-right";
      }

      .grid-panel {
        padding: var(--layout-panel-padding-y) var(--layout-panel-padding-x);
      }

      .top-left {
        grid-area: top-left;
      }

      .top-left h1 {
        font-size: var(--layout-site-title-size);
        font-weight: bold;
        letter-spacing: -0.5px;
        line-height: 1;
      }

      .top-left h1 a {
        color: inherit;
        text-decoration: none;
      }

      .top-right {
        grid-area: top-right;
      }

      .top-right .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: var(--layout-header-gap);
      }

      .top-right h2 {
        font-size: var(--layout-section-title-size);
        font-weight: bold;
        letter-spacing: -0.5px;
      }

      .top-right .header a {
        color: inherit;
        text-decoration: none;
      }

      .bottom-left {
        grid-area: bottom-left;
        padding-top: 0;
      }

      .bottom-left nav {
        display: flex;
        flex-direction: column;
        gap: var(--layout-nav-gap);
        margin-top: 2px;
      }

      .bottom-left nav a {
        font-size: var(--layout-nav-size);
        font-weight: bold;
        text-decoration: none;
        color: #382202;
        letter-spacing: -0.5px;
        line-height: 1.3;
      }

      .bottom-right {
        grid-area: bottom-right;
        padding-top: 0;
        padding-bottom: 0;
        display: flex;
        flex-direction: column;
      }

      .bottom-right-main {
        flex: 1;
      }

      .bottom-right-copyright {
        margin-top: 80px;
        margin-bottom: 12px;
        font-family: "Times New Roman", serif;
        font-size: 24px;
        line-height: 1.2;
        text-align: left;
      }

      .cards-grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        column-gap: var(--layout-cards-gap);
        row-gap: 32px;
      }

      .cards-grid.cards-grid-3 {
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }

      .grid-item {
        display: flex;
        flex-direction: column;
        gap: 12px;
      }

      .grid-item-image {
        background: #e0e0e0;
        width: 100%;
        border-radius: 2px;
        aspect-ratio: 4 / 3;
        overflow: hidden;
      }

      .grid-item-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
      }

      .grid-item h3,
      .grid-item-title {
        font-size: 24px;
        font-weight: bold;
        letter-spacing: -0.4px;
        margin-top: 2px;
        margin-bottom: 0;
        line-height: 1.3;
      }

      .grid-item-heading {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
        gap: 12px;
      }

      .grid-item-year {
        font-size: 20px;
        font-family: "Times New Roman", serif;
        line-height: 1.2;
        white-space: nowrap;
      }

      .grid-item p,
      .grid-item a {
        font-size: 24px;
        font-family: 'Times New Roman', serif;
        line-height: 1.3;
        overflow-wrap: anywhere;
      }

      .grid-item a {
        color: #382202;
        text-decoration: underline;
      }

      .bottom-right-text {
        font-family: "Times New Roman", serif;
        font-size: 32px;
        line-height: 1.35;
        white-space: pre-wrap;
        overflow-wrap: anywhere;
        max-width: min(50%, 70ch);
      }

      .bottom-right-text a {
        color: #382202;
      }

      @media (max-width: ${MOBILE_BREAKPOINT_PX}px) {
        .page-grid {
          grid-template-columns: 1fr;
          grid-template-rows: auto auto auto auto;
          grid-template-areas:
            "top-left"
            "top-right"
            "bottom-left"
            "bottom-right";
        }

        .top-right h2 {
          font-size: var(--layout-section-title-size-mobile);
        }

        .top-right .header {
          flex-direction: column;
          align-items: flex-start;
          gap: 0;
        }

        .top-right {
          padding-bottom: 0;
        }

        .bottom-left nav a {
          font-size: var(--layout-nav-size-mobile);
        }

        .cards-grid {
          grid-template-columns: 1fr;
          row-gap: 28px;
        }

        .grid-item-image {
          aspect-ratio: 4 / 3;
        }

        .bottom-right-text {
          max-width: 100%;
        }
      }
    `}</style>
  );
}

export default function ProjectTemplate({
  siteTitle,
  headerLeft,
  headerLeftTo,
  headerRight,
  headerRightHref = "/cv/Carrie-Rong-CV.pdf",
  navItems,
  cards,
  cardsColumnsDesktop = 2,
  bottomRightContent,
  renderImage,
}: ProjectTemplateProps) {
  return (
    <>
      <TemplateStyles />
      <div className="page-grid">
        <section className="grid-panel top-left">
          <h1>
            <Link to="/">{siteTitle}</Link>
          </h1>
        </section>

        <section className="grid-panel top-right">
          <div className="header">
            {headerLeftTo ? (
              <h2>
                <Link to={headerLeftTo}>{headerLeft}</Link>
              </h2>
            ) : (
              <h2>{headerLeft}</h2>
            )}
            <h2>
              {headerRightHref ? (
                <a href={headerRightHref} target="_blank" rel="noreferrer">
                  {headerRight}
                </a>
              ) : (
                headerRight
              )}
            </h2>
          </div>
        </section>

        <section className="grid-panel bottom-left">
          <nav>
            {navItems.map((item) => (
              item.to ? (
                <Link key={item.to} to={item.to}>
                  {item.label}
                </Link>
              ) : (
                <a key={item.href ?? item.label} href={item.href ?? "#"}>
                  {item.label}
                </a>
              )
            ))}
          </nav>
        </section>

        <section className="grid-panel bottom-right">
          <div className="bottom-right-main">
            {bottomRightContent ? (
              bottomRightContent
            ) : (
              <div className={`cards-grid ${cardsColumnsDesktop === 3 ? "cards-grid-3" : ""}`}>
                {cards.map((card, index) => (
                  <section className="grid-item" id={card.id} key={card.id}>
                    {renderImage ? renderImage(card, index) : <DefaultCardImage card={card} />}
                    <div>
                      <div className="grid-item-heading">
                        <h3>{card.title}</h3>
                        {card.year ? <span className="grid-item-year">{card.year}</span> : null}
                      </div>
                      {card.href ? (
                        <p>
                          <a href={card.href} target="_blank" rel="noreferrer">
                            {card.body}
                          </a>
                        </p>
                      ) : (
                        <p>{card.body}</p>
                      )}
                    </div>
                  </section>
                ))}
              </div>
            )}
          </div>
          <p className="bottom-right-copyright">© Carrie Rong 2026</p>
        </section>
      </div>
    </>
  );
}
