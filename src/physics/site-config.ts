/** Public settings only. Never put credentials in this file. */
export const siteConfig = {
  /** Paste the public Google Calendar appointment booking page URL here. */
  bookingUrl: "",
  /** Optional real contact address. Leave blank until supplied. */
  contactEmail: "",
  /** Set once the final public route is confirmed. */
  canonicalUrl: "",
  /** Original approved horizontal logo. A plain-text brand name is used until supplied. */
  logoSrc: "",
  /** Optional current founder portrait, with permission to publish. */
  founderPortraitSrc: "",
};

export function isHttpsUrl(value: string): boolean {
  try {
    return new URL(value).protocol === "https:";
  } catch {
    return false;
  }
}

export const bookingUrl = isHttpsUrl(siteConfig.bookingUrl) ? siteConfig.bookingUrl : "";
