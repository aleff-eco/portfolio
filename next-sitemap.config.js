/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.devaleff.com',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.8,
  sitemapSize: 100,
  alternateRefs: [
    { href: 'https://www.devaleff.com/', hreflang: 'es' },
    { href: 'https://www.devaleff.com/en', hreflang: 'en' }
  ],
};
