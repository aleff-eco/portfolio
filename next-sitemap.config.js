/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.devaleff.com',
  generateRobotsTxt: true,
  changefreq: 'monthly',
  priority: 1.0,
  outDir: './public',
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
}
