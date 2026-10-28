import styles from "./rate-of-change.module.css";

const foundations = [
  ["Differentiation", "Find the rate of change at an instant."],
  ["Functions", "Describe how quantities depend on one another."],
  ["Change", "Final value minus initial value."],
  ["Measurement and units", "Define quantities and how they are measured."],
];

function DesktopDiagram() {
  const cards = [
    { x: 20, label: "MOMENTUM", title: "A rocket losing mass", lines: ["Mass and velocity both change.", "How does momentum change?"], detail: ["of momentum"] },
    { x: 320, label: "OSCILLATIONS", title: "A hidden oscillator", lines: ["Position changes with time.", "Find velocity and acceleration."], detail: ["of position → velocity", "of velocity → acceleration"] },
    { x: 620, label: "INDUCTION", title: "A rotating loop", lines: ["A loop rotates in a magnetic field.", "Find the induced emf."], detail: ["of magnetic flux", "with a negative sign → induced emf"] },
  ];
  return <svg className={styles.desktop} viewBox="0 0 900 900" role="img" aria-labelledby="rate-desktop-title rate-desktop-desc">
    <title id="rate-desktop-title">Three Physics questions connect through rate of change</title>
    <desc id="rate-desktop-desc">A mass-losing rocket, an oscillator and a rotating conducting loop each involve rate of change. Their branches join one shared definition: how one quantity changes with respect to another. Trace down through differentiation, functions, change, measurement and units.</desc>
    <g className={styles.edges}><path d="M150 270V295Q150 310 165 310H435Q450 310 450 325V350"/><path d="M450 270V350"/><path d="M750 270V295Q750 310 735 310H465Q450 310 450 325V350"/><path d="M450 454V852"/></g>
    {cards.map(card => <g key={card.x}>
      <rect className={styles.card} x={card.x} y="10" width="260" height="260"/>
      <text className={styles.chapter} x={card.x + 22} y="38">{card.label}</text>
      <text className={styles.cardTitle} x={card.x + 22} y="87">{card.title}</text>
      {card.lines.map((line, i) => <text className={styles.body} key={line} x={card.x + 22} y={119 + i * 23}>{line}</text>)}
      <text className={styles.repeated} x={card.x + 22} y="191">Rate of change</text>
      <path className={styles.highlight} d={`M${card.x + 22} 198h115`}/>
      {card.detail.map((line, i) => <text className={styles.detail} key={line} x={card.x + 22} y={221 + i * 20}>{line}</text>)}
      <circle className={styles.node} cx={card.x + 130} cy="270" r="4"/>
    </g>)}
    <rect className={styles.hub} x="225" y="350" width="450" height="104" rx="3"/>
    <circle className={styles.focusNode} cx="450" cy="350" r="5"/>
    <text className={styles.hubTitle} x="450" y="389" textAnchor="middle">Rate of change</text>
    <text className={styles.hubDefinition} x="450" y="424" textAnchor="middle">How one quantity changes with respect to another.</text>
    {foundations.map(([title, definition], i) => <g key={title}>
      <rect className={styles.foundation} x="225" y={490+i*100} width="450" height="74" rx="3"/>
      <circle className={styles.node} cx="450" cy={490+i*100} r="4"/>
      <text className={styles.foundationTitle} x="450" y={519+i*100} textAnchor="middle">{title}</text>
      <text className={styles.body} x="450" y={544+i*100} textAnchor="middle">{definition}</text>
    </g>)}
  </svg>;
}

function MobileDiagram() {
  return <svg className={styles.mobile} viewBox="0 0 360 1050" role="img" aria-labelledby="rate-mobile-title rate-mobile-desc">
    <title id="rate-mobile-title">One connected map: rocket, oscillator and rotating loop</title>
    <desc id="rate-mobile-desc">All three questions connect to rate of change. A rocket's momentum changes; position and velocity change in oscillations; changing magnetic flux induces emf with a negative sign. The shared concept traces back through differentiation, functions, change, measurement and units.</desc>
    <g className={styles.edges}>
      <path d="M86 175V190Q86 200 76 200H22Q12 200 12 210V420Q12 435 27 435H165Q180 435 180 450V465"/>
      <path d="M274 175V190Q274 200 284 200H338Q348 200 348 210V420Q348 435 333 435H195Q180 435 180 450V465"/>
      <path d="M180 402V465"/><path d="M180 565V1020"/>
    </g>
    <rect className={styles.card} x="8" y="15" width="156" height="160"/>
    <text className={styles.chapter} x="22" y="40">MOMENTUM</text>
    <text className={styles.cardTitle} x="22" y="70">A rocket</text><text className={styles.cardTitle} x="22" y="94">losing mass</text>
    <text className={styles.repeated} x="22" y="128">Rate of change</text><path className={styles.highlight} d="M22 135h110"/>
    <text className={styles.detail} x="22" y="155">of momentum</text>
    <circle className={styles.node} cx="86" cy="175" r="4"/>
    <rect className={styles.card} x="196" y="15" width="156" height="160"/>
    <text className={styles.chapter} x="210" y="40">OSCILLATIONS</text>
    <text className={styles.cardTitle} x="210" y="70">A hidden</text><text className={styles.cardTitle} x="210" y="94">oscillator</text>
    <text className={styles.repeated} x="210" y="128">Rate of change</text><path className={styles.highlight} d="M210 135h110"/>
    <text className={styles.detail} x="210" y="155">of position / velocity</text>
    <circle className={styles.node} cx="274" cy="175" r="4"/>
    <rect className={styles.card} x="102" y="242" width="156" height="160"/>
    <text className={styles.chapter} x="116" y="267">INDUCTION</text>
    <text className={styles.cardTitle} x="116" y="297">A rotating</text><text className={styles.cardTitle} x="116" y="321">loop</text>
    <text className={styles.repeated} x="116" y="354">Rate of change</text><path className={styles.highlight} d="M116 361h110"/>
    <text className={styles.detail} x="116" y="383">of magnetic flux*</text>
    <circle className={styles.node} cx="180" cy="402" r="4"/>
    <rect className={styles.hub} x="22" y="465" width="316" height="100" rx="3"/>
    <circle className={styles.focusNode} cx="180" cy="465" r="5"/>
    <text className={styles.hubTitle} x="180" y="501" textAnchor="middle">Rate of change</text>
    <text className={styles.hubDefinition} x="180" y="530" textAnchor="middle">How one quantity changes</text>
    <text className={styles.hubDefinition} x="180" y="550" textAnchor="middle">with respect to another.</text>
    {foundations.map(([title], i) => <g key={title}>
      <rect className={styles.foundation} x="22" y={600+i*110} width="316" height="78" rx="3"/>
      <circle className={styles.node} cx="180" cy={600+i*110} r="4"/>
      <text className={styles.foundationTitle} x="180" y={629+i*110} textAnchor="middle">{title}</text>
      <text className={styles.body} x="180" y={654+i*110} textAnchor="middle">{["Find the rate at an instant.", "Describe how quantities vary.", "Final value minus initial value.", "Define quantities and their units."][i]}</text>
    </g>)}
    <text className={styles.footnote} x="180" y="1042" textAnchor="middle">*Induced emf is the negative rate of change of flux.</text>
  </svg>;
}

/** Adapted capstone prompts. Downward paths trace concepts back to foundations. */
export default function RateOfChange() {
  return <figure className={styles.figure} aria-labelledby="rate-caption">
    <DesktopDiagram /><MobileDiagram />
    <figcaption id="rate-caption">Three capstone questions, one shared idea. Follow the connected paths down to the foundations developed in the course.</figcaption>
  </figure>;
}
