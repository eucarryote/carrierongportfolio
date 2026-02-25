import PageTemplate, { TemplateNavItem } from "@/app/components/PageTemplate";
import { previewColorsBySlug } from "@/content/projects";

export default function Pinkroom117Page() {
  const pinkroomPreviewColor = previewColorsBySlug["pinkroom-117"] ?? "#eecdd6ff";
  const navItems: TemplateNavItem[] = [
    { label: "Projects", to: "/projects" },
    { label: "Other Projects", to: "/other-projects" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <PageTemplate
      siteTitle="Carrie Rong"
      headerLeft="About"
      headerLeftTo="/about"
      headerRight="CV"
      navItems={navItems}
      cards={[]}
      bottomRightContent={
        <div style={{ width: "100%" }}>
          <style>{`
            .pinkroom-detail {
              --pinkroom-gap: 32px;
            }
            .pinkroom-hero {
              width: calc((100% - 24px) / 2);
              aspect-ratio: 4 / 3;
              border-radius: 4px;
              margin-bottom: 1.5rem;
            }
            .pinkroom-title {
              font-family: "Rand Bold Trial", system-ui, -apple-system, sans-serif;
              font-size: var(--project-page-title-size, 32px);
              font-weight: 700;
              line-height: 1.15;
              margin: 0 0 12px 0;
            }
            .pinkroom-copy,
            .pinkroom-link {
              font-family: "Times New Roman", serif;
              font-size: var(--project-card-copy-size, 24px);
              line-height: 1.35;
            }
            .pinkroom-copy {
              max-width: min(70%, 70ch);
            }
            .pinkroom-links {
              margin-top: var(--pinkroom-gap);
              display: flex;
              flex-direction: column;
              gap: 12px;
            }
            .pinkroom-link a {
              color: #382202;
            }
            @media (max-width: 1024px) {
              .pinkroom-hero {
                width: 100%;
              }
              .pinkroom-copy {
                max-width: 70%;
              }
            }
            @media (max-width: 900px) {
              .pinkroom-copy {
                max-width: 100%;
              }
            }
            @media (max-width: 768px) {
              .pinkroom-title {
                font-size: 24px;
              }
            }
            @media (max-width: 425px) {
              .pinkroom-title,
              .pinkroom-copy,
              .pinkroom-link {
                font-size: 20px;
              }
            }
          `}</style>
          <section className="pinkroom-detail">
            <div
              className="pinkroom-hero"
              style={{ backgroundColor: pinkroomPreviewColor }}
              aria-label="Pinkroom cover color block"
            />
            <h2 className="pinkroom-title">Pinkroom</h2>
            <p className="pinkroom-copy">
              From the Pinkroom is the official newsletter for the double masters Innovation Design Engineering
              program. Circulated biweekly, the readership includes staff, students, and alumni of the program.
            </p>
            <div className="pinkroom-links">
              <p className="pinkroom-link">
                <a
                  href="https://mailchi.mp/2f14c22734c9/from-the-pink-room-13878026?e=ab89eaa6b8#:~:text=IDE%201%0AThe,IDE1%2C%C2%A0%20Carrie%20Rong"
                  target="_blank"
                  rel="noreferrer"
                >
                  Pinkroom #109
                </a>
              </p>
              <p className="pinkroom-link">
                <a
                  href="https://mailchi.mp/7a4ff87f3f1e/from-the-pink-room-13881394?e=4fb450b3b1#:~:text=what%20is%20innovation,Carrie%20Rong%20IDE1"
                  target="_blank"
                  rel="noreferrer"
                >
                  Pinkroom #117
                </a>
              </p>
            </div>
          </section>
        </div>
      }
    />
  );
}
