import styles from "./curriculum-map.module.css";
const tools=[
 {name:"Functions & graphs",chapter:"Class 11 · Relations & Functions; Straight Lines",use:"Describe position and velocity over time."},
 {name:"Trigonometry & vectors",chapter:"Class 11 · Trigonometric Functions / Class 12 · Vectors",use:"Resolve a launch into horizontal and vertical motion."},
 {name:"Rates of change",chapter:"Class 11 · Limits and Derivatives",use:"Connect position, velocity and acceleration."},
 {name:"Integration",chapter:"Class 12 · Integrals",use:"Recover displacement from changing velocity."},
];
export default function CurriculumMap(){return <figure className={styles.figure} aria-labelledby="curriculum-caption">
 <div className={styles.question}><span>CLASS 11 PHYSICS · MOTION IN A PLANE</span><h3>A ball is launched at 20 m/s, at 30°.<br />What is its vertical velocity after 2 seconds?</h3><p>From the course · Take g = 10 m/s²</p></div>
 <div className={styles.connector} aria-hidden="true">The mathematical tools behind kinematics ↓</div>
 <div className={styles.tools}>{tools.map(t=><div key={t.name}><h4>{t.name}</h4><p>{t.use}</p><span>{t.chapter}</span></div>)}</div>
 <figcaption id="curriculum-caption">The question directly uses trigonometry and components. Functions, differentiation and integration explain the underlying kinematic relationships.</figcaption>
 </figure>}
