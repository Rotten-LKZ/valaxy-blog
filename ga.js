const fs = require('fs')
const path = require('path')

const ga = `<!-- Global site tag (gtag.js) - Google Analytics --><script async src="https://www.googletagmanager.com/gtag/js?id=G-5K21SCS353"></script><script>window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-5K21SCS353');</script>`

function walkSync(currentDirPath, callback) {
  fs.readdirSync(currentDirPath, { withFileTypes: true }).forEach(function(dirent) {
    var filePath = path.join(currentDirPath, dirent.name)
    if (dirent.isFile()) {
      callback(filePath, dirent)
    } else if (dirent.isDirectory()) {
      walkSync(filePath, callback)
    }
  })
}

walkSync('dist', function(filePath) {
  if (path.extname(filePath) === '.html') {
    fs.writeFileSync(filePath, fs.readFileSync(filePath).toString().replace('</head>', ga + '</head>'))
  }
})
