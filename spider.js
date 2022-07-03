const fs = require('fs')
const path = require('path')

const robotsTxt = path.resolve('dist/robots.txt')
const sitemapXml = path.resolve('dist/sitemap.xml')

rewriteUrl(robotsTxt)
rewriteUrl(sitemapXml)

function rewriteUrl(where) {
  fs.writeFileSync(where, fs.readFileSync(where).toString().replace(/http:\/\/localhost/g, 'https://rotcool.me'))
}
