import { Link } from "react-router";
import PageTemplate from "@/app/components/PageTemplate";
import { contactEmail, contactSocialLinks } from "@/content/contact";
import { routes } from "@/content/site";

export default function ContactPage() {
  return (
    <PageTemplate
      cards={[]}
      bottomRightContent={
        <div className="bottom-right-text compact-text contact-content">
          <div className="contact-section">
            <p>Something to tell me?</p>
            <p>
              Email{" "}
              <a href={`mailto:${contactEmail}`}>
                {contactEmail}
              </a>
            </p>
          </div>

          <div className="contact-section">
            <h3 className="contact-heading">Social</h3>
            {contactSocialLinks.map((group) => (
              <p key={group.label}>
                {group.label}{" "}
                <span className="contact-social-links">
                  {group.links.map((link) => (
                    <a href={link.href} target="_blank" rel="noreferrer" key={link.href}>
                      {link.label}
                    </a>
                  ))}
                </span>
              </p>
            ))}
          </div>

          <p className="contact-back">
            <Link to={routes.home}>Back</Link>
          </p>
        </div>
      }
    />
  );
}
