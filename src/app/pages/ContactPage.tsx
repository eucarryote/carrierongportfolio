import ProjectTemplate from "@/app/components/ProjectTemplate";
import { contactBodyText } from "@/content/contact";

export default function ContactPage() {
  function toHref(value: string): string | undefined {
    if (value.includes("@")) return `mailto:${value}`;
    if (value.startsWith("http://") || value.startsWith("https://")) return value;
    if (value.includes(".")) return `https://${value}`;
    return undefined;
  }

  const blocks = contactBodyText.split("\n\n").filter(Boolean);
  const intro = blocks[0] ?? "";
  const sections = blocks.slice(1).map((section) => {
    const [heading, ...rest] = section.split("\n");
    return {
      heading,
      body: rest.join("\n"),
    };
  });

  return (
    <ProjectTemplate
      siteTitle="Carrie Rong Portfolio"
      headerLeft="About"
      headerLeftTo="/about"
      headerRight="CV"
      navItems={[
        { label: "Projects", to: "/projects" },
        { label: "Other Projects", to: "/other-projects" },
        { label: "Contact", to: "/contact" },
      ]}
      cards={[]}
      bottomRightContent={
        <div className="bottom-right-text">
          {intro ? <p style={{ marginBottom: "1rem" }}>{intro}</p> : null}
          {sections.map((section, index) => (
            <div key={`contact-section-${index}`} style={{ marginBottom: "1rem" }}>
              <h3
                style={{
                  fontFamily: '"Rand Trial", system-ui, -apple-system, sans-serif',
                  fontSize: "32px",
                  fontWeight: 700,
                  lineHeight: 1.2,
                  marginBottom: "0.25rem",
                }}
              >
                {section.heading}
              </h3>
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
