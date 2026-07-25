import Hero from '@/sections/Hero';
import LabIntro from '@/sections/LabIntro';
import FeaturedProjects from '@/sections/FeaturedProjects';
import TechDirections from '@/sections/TechDirections';
import ProjectIndex from '@/sections/ProjectIndex';
import Contact from '@/sections/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <LabIntro />
      <FeaturedProjects />
      <TechDirections />
      <ProjectIndex />
      <Contact />
    </>
  );
}
