const fs = require('fs') // 引入 fs 模組
const localFileHandler = file => { // file 是 multer 處理完的檔案
  return new Promise((resolve, reject) => {
    if (!file) return resolve(null)
    const fileName = `upload/${file.originalname}`
    return fs.promises.readFile(file.path)
      .then(data => fs.promises.writeFile(fileName, data))
      .then(() => resolve(`/${fileName}`))
      .catch(err => reject(err))
  })
}


  // readXlsxFile(exFile).then((rows) => {
  //   rows.shift()
  //   database.connect((error) => {
  //     if (error) {
  //       console.error(error)
  //     } else {
  //       let query = 'INSERT INTO user (id, name, email) VALUES ?'
  //       connection.query(query, [rows], (error, response) => {
  //         console.log(error || response)
  //       })
  //     }
  //   })
  // })


module.exports = {
  localFileHandler
}
