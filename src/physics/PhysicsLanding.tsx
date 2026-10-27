import type { CSSProperties } from "react";
import { bookingUrl, siteConfig } from "./site-config";
import { courseEpisodes, positionData, schoolFaqs } from "./course-content";
import styles from "./physics.module.css";

const affiliations = ["Max Planck Institute for Nuclear Physics", "Amazon", "Google", "Meta", "Spotify", "NVIDIA"];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true">{diagonal ? "↗" : "→"}</span>;
}

function BookingAction({ compact = false }: { compact?: boolean }) {
  return (
    <a className={styles.button} href={bookingUrl || "#conversation"}
      aria-label={compact ? "Book a 30-minute conversation" : undefined}
      {...(bookingUrl ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
      {compact ? "Book a meeting" : "Book a 30-minute conversation"}
      <Arrow diagonal={Boolean(bookingUrl)} />
    </a>
  );
}

/** Static diagram of the supplied robot exercise: x(t) = 5 + 4t. */
function ConnectionIllustration() {
  const px = (time: number) => 62 + time * (320 / 6);
  const py = (position: number) => 232 - position * 6;
  return (
    <figure className={styles.figure} aria-labelledby="connection-caption">
      <div className={styles.figureHeading}><span className={styles.smallLabel}>AN EXAMPLE FROM THE COURSE</span><span className={styles.figureNumber}>POSITION / TIME</span></div>
      <div className={styles.graphLabels}><span>Calculate the<br /><strong>Slope of a line</strong></span><span className={styles.connectionArrow} aria-hidden="true">→</span><span>Connect it to<br /><strong>Velocity</strong></span></div>
      <svg className={styles.graph} viewBox="0 0 480 285" role="img" aria-label="Robot position versus time. At zero, two, four, and six seconds, its positions are five, thirteen, twenty-one, and twenty-nine metres. The line starts at five metres. Its slope is four metres per second.">
        <g stroke="#E2E0D9" strokeWidth="0.8" fill="none">{positionData.map(({ time, position }) => <path key={time} d={`M62 ${py(position)}H402 M${px(time)} 32V232`} />)}</g>
        <path d="M62 22V232H430" fill="none" stroke="#182337" strokeWidth="1.5" />
        <path d="M58 28L62 22L66 28M424 228L430 232L424 236" fill="none" stroke="#182337" strokeWidth="1.5" />
        <path d={`M${px(0)} ${py(5)}L${px(6)} ${py(29)}`} stroke="#D94B40" strokeWidth="3.5" fill="none" />
        <path d={`M${px(2)} ${py(13)}H${px(4)}V${py(21)}`} stroke="#697386" strokeWidth="1.2" strokeDasharray="4 5" fill="none" />
        {positionData.map(({ time, position }) => <g key={time}><circle cx={px(time)} cy={py(position)} r="4" fill="#D94B40" /><text x={px(time)} y="252" textAnchor="middle" fill="#697386" fontSize="11">{time}</text><text x="48" y={py(position) + 4} textAnchor="end" fill="#697386" fontSize="11">{position}</text></g>)}
        <text x="190" y="177" fill="#697386" fontSize="12">Δt = 2 s</text><text x="285" y="136" fill="#697386" fontSize="12">Δx = 8 m</text>
        <text x="48" y="236" textAnchor="end" fill="#697386" fontSize="11">0</text><text x="359" y="276" fill="#697386" fontSize="11">Time (s)</text>
        <text transform="translate(19 149) rotate(-90)" fill="#697386" fontSize="11">Position (m)</text>
        <rect x="85" y="42" width="133" height="29" rx="3" fill="#F8F7F2" /><text x="97" y="61" fill="#182337" fontSize="12">slope = 4 m/s</text>
      </svg>
      <figcaption id="connection-caption" className={styles.figureCaption}><span className={styles.smallLabel}>FROM POSITION DATA TO VELOCITY</span><strong>What does the slope tell us?</strong><p>The robot’s position changes by 8 metres in each 2-second interval. Students calculate velocity, then connect it to the graph’s slope.</p></figcaption>
      <div className={styles.figureFooter}><span>POSITION DATA</span><span aria-hidden="true">→</span><span>GRAPH SLOPE</span><span aria-hidden="true">→</span><span>VELOCITY</span></div>
    </figure>
  );
}

function CourseOutline() {
  return (
    <details className={styles.courseOutline}>
      <summary><span>View the course outline<span className={styles.outlineHint}>Eight episodes and a capstone chapter</span></span><span className={styles.faqIcon} aria-hidden="true">+</span></summary>
      <ol className={styles.episodeList}>{courseEpisodes.map(({ title, topics }) => <li key={title}><h3>{title}</h3><p>{topics}</p></li>)}</ol>
      <div className={styles.capstoneNote}><h3>Capstone applications</h3><p>A separate chapter applies these tools to further Physics problems, including momentum, work and energy, gravitation, and electromagnetism.</p></div>
    </details>
  );
}

export default function PhysicsLanding() {
  const rootStyle = { "--icl-scroll-margin": "6rem" } as CSSProperties;
  return (
    <div className={styles.root} style={rootStyle}>
      <a className={styles.skipLink} href="#main-content">Skip to content</a>
      <header className={styles.header}><div className={`${styles.container} ${styles.headerInner}`}>
        <a className={styles.brand} href="#top" aria-label="icanlearnit — back to top">{siteConfig.logoSrc ? <img src={siteConfig.logoSrc} alt="icanlearnit" className={styles.logo} /> : <span className={styles.brandText}>icanlearnit<span className={styles.brandPeriod}>.</span></span>}</a>
        <nav className={styles.nav} aria-label="Page navigation"><a href="#example">Teaching example</a><a href="#course">Course outline</a><a href="#pilot">School pilot</a></nav><BookingAction compact />
      </div></header>

      <main id="main-content">
        <section id="top" className={styles.hero} aria-labelledby="hero-title">
          <div className={`${styles.container} ${styles.heroGrid}`}><div className={styles.heroCopy}>
            <p className={styles.eyebrow}><span className={styles.dot} /> FOR SCHOOLS · CLASS 10 → 11</p>
            <h1 id="hero-title">A stronger start to <span>Class 11 Physics.</span></h1>
            <p className={styles.heroDescription}>A one-month Physics bridge course for students moving from Class 10 to Class 11.</p>
            <p className={styles.heroInvitation}>We are inviting school leaders and Physics teachers to review the approach and discuss a no-cost school pilot.</p>
            <div className={styles.heroActions}><BookingAction /><a className={styles.textLink} href="#example">See an example from the course <span aria-hidden="true">↓</span></a></div>
            <div className={styles.heroMeta}><span>One month</span><span>No-cost school pilot</span><span>Professional feedback welcome</span></div>
          </div><ConnectionIllustration /></div>
          <div className={`${styles.container} ${styles.heroBottom}`}><span>LEARN. PRACTICE. GROW.</span><span>Physics Bridge Course · School invitation</span></div>
        </section>

        <section id="example" className={`${styles.section} ${styles.problem}`} aria-labelledby="example-title">
          <div className={`${styles.container} ${styles.exampleGrid}`}><div className={styles.exampleIntro}>
            <p className={styles.eyebrow}>01 — HOW A LESSON DEVELOPS</p><h2 id="example-title">Connecting a table,<br />a graph, and velocity.</h2>
            <p className={styles.exampleDescription}>Many students enter Class 11 knowing formulas but struggle to apply them to unfamiliar problems. This exercise asks them to connect a calculation with its graph and physical meaning.</p>
            <div className={styles.meaningCheck}><span className={styles.smallLabel}>A QUESTION FROM THE COURSE</span><blockquote>“What does 4 m/s mean here?”</blockquote><p>“Position changes by 4 m for every second.”</p><span className={styles.checkCaption}>Alongside calculations, the course asks students to explain what their results mean.</span></div>
          </div><div className={styles.lessonSheet}>
            <div className={styles.lessonSheetHeading}><span className={styles.smallLabel}>WORKED EXAMPLE</span><span className={styles.lessonReference}>Position → velocity</span></div>
            <p>A robot moves along a straight track. Its position is recorded every two seconds.</p>
            <table className={styles.positionTable}><caption>Position data from the course exercise</caption><tbody><tr><th scope="row">Time (s)</th>{positionData.map(({ time }) => <td key={time}>{time}</td>)}</tr><tr><th scope="row">Position (m)</th>{positionData.map(({ time, position }) => <td key={time}>{position}</td>)}</tr></tbody></table>
            <ol className={styles.lessonSteps}><li><span>Find the change in position.</span><strong>13 − 5 = 8 m</strong></li><li><span>Find the time interval.</span><strong>2 − 0 = 2 s</strong></li><li><span>Calculate velocity over the interval.</span><strong>8 ÷ 2 = 4 m/s</strong></li><li><span>Calculate graph slope and compare.</span><strong>The same rate of change.</strong></li></ol>
            <p className={styles.sheetNote}>The questions work through each step before asking students how slope and velocity are connected.</p>
          </div></div>
        </section>

        <section id="course" className={`${styles.section} ${styles.approach}`} aria-labelledby="course-title">
          <div className={styles.container}>
            <div className={styles.sectionIntro}><div><p className={styles.eyebrow}>02 — COURSE CONTENT AND PRACTICE</p><h2 id="course-title">What students work on.</h2></div><p>Units and measurement, vectors, graphs, functions, differentiation, integration, trigonometry, and two-dimensional motion.</p></div>
            <div className={styles.steps}><article><span className={styles.stepNumber}>EXPLANATION</span><h3>Worked examples</h3><p>Calculations are developed step by step, with questions about the quantities and relationships involved.</p></article><article><span className={styles.stepNumber}>PRACTICE</span><h3>Independent questions</h3><p>Students apply the ideas themselves through numerical problems, predictions, and chapter assessments.</p></article><article><span className={styles.stepNumber}>UNDERSTANDING</span><h3>Checks of meaning</h3><p>Questions ask why a method works, what a result means, and how it relates to the physical situation.</p></article></div>
            <CourseOutline /><p className={styles.activityNote}><span className={styles.smallLabel}>ANOTHER COURSE ACTIVITY</span>Students watch a rocket launch, record its altitude at 20-second intervals, and plot its motion.</p>
          </div>
        </section>

        <section id="pilot" className={`${styles.section} ${styles.benefits}`} aria-labelledby="pilot-title">
          <div className={styles.container}><div className={styles.pilotGrid}><div>
            <p className={styles.eyebrow}>03 — AN INVITATION TO SCHOOLS</p><h2 id="pilot-title">The one-month<br />school pilot.</h2>
            <p className={styles.pilotDescription}>We would value your feedback on the learning approach and how the course could support your school.</p>
            <p className={styles.pilotDescription}>Our aim is to strengthen learning at school so students can build confidence with less dependence on additional tuition and less pressure on their study time.</p>
          </div><div className={styles.pilotSheet}>
            <div className={styles.pilotSheetTop}><span className={styles.smallLabel}>PHYSICS BRIDGE PILOT</span><span className={styles.pilotBadge}>For schools</span></div>
            <dl className={styles.facts}><div><dt>Students</dt><dd>Moving from Class 10 to Class 11</dd></div><div><dt>Duration</dt><dd>One month</dd></div><div><dt>Cost</dt><dd>No cost to participating schools</dd></div><div><dt>Feedback on</dt><dd>The course and its supporting platform</dd></div></dl>
            <p className={styles.sheetNote}>We’ll discuss curriculum fit, delivery, student commitment, and teacher involvement in the introductory conversation.</p>
          </div></div>
          <div className={styles.benefitsGrid}><article className={styles.benefitPanel}><span className={styles.audienceLabel}><span className={styles.dot} /> FOR STUDENTS</span><h3>Coursework and practice</h3><ul><li>Diagnostic assessments.</li><li>Guided problem-solving and expert interactions.</li><li>Organized access to coursework and practice.</li></ul></article><article className={styles.benefitPanel}><span className={styles.audienceLabel}><span className={`${styles.dot} ${styles.blueDot}`} /> FOR TEACHERS</span><h3>Visibility into progress</h3><ul><li>Monitor individual student progress.</li><li>Identify learning gaps that need attention.</li><li>Track homework completion within the course.</li></ul></article></div>
          </div>
        </section>

        <section id="people" className={`${styles.section} ${styles.people}`} aria-labelledby="people-title">
          <div className={styles.container}>
            <div className={styles.sectionIntro}><div><p className={styles.eyebrow}>04 — FOUNDER AND MENTORS</p><h2 id="people-title">Who is behind<br />icanlearnit.</h2></div><p>icanlearnit is a US-based ed-tech startup focused on making difficult Physics understandable through connections students already know.</p></div>
            <div className={styles.founder}>{siteConfig.founderPortraitSrc && <img className={styles.portrait} src={siteConfig.founderPortraitSrc} alt="Rahul Jakhmola, founder of icanlearnit" width="144" height="144" />}<div className={styles.founderName}><span className={styles.smallLabel}>FOUNDER</span><h3>Rahul Jakhmola</h3><span className={styles.founderLocation}>Texas, USA</span></div><p>Rahul has designed learning systems for Maruti Suzuki and Amazon’s global teams and researches AI in education in Texas, USA.</p></div>
            <div className={styles.mentors}><p>The course features mentorship from Indian professionals associated with:</p><ul>{affiliations.map((name) => <li key={name}>{name}</li>)}</ul><span className={styles.affiliationNote}>Affiliations refer to individual professionals, rather than institutional sponsorship.</span></div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.faqSection}`} aria-labelledby="faq-title"><div className={`${styles.container} ${styles.faqGrid}`}><div><p className={styles.eyebrow}>05 — PRACTICAL QUESTIONS</p><h2 id="faq-title">Questions about<br />the pilot.</h2></div><div className={styles.faqList}>{schoolFaqs.map((faq) => <details key={faq.question} className={styles.faq}><summary>{faq.question}<span className={styles.faqIcon} aria-hidden="true">+</span></summary><p>{faq.answer}</p></details>)}</div></div></section>

        <section id="conversation" className={styles.conversation} aria-labelledby="conversation-title"><div className={`${styles.container} ${styles.conversationGrid}`}><div>
          <p className={styles.eyebrow}>06 — A 30-MINUTE CONVERSATION</p><h2 id="conversation-title">Share your perspective<br /><em>on the course.</em></h2><p>Given your experience in education, your input could help us refine the course and its supporting platform for students and teachers.</p>
          </div><div className={styles.meetingPanel}><div className={styles.meetingDuration}><span>30</span><span>MINUTE<br />CONVERSATION</span></div><ol><li>An introduction to the course.</li><li>Your professional feedback.</li><li>A discussion of the pilot’s fit for your school.</li></ol>
          {bookingUrl ? <><BookingAction /><p className={styles.bookingNote}>Choose a time on our booking page. Opens in a new tab.</p></> : <><button className={styles.button} type="button" disabled>Booking available soon <Arrow /></button><p className={styles.bookingNote}>Our meeting calendar will be available here soon.</p></>}
          {siteConfig.contactEmail && <a className={styles.contactLink} href={`mailto:${siteConfig.contactEmail}`}>Prefer email? Get in touch <Arrow /></a>}
          </div></div></section>
      </main>
      <footer className={styles.footer}><div className={`${styles.container} ${styles.footerInner}`}><span className={styles.brandText}>icanlearnit<span className={styles.brandPeriod}>.</span></span><span>Learn. Practice. Grow.</span><span>Class 10 → 11 Physics</span></div></footer>
    </div>
  );
}
