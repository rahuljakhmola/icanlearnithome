import background from "./assets/chalkboard-background.png";
import styles from "./bridge-timeline.module.css";
const concepts = [
  ["Trigonometry", "sin θ"], ["Sums", "Σ"], ["Functions", "f(x)"],
  ["Vectors", "î ĵ k̂"], ["Limits", "lim"], ["Differentiation", "dy/dx"], ["Integration", "∫"],
];
export default function BridgeTimeline() {
  return <figure className={styles.figure} aria-label="One-month Physics bridge between Class 10 boards and Class 11, connecting Physics with seven mathematical foundations">
    <img className={styles.background} src={background.src} alt="" />
    <div className={styles.veil} />
    <div className={styles.stages}>
      <div className={styles.stage}><div className={styles.endpoint}><strong>Class 10</strong><span>Board exams</span></div><div className={styles.stem}/><span className={styles.dot}/><p className={styles.date}>February–March</p></div>
      <div className={`${styles.stage} ${styles.middle}`}><div className={styles.course}>
        <p className={styles.duration}>One month</p><h2>Physics Bridge Course</h2>
        <p className={styles.promise}>Build strong mathematical foundations for Class 11 Physics.</p>
        <svg className={styles.mathGraph} viewBox="0 0 800 180" role="img" aria-label="Physics and Mathematics connect through seven mathematical foundations">
          <path d="M114 67H785" stroke="#182337" fill="none"/><path d="M114 112H785" stroke="#7ea6c9" fill="none"/>
          <text x="0" y="72" fontSize="15" fill="#182337">Physics</text><text x="0" y="117" fontSize="15" fill="#6388a7">Mathematics</text>
          {concepts.map(([name,symbol],i)=>{const x=160+i*98;return <g key={name}>
            <text x={x} y="30" textAnchor="middle" fontSize="15.5" fill="#182337">{name}</text>
            <path d={`M${x} 67V112`} stroke="#d19188"/>
            <circle cx={x} cy="67" r="3.5" fill="#c4695f"/><circle cx={x} cy="112" r="3.5" fill="#c4695f"/>
            {name === "Differentiation" ? <g fill="#182337" fontFamily="Georgia,serif" fontSize="15" textAnchor="middle"><text x={x} y="140">dy</text><path d={`M${x-12} 146h24`} stroke="#182337"/><text x={x} y="165">dx</text></g> : <text x={x} y="150" textAnchor="middle" fontSize="18" fontFamily="Georgia,serif" fill="#182337">{symbol}</text>}
            {name === "Limits" && <text x={x} y="168" textAnchor="middle" fontSize="12" fontFamily="Georgia,serif" fill="#182337">x → a</text>}
          </g>})}
        </svg>
      </div><div className={styles.stem}/><span className={styles.dot}/><p className={styles.date}>March–April</p></div>
      <div className={styles.stage}><div className={styles.endpoint}><strong>Class 11</strong><span>School begins</span></div><div className={styles.stem}/><span className={styles.dot}/><p className={styles.date}>April onwards</p></div>
    </div>
    <figcaption className={styles.caption}>Illustrative timing · School calendars vary.</figcaption>
  </figure>;
}
