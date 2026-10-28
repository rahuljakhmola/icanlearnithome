import mpi from './assets/logos/max-planck.svg';
import amazon from './assets/logos/amazon.jpg';
import google from './assets/logos/google.svg';
import meta from './assets/logos/meta.svg';
import spotify from './assets/logos/spotify.png';
import nvidia from './assets/logos/nvidia.svg';
import styles from './physics.module.css';
export default function AffiliationLogos(){return <ul className={styles.logoStrip} aria-label="Individual mentor affiliations">
<li className={styles.mpiLogo}><img src={mpi.src} alt="Max Planck Institute for Nuclear Physics"/><span>Max Planck Institute for Nuclear Physics</span></li>
<li><img src={amazon.src} alt="Amazon"/></li><li><img src={google.src} alt="Google"/></li><li className={styles.metaLogo}><img src={meta.src} alt=""/><span>Meta</span></li><li><img src={spotify.src} alt="Spotify"/></li><li><img src={nvidia.src} alt="NVIDIA"/></li>
</ul>}
