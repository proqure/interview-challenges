const campaigns = [
  {
    id: 1,
    url: "https://site-1.com",
    status: 1, // live
  },
  {
    id: 2,
    url: "https://site-2.com",
    status: 0, // stopped
  },
  {
    id: 3,
    url: "https://site-1.com",
    status: 1, // stopped
  },
];

const sites = [
  {
    siteId: 1,
    url: "https://site-1.com",
    links: ["https://site-2.com"],
    isLive: false,
  },
  {
    siteId: 2,
    url: "https://site-2.com",
    links: ["https://site-5.com"],
    isLive: false,
  },
  {
    siteId: 3,
    url: "https://site-3.com",
    links: ["https://site-2.com", "https://site-2.com"],
    isLive: false,
  },
  {
    siteId: 4,
    url: "https://site-4.com",
    links: ["https://site-1.com"],
    isLive: false,
  },
  {
    siteId: 5,
    url: "https://site-5.com",
    links: [],
    isLive: false,
  },
];

/**
 * A site is live if it's linked to a campaigns that is live,
 * OR
 * if it's linked to another live site (i.e. appear on the other site links).
 *
 * This function calculates for each site if it's live or not,
 * and sets the isLive property accordingly.
 *
 * @param sites
 */
function calculateIsLive(sites, campaigns) {
  // write your code here
}

// TEST
calculateIsLive(sites, campaigns);
console.log(sites);
