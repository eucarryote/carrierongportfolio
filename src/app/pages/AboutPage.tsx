import { Link } from "react-router";
import PageTemplate from "@/app/components/PageTemplate";
import { aboutBodyText } from "@/content/about";

export default function AboutPage() {
  const paragraphs = aboutBodyText.split("\n\n").filter(Boolean);

  return (
    <PageTemplate
      siteTitle="Carrie Rong"
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
        <div className="bottom-right-text" style={{ fontSize: "var(--font-size-copyright)" }}>
          <style>{`
            .about-image {
              width: 100%;
              max-width: 460px;
              height: auto;
              display: block;
            }

            @media (max-width: 1024px) {
              .about-image {
                max-width: 100%;
              }
            }
          `}</style>
          <div style={{ marginBottom: "80px" }}>
            {paragraphs.map((paragraph, index) => (
              <p key={`about-paragraph-${index}`} style={{ marginBottom: "1rem" }}>
                {paragraph}
              </p>
            ))}
          </div>
          <img
            className="about-image"
            src="/images/about.webp"
            alt="Carrie Rong"
            loading="lazy"
            style={{
              marginBottom: "80px",
            }}
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
          />
          <p>
            <Link to="/">Back</Link>
          </p>
        </div>
      }
    />
  );
}
