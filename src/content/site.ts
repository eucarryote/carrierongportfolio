export const routes = {
  home: "/",
  about: "/about",
  contact: "/contact",
  projects: "/projects",
  experiments: "/experiments",
  writing: "/experiments/writing",
  cv: "/cv/Carrie-Rong-CV.pdf",
} as const;

export const siteChrome = {
  title: "Carrie Rong",
  headerLeft: "About",
  headerLeftTo: routes.about,
  headerRight: "CV",
  headerRightHref: routes.cv,
  copyright: "© Carrie Rong 2026",
} as const;

export const mainNavItems = [
  { label: "Projects", to: routes.projects },
  { label: "Experiments", to: routes.experiments },
  { label: "Contact", to: routes.contact },
] as const;
