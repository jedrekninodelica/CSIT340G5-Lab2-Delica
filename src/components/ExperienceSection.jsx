import SectionHeading from './SectionHeading'
import TimelineItem from './TimelineItem'

function ExperienceSection() {
  return(
    <section id="experience" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Experience" subtitle="Where I have learned and worked." />
      <ol className="mt-8 space-y-8 border-l border-stone-200">
        <TimelineItem
          period="2024 – Present"
          title="BS Information Technology"
          place="Cebu Institute of Technology – University"
          description="Taking up web development, databases, and systems analysis."
        />
        <TimelineItem
          period="2022 – 2024"
          title="Senior High School, STEM Strand"
          place="Mary Help of Christians School (Cebu), Inc."
          description="Underwent work immersion at the local IT government office of the City of Naga, Cebu. Updated and refreshed icons on the website."
        />
      <TimelineItem
          period="2022 – 2024"
          title="Junior High School"
          place="Mary Help of Christians School (Cebu), Inc."
          description="Underwent work immersion at the local IT government office of the City of Naga, Cebu. Updated and refreshed icons on the website."
        />
      </ol>
    </section>
  )
}
export default ExperienceSection