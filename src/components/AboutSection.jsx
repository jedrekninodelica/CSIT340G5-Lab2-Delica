import SectionHeading from "./SectionHeading"
import Fact from "./Fact"

function AboutSection(){
    return(
        <section id="about" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
        <SectionHeading title="About" subtitle="A little about who I am." />
        <p className="mt-6 max-w-2xl leading-relaxed text-stone-700">
            I am from Minglanilla, Cebu. I took IT since I know this field is broad and the opportunities are vast.
            Getting an inside look of the systems I use day-to-day is what I find interesting. I am currently a third year student at CIT-U taking up BS Information Technology.
        </p>
        <dl className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
            <Fact label="Course" value="BS Information Technology" />
            <Fact label="Year Level" value="Third year" />
            <Fact label="School" value="CIT-U" />
            <Fact label="Based in" value="Cebu" />
        </dl>
        </section>
    )
}

export default AboutSection