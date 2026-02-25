import { createRoot } from "react-dom/client";
import "./styles/fonts.css";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./app/App.tsx";
import AboutPage from "./app/pages/AboutPage.tsx";
import ContactPage from "./app/pages/ContactPage.tsx";
import { OtherProjectsPage, ProjectsPage, WritingPage } from "./app/pages/GridCollectionPage.tsx";
import Archive10Page from "./app/pages/projects/Archive10Page.tsx";
import Archive9Page from "./app/pages/projects/Archive9Page.tsx";
import ArtPage from "./app/pages/projects/ArtPage.tsx";
import BearBlogPage from "./app/pages/projects/BearBlogPage.tsx";
import CariadPage from "./app/pages/projects/CariadPage.tsx";
import CommunityPage from "./app/pages/projects/CommunityPage.tsx";
import EnlevePage from "./app/pages/projects/EnlevePage.tsx";
import FragmeisterPage from "./app/pages/projects/FragmeisterPage.tsx";
import FromNowToNowPage from "./app/pages/projects/FromNowToNowPage.tsx";
import HuaweiMagicPage from "./app/pages/projects/HuaweiMagicPage.tsx";
import MusicPage from "./app/pages/projects/MusicPage.tsx";
import NuroPage from "./app/pages/projects/NuroPage.tsx";
import OnsemblePage from "./app/pages/projects/OnsemblePage.tsx";
import Pinkroom111Page from "./app/pages/projects/Pinkroom111Page.tsx";
import Pinkroom117Page from "./app/pages/projects/Pinkroom117Page.tsx";
import PlasticPage from "./app/pages/projects/PlasticPage.tsx";
import PlaygroundsPage from "./app/pages/projects/PlaygroundsPage.tsx";
import ProjectSlugPage from "./app/pages/projects/ProjectSlugPage.tsx";
import SlingshotPage from "./app/pages/projects/SlingshotPage.tsx";
import SubstackPage from "./app/pages/projects/SubstackPage.tsx";
import TheBrainColouringBookPage from "./app/pages/projects/TheBrainColouringBookPage.tsx";

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
      <Route path="/projects/enlève" element={<EnlevePage />} />
      <Route path="/projects/huaweimagic" element={<HuaweiMagicPage />} />
      <Route path="/projects/cariad" element={<CariadPage />} />
      <Route path="/projects/from-now-to-now" element={<FromNowToNowPage />} />
      <Route path="/projects/slingshot" element={<SlingshotPage />} />
      <Route path="/projects/onsemble" element={<OnsemblePage />} />
      <Route path="/projects/thebraincolouringbook" element={<TheBrainColouringBookPage />} />
      <Route path="/projects/nuro" element={<NuroPage />} />
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
  
