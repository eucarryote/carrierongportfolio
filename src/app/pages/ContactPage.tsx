import PageTemplate from "@/app/components/PageTemplate";
import { contactBodyText } from "@/content/contact";

export default function ContactPage() {
  function toHref(value: string): string | undefined {
    if (value.includes("@")) return `mailto:${value}`;
    if (value.startsWith("http://") || value.startsWith("https://")) return value;
    if (value.includes(".")) return `https://${value}`;
    return undefined;
  }

  const blocks = contactBodyText.split("\n\n").filter(Boolean);
  const sections = blocks.map((section) => {
    const [heading, ...rest] = section.split("\n");
    return {
      heading,
      body: rest.join("\n"),
    };
  });

  return (
    <PageTemplate
      cards={[]}
      bottomRightContent={
        <div className="bottom-right-text compact-text">
          {sections.map((section, index) => (
            <div className="contact-section" key={`contact-section-${index}`}>
              <h3 className="contact-heading">{section.heading}</h3>
              {section.body.split("\n").map((line, lineIndex) => {
                const href = toHref(line.trim());
                return (
                  <p key={`contact-line-${index}-${lineIndex}`}>
                    {href ? (
                      <a href={href} target="_blank" rel="noreferrer">
                        {line}
                      </a>
                    ) : (
                      line
                    )}
                  </p>
                );
              })}
            </div>
          ))}
        </div>
      }
    />
  );
}
