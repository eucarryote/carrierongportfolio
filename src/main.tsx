
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./app/App.tsx";
import AboutPage from "./app/pages/AboutPage.tsx";
import ContactPage from "./app/pages/ContactPage.tsx";
import { OtherProjectsPage, ProjectsPage, WritingPage } from "./app/pages/GridCollectionPage.tsx";
import Archive10Page from "./app/pages/projects/Archive10Page.tsx";
import Archive1Page from "./app/pages/projects/Archive1Page.tsx";
import Archive2Page from "./app/pages/projects/Archive2Page.tsx";
import Archive3Page from "./app/pages/projects/Archive3Page.tsx";
import Archive4Page from "./app/pages/projects/Archive4Page.tsx";
import Archive5Page from "./app/pages/projects/Archive5Page.tsx";
import Archive6Page from "./app/pages/projects/Archive6Page.tsx";
import Archive7Page from "./app/pages/projects/Archive7Page.tsx";
import Archive8Page from "./app/pages/projects/Archive8Page.tsx";
import Archive9Page from "./app/pages/projects/Archive9Page.tsx";
import ArtPage from "./app/pages/projects/ArtPage.tsx";
import BearBlogPage from "./app/pages/projects/BearBlogPage.tsx";
import CommunityPage from "./app/pages/projects/CommunityPage.tsx";
import FragmeisterPage from "./app/pages/projects/FragmeisterPage.tsx";
import MusicPage from "./app/pages/projects/MusicPage.tsx";
import Pinkroom111Page from "./app/pages/projects/Pinkroom111Page.tsx";
import Pinkroom117Page from "./app/pages/projects/Pinkroom117Page.tsx";
import PlasticPage from "./app/pages/projects/PlasticPage.tsx";
import PlaygroundsPage from "./app/pages/projects/PlaygroundsPage.tsx";
import ProjectSlugPage from "./app/pages/projects/ProjectSlugPage.tsx";
import SubstackPage from "./app/pages/projects/SubstackPage.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/projects/playgrounds" element={<PlaygroundsPage />} />
      <Route path="/projects/plastic" element={<PlasticPage />} />
      <Route path="/projects/:slug" element={<ProjectSlugPage />} />
      <Route path="/projects/archive-1" element={<Archive1Page />} />
      <Route path="/projects/archive-2" element={<Archive2Page />} />
      <Route path="/projects/archive-3" element={<Archive3Page />} />
      <Route path="/projects/archive-4" element={<Archive4Page />} />
      <Route path="/projects/archive-5" element={<Archive5Page />} />
      <Route path="/projects/archive-6" element={<Archive6Page />} />
      <Route path="/projects/archive-7" element={<Archive7Page />} />
      <Route path="/projects/archive-8" element={<Archive8Page />} />
      <Route path="/projects/archive-9" element={<Archive9Page />} />
      <Route path="/projects/archive-10" element={<Archive10Page />} />
      <Route path="/other-projects" element={<OtherProjectsPage />} />
      <Route path="/other-projects/community" element={<CommunityPage />} />
      <Route path="/other-projects/music" element={<MusicPage />} />
      <Route path="/other-projects/art" element={<ArtPage />} />
      <Route path="/other-projects/writing" element={<WritingPage />} />
      <Route path="/other-projects/writing/bear-blog" element={<BearBlogPage />} />
      <Route path="/other-projects/writing/substack" element={<SubstackPage />} />
      <Route path="/other-projects/writing/pinkroom-117" element={<Pinkroom117Page />} />
      <Route path="/other-projects/writing/pinkroom-111" element={<Pinkroom111Page />} />
      <Route path="/other-projects/writing/fragmeister" element={<FragmeisterPage />} />
    </Routes>
  </BrowserRouter>,
);
  
