/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.devaleff.com',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.8,
  outDir: './public',
  generateIndexSitemap: false,
  additionalPaths: async (config) => [
    await config.transform(config, '/'),
    await config.transform(config, '/#inicio'),
    await config.transform(config, '/#about'),
    await config.transform(config, '/#skills'),
    await config.transform(config, '/#projects'),
    await config.transform(config, '/#experience'),
    await config.transform(config, '/#contact'),
  ],
}
