import SectionHeading from './SectionHeading'
import ContactLink from './ContactLink'

function ContactSection() {
  return(
    <section id="contact" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Contact" subtitle="Let's connect." />
      <ul className="mt-8 space-y-3">
        <ContactLink label="Email" href="mailto:jedreknino.delica@cit.edu" text="jedreknino.delica@cit.edu" />
        <ContactLink label="GitHub" href="https://github.com/jedrekninodelica" text="github.com/jedrekninodelica" />
        <ContactLink label="LinkedIn" href="https://linkedin.com/in/jedrekninodelica" text="linkedin.com/in/jedrekninodelica" />
      </ul>
    </section>
  )
}

export default ContactSection