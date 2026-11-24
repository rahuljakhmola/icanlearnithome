import { bookingUrl, siteConfig, walkthroughFormUrl } from "./site-config";
import styles from "./physics.module.css";

const emailSubject = encodeURIComponent("School Physics Bridge Course walkthrough");

export default function WalkthroughRequest() {
  return <>
    <p className={styles.pilotFee}>₹0 school pilot · 30-minute conversation</p>
    <h3>Curriculum walkthrough</h3>
    <p>See the Episode 1 approach, discuss the readiness preview and work out how the course could fit your school’s timetable.</p>
    {walkthroughFormUrl ? (
      <form className={styles.walkthroughForm} action={walkthroughFormUrl} method="post">
        <label>Your name<input name="name" autoComplete="name" required /></label>
        <label>Role<select name="role" required defaultValue="">
          <option value="" disabled>Select your role</option>
          <option>Principal / Director</option>
          <option>Physics HoD / Teacher</option>
          <option>Academic Coordinator</option>
          <option>Other</option>
        </select></label>
        <label>School name &amp; city<input name="schoolCity" required /></label>
        <input name="countryCode" type="hidden" value="+91" />
        <label>Phone / WhatsApp (+91)<input name="phone" type="tel" autoComplete="tel-national" required /></label>
        <button className={styles.pilotButton} type="submit">Request walkthrough ↗</button>
      </form>
    ) : bookingUrl ? (
      <a className={styles.pilotButton} href={bookingUrl} target="_blank" rel="noopener noreferrer">Choose a meeting time ↗</a>
    ) : siteConfig.contactEmail ? (
      <a className={styles.pilotButton} href={`mailto:${siteConfig.contactEmail}?subject=${emailSubject}`}>Email a walkthrough request ↗</a>
    ) : (
      <p className={styles.bookingNote}><strong>To request a walkthrough, reply “Yes” to your invitation email.</strong></p>
    )}
  </>;
}
