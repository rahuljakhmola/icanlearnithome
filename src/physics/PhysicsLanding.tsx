import { bookingUrl, siteConfig } from "./site-config";
import { courseEpisodes } from "./course-content";
import BridgeTimeline from "./BridgeTimeline";
import classroom from "./assets/classroom-readiness.png";
import visual from "./school-visual.module.css";
import ExpertProfiles from "./ExpertProfiles";
import styles from "./physics.module.css";


function PilotLink({ compact = false }: { compact?: boolean }) {
  const canBook = Boolean(bookingUrl);
  const label = canBook
    ? (compact ? "Book walkthrough" : "Book a 30-minute walkthrough")
    : (compact ? "Request walkthrough" : "Request a 30-minute walkthrough");

  return <a className={styles.pilotButton} href={bookingUrl || "#conversation"}>
    {label} <span aria-hidden="true">{canBook ? "↗" : "↓"}</span>
  </a>;
}

function CourseOutline() {
  return <details className={styles.disclosure}><summary><span>Inspect the eight-episode syllabus and capstone</span><span aria-hidden="true">+</span></summary>
    <ol className={styles.episodeList}>{courseEpisodes.map(({ title, topics }) => <li key={title}><h3>{title}</h3><p>{topics}</p></li>)}</ol>
    <p className={styles.detailNote}>A separate capstone applies these foundations to work and energy, gravitation, electrostatics, rotation and electromagnetic induction.</p>
  </details>;
}

function EpisodePreview() {
  return <aside id="episode-preview" className={styles.episodePreview} aria-labelledby="episode-preview-title">
    <div>
      <p className={styles.previewLabel}>EPISODE 1 · SAMPLE ACTIVITY</p>
      <h3 id="episode-preview-title">Can you add 3 metres and 2 seconds?</h3>
      <details className={styles.previewAnswer}>
        <summary>Reveal the reasoning <span aria-hidden="true">+</span></summary>
        <p>Metres measure length. Seconds measure time. An addition needs quantities of the same kind. Dividing 3 metres by 2 seconds, however, gives a speed of 1.5 m/s.</p>
      </details>
    </div>
    <a href="#analytics">See the teacher readiness preview ↑</a>
  </aside>;
}

export default function PhysicsLanding() {
  return <div className={styles.root}>
    <a className={styles.skipLink} href="#main-content">Skip to content</a>
    <header className={styles.header}><div className={`${styles.container} ${styles.heroContainer} ${styles.headerInner}`}>
      <a className={styles.brand} href="#top" aria-label="icanlearnit — back to top">{siteConfig.logoSrc ? <img src={siteConfig.logoSrc} alt="icanlearnit" className={styles.logo} /> : <span className={styles.brandText}>ican<span>learnit.</span></span>}<span className={styles.schoolsLabel}>Schools</span></a>
      <nav className={styles.schoolNav} aria-label="Page navigation">
        <a href="#people">Mentors</a>
        <a href="#course">Teacher Insights</a>
        <a href="#curriculum">Course Design</a>
        <a href="#pilot">Pilot Terms</a>
        <PilotLink compact />
      </nav>
    </div></header>
    <main id="main-content">
      <section id="top" className={visual.hero} aria-labelledby="hero-title">
        <div className={styles.container}>
          <div className={visual.heroHeading}>
            <div><p className={styles.eyebrow}>FOR INDIAN SCHOOLS · INCOMING CLASS 11</p>
              <h1 id="hero-title">A four-week Physics bridge<br /><span>for students entering Class 11.</span></h1>
              <p>Build the mathematical foundations to understand Physics with confidence.</p>
            </div>
            <div className={visual.heroAction}><PilotLink /><span>₹0 school pilot · ~3.5 hours/week</span></div>
          </div>
          <div className={visual.timeline}><BridgeTimeline /></div>
          <p className={visual.transitionLine}>Strong in Class 10. Ready for Class 11 Physics.</p>
        </div>
      </section>

      <section id="people" className={visual.section} aria-labelledby="people-title">
        <div className={styles.container}><p className={visual.sectionFlag}><span role="img" aria-label="India">🇮🇳</span></p><h2 id="people-title">Guided by Indian scientists and engineers across the world,</h2><p className={visual.peopleIntro}>advancing Physics, AI, clean energy and everyday technology.</p>
          <ExpertProfiles founderPortraitSrc={siteConfig.founderPortraitSrc} />
        </div>
      </section>

      <section id="course" className={`${visual.section} ${visual.analytics}`} aria-labelledby="course-title">
        <div className={`${styles.container} ${visual.imageSplit}`}>
          <div><p className={styles.eyebrow}>A CLEARER VIEW FOR TEACHERS</p><h2 id="course-title">See where students<br />need your help.</h2><p>Students learn at their own pace. Diagnostic assessments reveal the foundations that need attention.</p>
            <ul className={visual.checks}><li>Interactive lessons</li><li>Independent practice</li><li>Teacher diagnostics</li></ul>
            <PilotLink compact />
          </div>
          <figure id="analytics"><img src={classroom.src} alt="Classroom illustration comparing a student's ready foundations with another student's gaps in vectors, linear equations and differentiation." loading="lazy" /><figcaption>Illustration of readiness insights · AI-generated classroom</figcaption></figure>
        </div>
      </section>

      <section id="curriculum" className={visual.section} aria-labelledby="curriculum-title">
        <div className={styles.container}>
          <p className={styles.eyebrow}>THE COURSE DESIGN</p>
          <div className={visual.sectionHeading}><h2 id="curriculum-title">Connect the ideas.<br />Make the Physics click.</h2><p>Learn mathematical tools through physical questions, then use them across chapters.</p></div>
          <div className={visual.connection} role="img" aria-label="Rocket momentum, oscillations and magnetic induction connect through rate of change">
            <div className={visual.examples}>
              <div><span className={visual.symbol}>↗</span><strong>A rocket losing mass</strong><small>Momentum</small></div>
              <div><span className={visual.symbol}>∿</span><strong>An oscillating mass</strong><small>Motion</small></div>
              <div><span className={visual.symbol}>⟳</span><strong>A rotating loop</strong><small>Magnetic induction</small></div>
            </div>
            <div className={visual.branches}><i /><i /><i /></div>
            <div className={visual.shared}><span>One shared foundation</span><strong>Rate of change</strong><em>dy/dx</em></div>
          </div>
          <CourseOutline />
          <details className={styles.disclosure}><summary>Try a question from Episode 1 <span aria-hidden="true">+</span></summary><EpisodePreview /></details>
        </div>
      </section>

      <section id="pilot" className={`${visual.section} ${visual.pilot}`} aria-labelledby="pilot-title">
        <div className={`${styles.container} ${visual.pilotInner}`}><div><p className={styles.eyebrow}>START WITH ONE CLASS</p><h2 id="pilot-title">A stronger start.<br />A ₹0 school pilot.</h2><p>One incoming Class 11 section. Four weeks. A web browser.</p><p>Teachers share access and review diagnostic results.</p></div><div id="conversation" className={visual.booking}><p>LET’S WALK THROUGH IT</p><strong>30 minutes with Rahul</strong><span>See the course and discuss your school’s timetable.</span><PilotLink /></div></div>
      </section>
    </main>
    <footer className={styles.footer}><div className={`${styles.container} ${styles.footerInner}`}><span className={styles.brandText}>ican<span>learnit.</span></span><span>Learn. Practice. Grow.</span><a href="#top">Back to top ↑</a></div></footer>
  </div>;
}
