import { Link } from "react-router";
import PageTemplate from "@/app/components/PageTemplate";
import { aboutBodyText, aboutLinks } from "@/content/about";
import { routes } from "@/content/site";

function renderAboutText(paragraph: string) {
  return paragraph.split(/\b(poetry|writing|visual art|music|creativity|sharing|Edenspiekermann Berlin|Design Academy Eindhoven|Future Spaces Vision Lab|Innovation Design Engineering)\b/g).map((part) => {
    const href = aboutLinks[part];
    if (!href) return part;

    return (
      <a href={href} target="_blank" rel="noreferrer" key={`${part}-${href}`}>
        {part}
      </a>
    );
  });
}

export default function AboutPage() {
  const paragraphs = aboutBodyText.split("\n\n").filter(Boolean);

  return (
    <PageTemplate
      cards={[]}
      bottomRightContent={
        <div className="bottom-right-text compact-text about-content">
          <div>
            {paragraphs.map((paragraph, index) => (
              <p className="content-paragraph" key={`about-paragraph-${index}`}>
                {renderAboutText(paragraph)}
              </p>
            ))}
          </div>
          <img
            className="about-image"
            src="/images/about.webp"
            alt="Carrie Rong"
            loading="lazy"
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
          />
          <p>
            <Link to={routes.home}>Back</Link>
          </p>
          <div className="about-site-credit">
            <p>This site was made by one person with help from many computers (LLM).</p>
          </div>
        </div>
      }
    />
  );
}
