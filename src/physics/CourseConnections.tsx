import styles from "./connections.module.css";
/** Concept overview from the supplied course, not a prerequisite DAG. */
export default function CourseConnections(){return <figure className={styles.figure} aria-labelledby="pyramid-caption">
 <div className={styles.pyramid}>
 <div className={styles.apex}>Physical questions</div><div className={styles.link} aria-hidden="true">↑</div>
 <div className={styles.tierOne}><span>Differentiation</span><span>Integration</span></div><div className={styles.link} aria-hidden="true">↗ ↑ ↖</div>
 <div className={styles.tierTwo}><span>Graphs & functions</span><span>Sequences & sums</span><span>Trigonometry & vectors</span></div><div className={styles.link} aria-hidden="true">↗ ↑ ↖</div>
 <div className={styles.base}><span>Measurement & units</span><span>Position & change</span><span>Circles & angles</span></div>
 </div><figcaption id="pyramid-caption">Read upward: familiar foundations connect into mathematical tools, then come together in physical questions. A concept overview of the course.</figcaption>
 </figure>}
