import { ReactNode } from "react";
import { Link } from "react-router";
import type { TemplateCard } from "@/content/projects";
import { mainNavItems, routes, siteChrome } from "@/content/site";

export type TemplateNavItem = {
  label: string;
  href?: string;
  to?: string;
};

type PageTemplateProps = {
  siteTitle?: string;
  headerLeft?: string;
  headerLeftTo?: string;
  headerRight?: string;
  headerRightHref?: string;
  navItems?: readonly TemplateNavItem[];
  cards: TemplateCard[];
  cardsColumnsDesktop?: 2 | 3;
  bottomRightContent?: ReactNode;
  renderImage?: (card: TemplateCard, index: number) => ReactNode;
};

function cardColourClass(cardColour?: string): string {
  if (!cardColour) return "";
  return `card-colour-${cardColour.replace("#", "").toLowerCase()}`;
}

function cardTextColourClass(cardTextColour?: "dark" | "light"): string {
  if (!cardTextColour) return "";
  return `card-text-colour-${cardTextColour}`;
}

function CardImage({ card, priority = false }: { card: TemplateCard; priority?: boolean }) {
  const content = card.imageSrc ? (
    <img src={card.imageSrc} alt={card.imageAlt ?? card.title} loading={priority ? "eager" : "lazy"} fetchPriority={priority ? "high" : "auto"} />
  ) : null;
  const targetHref = card.imageHref ?? card.href;

  if (card.imageHref) {
    return (
      <a href={card.imageHref} target="_blank" rel="noreferrer" className="grid-item-image">
        {content}
      </a>
    );
  }

  if (card.to) {
    return (
      <Link to={card.to} className="grid-item-image">
        {content}
      </Link>
    );
  }

  if (targetHref) {
    return (
      <a href={targetHref} target="_blank" rel="noreferrer" className="grid-item-image">
        {content}
      </a>
    );
  }

  return (
    <div className="grid-item-image" aria-hidden={!card.imageSrc}>
      {content}
    </div>
  );
}

function NavLink({ item }: { item: TemplateNavItem }) {
  if (item.to) {
    return (
      <Link to={item.to} className="nav-link">
        {item.label}
      </Link>
    );
  }

  return (
    <a href={item.href ?? "#"} className="nav-link">
      {item.label}
    </a>
  );
}

function GridCard({
  card,
  index,
  renderImage,
}: {
  card: TemplateCard;
  index: number;
  renderImage?: (card: TemplateCard, index: number) => ReactNode;
}) {
  return (
    <section className={`grid-item ${cardColourClass(card.cardColour)} ${cardTextColourClass(card.cardTextColour)}`} id={card.id}>
      {renderImage ? renderImage(card, index) : <CardImage card={card} priority={index === 0} />}
      <div className="grid-item-hover-overlay" aria-hidden="true" />
      <div className="grid-item-content">
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
  );
}

export default function PageTemplate({
  siteTitle = siteChrome.title,
  headerLeft = siteChrome.headerLeft,
  headerLeftTo = siteChrome.headerLeftTo,
  headerRight = siteChrome.headerRight,
  headerRightHref = siteChrome.headerRightHref,
  navItems = mainNavItems,
  cards,
  cardsColumnsDesktop = 2,
  bottomRightContent,
  renderImage,
}: PageTemplateProps) {
  return (
    <div className="page-grid">
      <section className="grid-panel top-left">
        <h1>
          <Link to={routes.home}>{siteTitle}</Link>
        </h1>
      </section>

      <section className="grid-panel top-right">
        <div className="header">
          {headerLeftTo ? (
            <h2>
              <Link to={headerLeftTo} className="nav-link">
                {headerLeft}
              </Link>
            </h2>
          ) : (
            <h2>{headerLeft}</h2>
          )}
          <h2 className="header-right">
            {headerRightHref ? (
              <a href={headerRightHref} target="_blank" rel="noreferrer" className="nav-link">
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
            <NavLink key={item.to ?? item.href ?? item.label} item={item} />
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
                <GridCard key={card.id} card={card} index={index} renderImage={renderImage} />
              ))}
            </div>
          )}
        </div>
        <p className="bottom-right-copyright">{siteChrome.copyright}</p>
      </section>
    </div>
  );
}
