import SectionHeading from './SectionHeading'
import ProjectCard from './ProjectCard'

function ProjectsSection(){
  return(
    <section id="projects" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Projects" subtitle="Things I have built." />
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <ProjectCard
          year="2026"
          title="About Me in React"
          description="My first React project, rebuilt from a plain HTML page."
          tech="React · Tailwind CSS"
          link="https://github.com/jedrekninodelica/CSIT340-Lab1-Delica"
        />
        <ProjectCard
          year="2026"
          title="BaonBuddy"
          description="An allowance tracker for Filipino students, built for my Android class."
          tech="Android · SharedPreferences"
          link="https://github.com/jedrekninodelica/BaonBuddy"
        />
        <ProjectCard
          year="2026"
          title="UNA"
          description="A smart remiinders app for students that shows only the one task to focus on, instead of the whole list."
          tech="SQLite · Google Tasks API"
          link="TBA"
        />
        <ProjectCard
          year="2025"
          title="INCORRUPTIBLE"
          description="My first OOP project, a simple text-based RPG game built in Java."
          tech="Java"
          link="https://github.com/jedrekninodelica/INCORRUPTIBLEv3"
        />
      </div>
    </section>
  )
}

export default ProjectsSection