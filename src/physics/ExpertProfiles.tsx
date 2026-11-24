import sunpreet from './assets/experts/sunpreet.jpg';
import rashika from './assets/experts/rashika.jpg';
import avi from './assets/experts/avi.jpg';
import aaron from './assets/experts/aaron.png';
import jagdish from './assets/experts/jagdish.png';
import shikha from './assets/experts/shikha.png';
import aditya from './assets/experts/aditya.png';
import rahul from './assets/experts/rahul.jpg';
import styles from './experts.module.css';

type Expert = {
  name: string;
  initials: string;
  country: "Germany" | "Sweden" | "USA";
  affiliation: string;
  focus: string;
  bio?: string;
  photo?: { src: string };
  profile?: string;
  profileLabel?: string;
};

// Public profile sources and intentionally incomplete fields: docs/EXPERTS.md.
// Missing portraits intentionally render initials; never substitute a guessed face.
const experts: Expert[] = [
  {
    name: 'Dr Sunpreet Singh Arora', country: 'USA', initials: 'SA', affiliation: 'Visa',
    focus: 'Machine learning & security', photo: sunpreet,
    bio: 'Visa AI researcher whose fingerprint technology helped police unlock a murder victim’s phone.',
    profile: 'https://usa.visa.com/about-visa/visa-research/sunpreet-arora.html', profileLabel: 'Visa profile',
  },
  {
    name: 'Dr Shikha Bhadoria', country: 'Germany', initials: 'SB', affiliation: 'Max Planck Institute for Nuclear Physics · Heidelberg',
    focus: 'Physics research', photo: shikha,
    bio: 'Max Planck physicist exploring how intense light creates matter and accelerates particles.',
    profile: 'https://www.mpi-hd.mpg.de/mpi/de/forschung/abteilungen-und-gruppen/theoretische-quantendynamik-und-quantenelektrodynamik/people', profileLabel: 'Institute profile',
  },
  {
    name: 'Rashika Jakhmola', country: 'Germany', initials: 'RJ', affiliation: 'Goethe University Frankfurt · DKTK / DKFZ',
    focus: 'Machine learning for cancer research', photo: rashika,
    bio: 'Mathematics graduate turned AI researcher, using machine learning to understand cancer.',
    profile: 'https://mlo-lab.github.io/author/rashika-jakhmola/', profileLabel: 'Research profile',
  },
  {
    name: 'Dr Avi Jakhmola', country: 'Sweden', initials: 'AJ', affiliation: 'Chalmers University of Technology · Sweden',
    focus: 'Energy & climate research', photo: avi,
    bio: 'Climate researcher published in Nature Energy, using mathematics to explore the future of clean energy.',
    profile: 'https://www.chalmers.se/en/persons/jakhmola/', profileLabel: 'University profile',
  },
  {
    name: 'Aaron Alphonsus', country: 'USA', initials: 'AA', affiliation: 'Spotify',
    focus: 'Software engineering & mentoring', photo: aaron,
    bio: 'Spotify software engineer and machine-learning researcher who taught Python through Stanford’s Code in Place.',
    profile: 'https://www.linkedin.com/in/aaron-alphonsus/', profileLabel: 'LinkedIn profile',
  },
  {
    name: 'Jagdish Mohapatra', country: 'USA', initials: 'JM', affiliation: 'Broadcom',
    focus: 'Semiconductor design', photo: jagdish,
    bio: 'Broadcom engineer with experience at Meta, designing the processors and hardware that make modern computing possible.',
    profile: 'https://www.linkedin.com/in/jagdish-mohapatra', profileLabel: 'LinkedIn profile',
  },
  {
    name: 'Dr Aditya Moudgal', country: 'USA', initials: 'AM', affiliation: 'Idaho National Laboratory · WPI PhD',
    focus: 'Materials research', photo: aditya,
    bio: 'Idaho National Laboratory scientist connecting experiments and mathematical models—from solar-cell silicon to nuclear technology.',
    profile: 'https://inl.elsevierpure.com/en/persons/aditya-moudgal/', profileLabel: 'Research profile',
  },
];

function CountryFlag({ country }: { country: Expert['country'] }) {
  const flags = { Germany: '🇩🇪', Sweden: '🇸🇪', USA: '🇺🇸' };
  return <span className={styles.countryFlag} role="img" aria-label={`Based in ${country}`} title={`Based in ${country}`}>{flags[country]}</span>;
}

function Portrait({ person }: { person: Expert }) {
  return person.photo
    ? <img className={styles.portrait} src={person.photo.src} alt={person.name} width="80" height="80" loading="lazy" />
    : <span className={styles.initials} aria-hidden="true">{person.initials}</span>;
}

export default function ExpertProfiles({ founderPortraitSrc }: { founderPortraitSrc?: string }) {
  const founder: Expert = {
    name: 'Rahul Jakhmola', country: 'USA', initials: 'RJ', affiliation: 'Founder, icanlearnit · Ex-Amazon',
    focus: 'Physics teaching & learning research',
    photo: founderPortraitSrc ? { src: founderPortraitSrc } : rahul,
  };
  return <div className={styles.profiles}>

    <ul className={styles.grid} aria-label="Experts supporting the course">
      {experts.map(person => <li key={person.name} className={styles.card}>
        <div className={styles.cardTop}><Portrait person={person} /><div><p className={styles.focus}>{person.focus}</p><h3>{person.name} <CountryFlag country={person.country} /></h3><p className={styles.affiliation}>{person.affiliation}</p></div></div>

        {person.profile && <a className={styles.profileLink} href={person.profile} target="_blank" rel="noopener noreferrer" aria-label={`${person.profileLabel}: ${person.name}`}>{person.profileLabel} <span aria-hidden="true">↗</span></a>}
      </li>)}
    </ul>
    <div className={styles.founder}>
      <Portrait person={founder} />
      <div><p className={styles.focus}>Founder · Physics teaching & learning research</p><h3>Rahul Jakhmola <CountryFlag country={founder.country} /></h3><p className={styles.affiliation}>icanlearnit · Ex-Amazon</p></div>
      <div className={styles.founderCopy}><p>Physics teacher and learning researcher bringing experience from Amazon and Maruti Suzuki into how students build understanding.</p><a className={styles.profileLink} href="https://www.linkedin.com/in/rahuljakhmola" target="_blank" rel="noopener noreferrer">LinkedIn profile <span aria-hidden="true">↗</span></a></div>
    </div>
  </div>;
}
