import { createRoot } from "react-dom/client";
import "./styles/fonts.css";
import "./styles/site.css";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./app/App.tsx";
import AboutPage from "./app/pages/AboutPage.tsx";
import ContactPage from "./app/pages/ContactPage.tsx";
import { OtherProjectsPage, ProjectsPage, WritingPage } from "./app/pages/GridCollectionPage.tsx";
import OtherProjectSlugPage from "./app/pages/projects/OtherProjectSlugPage.tsx";
import ProjectSlugPage from "./app/pages/projects/ProjectSlugPage.tsx";
import { routes } from "./content/site.ts";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path={routes.home} element={<App />} />
      <Route path={routes.about} element={<AboutPage />} />
      <Route path={routes.contact} element={<ContactPage />} />
      <Route path={routes.projects} element={<ProjectsPage />} />
      <Route path={`${routes.projects}/:slug`} element={<ProjectSlugPage />} />
      <Route path={routes.experiments} element={<OtherProjectsPage />} />
      <Route path={routes.writing} element={<WritingPage />} />
      <Route path={`${routes.writing}/:slug`} element={<OtherProjectSlugPage />} />
      <Route path={`${routes.experiments}/:slug`} element={<OtherProjectSlugPage />} />
    </Routes>
  </BrowserRouter>,
);
