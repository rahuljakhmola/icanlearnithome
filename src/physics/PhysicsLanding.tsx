import { bookingUrl, siteConfig } from "./site-config";
import { courseEpisodes, schoolFaqs } from "./course-content";
import CourseConnections from "./CourseConnections";
import RateOfChange from "./RateOfChange";
import CurriculumMap from "./CurriculumMap";
import AffiliationLogos from "./AffiliationLogos";
import ExpertProfiles from "./ExpertProfiles";
import classroomImage from "./assets/classroom-generated.png";
import styles from "./physics.module.css";

const physicsSyllabus = "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/Physics_SecP2_2026-27.pdf";
const mathsSyllabus = "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/Maths_SecP2_2026-27.pdf";

function CommunityLine() {
  return <p className={styles.communityLine}>
    <svg className={styles.indianFlag} viewBox="0 0 30 20" role="img" aria-label="India">
      <rect width="30" height="20" fill="#fff" />
      <path d="M0 0h30v6.667H0z" fill="#ff9933" />
      <path d="M0 13.333h30V20H0z" fill="#138808" />
      <circle cx="15" cy="10" r="2.8" fill="none" stroke="#000080" strokeWidth=".35" />
      {Array.from({ length: 24 }, (_, i) => <line key={i} x1="15" y1="10" x2={15 + 2.8 * Math.cos(i * Math.PI / 12)} y2={10 + 2.8 * Math.sin(i * Math.PI / 12)} stroke="#000080" strokeWidth=".16" />)}
      <circle cx="15" cy="10" r=".45" fill="#000080" />
    </svg>
    <span>Leading Indian scientists and engineers across the globe, helping the next generation back home.</span>
  </p>;
}

function Arrow() { return <span aria-hidden="true">↗</span>; }
function InvitationLink() {
  return <a className={styles.quietLink} href={bookingUrl || "#conversation"}
    {...(bookingUrl ? { target: "_blank", rel: "noopener noreferrer" } : {})}>Be part of shaping the course <Arrow /></a>;
}

function CourseOutline() {
  return <details className={styles.disclosure}><summary><span>Explore the eight course episodes</span><span aria-hidden="true">+</span></summary>
    <ol className={styles.episodeList}>{courseEpisodes.map(({ title, topics }) => <li key={title}><h3>{title}</h3><p>{topics}</p></li>)}</ol>
    <p className={styles.detailNote}>A separate capstone applies these foundations to work and energy, gravitation, electrostatics, rotation and electromagnetic induction.</p>
  </details>;
}

function CourseCover() {
  return <figure className={styles.classroom}><img src={classroomImage.src} width={classroomImage.width} height={classroomImage.height} alt="Illustration of Indian students in school uniform learning Physics with a teacher in a sunlit classroom" /><span className={styles.imageBrand}>ican<span>learnit.</span></span><figcaption>Physics Bridge Course · Class 10 → 11 · One month<span>AI-generated classroom illustration</span></figcaption></figure>;
}

export default function PhysicsLanding() {
  return <div className={styles.root}>
    <a className={styles.skipLink} href="#main-content">Skip to content</a>
    <header className={styles.header}><div className={`${styles.container} ${styles.headerInner}`}>
      <a className={styles.brand} href="#top" aria-label="icanlearnit — back to top">{siteConfig.logoSrc ? <img src={siteConfig.logoSrc} alt="icanlearnit" className={styles.logo} /> : <span className={styles.brandText}>ican<span>learnit.</span></span>}</a>
      <nav className={styles.nav} aria-label="Page navigation"><a href="#course">Course</a><a href="#connections">Approach</a><a href="#people">People</a></nav>
    </div></header>
    <main id="main-content">
      <section id="top" className={styles.hero} aria-labelledby="hero-title"><div className={styles.container}>
        <div className={styles.heroGrid}><div className={styles.heroCopy}>
          <p className={styles.eyebrow}>FOR INDIAN SCHOOL LEADERS & PHYSICS EDUCATORS</p>
          <h1 id="hero-title"><span className={styles.headlineSetup}>Students do great in Class 10.</span><span className={styles.headlineFocus}>Why does Class 11 Physics feel unfamiliar?</span></h1>
          <p>A <strong>one-month Physics bridge course</strong> from US-based icanlearnit, helping students build <strong>confidence, clarity and enthusiasm</strong>—and connect school learning with the reasoning used in competitive exams.</p>
          <div className={styles.heroExpertise}><CommunityLine /><AffiliationLogos /></div>
          <InvitationLink />
        </div><CourseCover /></div>
        <div className={styles.heroFoot}><span>Learn. Practice. Grow.</span><a href="#curriculum">See how the ideas connect <span aria-hidden="true">↓</span></a></div>
      </div></section>

      <section id="curriculum" className={`${styles.section} ${styles.whiteSection}`} aria-labelledby="curriculum-title"><div className={styles.container}>
        <div className={styles.sectionIntro}><p className={styles.eyebrow}>01 / THE CURRICULUM CONNECTION</p><h2 id="curriculum-title">A simple Physics question.<br />Several mathematical tools.</h2><p>Understanding the question means understanding the mathematics behind it. These tools develop across different chapters and school years.</p></div>
        <CurriculumMap />
        <div className={styles.sourceLine}><p>Physics introduces these tools too. The course gives students time to explore their meaning and connections.</p><p><a href={physicsSyllabus} target="_blank" rel="noopener noreferrer">CBSE Physics 2026–27 ↗</a> · <a href={mathsSyllabus} target="_blank" rel="noopener noreferrer">Mathematics ↗</a><br />Classroom teaching order varies by school.</p></div>
      </div></section>

      <section id="connections" className={`${styles.section} ${styles.capstoneSection}`} aria-labelledby="connections-title"><div className={styles.container}>
        <div className={styles.sectionIntro}><p className={styles.eyebrow}>02 / THE SHARED FOUNDATIONS</p><h2 id="connections-title">Different chapters.<br />The same underlying idea.</h2><p>Three questions from the capstone look different. Trace them back and the same idea appears: <strong>rate of change.</strong></p></div>
        <RateOfChange />
      </div></section>

      <section id="course" className={`${styles.section} ${styles.graphSection}`} aria-labelledby="course-title"><div className={styles.container}>
        <div className={styles.sectionIntro}><p className={styles.eyebrow}>03 / THE COURSE JOURNEY</p><h2 id="course-title">Our course brings these ideas together<br />through physical questions.</h2><p>Measurement, graphs, functions, sequences, calculus, trigonometry and vectors develop and reconnect throughout the course.</p></div>
        <CourseConnections />
        <div className={styles.teachingApproach}><div><h3>Build the reasoning.</h3><p>Worked examples, guided questions and independent practice help students build the reasoning themselves.</p></div><div><h3>Follow the progress.</h3><p>Diagnostic assessments identify gaps, while the supporting platform organizes coursework and helps teachers follow progress and homework completion.</p></div></div>
        <CourseOutline />
      </div></section>

      <section id="people" className={`${styles.section} ${styles.peopleSection}`} aria-labelledby="people-title"><div className={styles.container}>
        <div className={styles.sectionIntro}><p className={styles.eyebrow}>04 / THE POSSIBILITIES</p><h2 id="people-title">See what these foundations<br />make possible.</h2><p>“Why should I study this?” Professionals share actual applications from Physics research, AI and technology, helping students see why these ideas are worth studying.</p></div>
        <div className={styles.expertPanel}><CommunityLine /><AffiliationLogos /><p className={styles.affiliationNote}>Individual professional affiliations.</p></div>
        <ExpertProfiles founderPortraitSrc={siteConfig.founderPortraitSrc} />
      </div></section>

      <section id="pilot" className={`${styles.section} ${styles.closingSection}`} aria-labelledby="pilot-title"><div className={styles.container}>
        <p className={styles.eyebrow}>05 / THE CONFIDENCE</p><h2 id="pilot-title">Stronger understanding<br />to bring into school lessons.</h2><p className={styles.outcome}>Our aim is to help students return to school lessons with stronger understanding, greater confidence and less dependence on additional tuition.</p>
        <div id="conversation" className={styles.invitation}><p>We’re inviting educators to help shape the course around the needs of students and teachers through a no-cost school pilot.</p>
          {bookingUrl ? <><InvitationLink /><p className={styles.bookingNote}>A 30-minute conversation with our team. Opens our booking calendar.</p></> : <details className={styles.bookingDetails}><summary>Be part of shaping the course <Arrow /></summary><p>A 30-minute conversation to share your thoughts and discuss the pilot. Our meeting calendar will be added here soon. If you received our invitation email, reply “Yes” to arrange a conversation.</p>{siteConfig.contactEmail && <a href={`mailto:${siteConfig.contactEmail}`}>Contact our team ↗</a>}</details>}
        </div>
        <details className={`${styles.disclosure} ${styles.faqDisclosure}`}><summary><span>Practical questions about the pilot</span><span aria-hidden="true">+</span></summary><div className={styles.faqList}>{schoolFaqs.map(faq => <details key={faq.question} className={styles.faq}><summary>{faq.question}<span aria-hidden="true">+</span></summary><p>{faq.answer}</p></details>)}</div></details>
      </div></section>
    </main>
    <footer className={styles.footer}><div className={`${styles.container} ${styles.footerInner}`}><span className={styles.brandText}>ican<span>learnit.</span></span><span>Learn. Practice. Grow.</span><a href="#top">Back to top ↑</a></div></footer>
  </div>;
}
