// craigs code #6
// let filter_dir = require('./filterls_module')
//
// dir = process.argv[2]
// ext = process.argv[3]
//
// // call the module function with a node style callback to print the files
// filter_dir(dir, ext, function(err, files) {
//   if (err) {
//     console.error(err)
//   } else {
//     for (file of files) {
//       console.log(file)
//     }
//   }
// })

// // HTTP Client
// let http = require('http')
// let url = process.argv[2]
// //
// http.get(url, (response) => {
//   response.on('data', (data) => {
//     console.log(data.toString())
//   })
// })

// HTTP Collect
let http = require('http')

let url = process.argv[2]
let str = ''

http.get(url, (res) => {
  res.on('data', (addThis) => {
    str += addThis
    res.on('end', (data) => {
      console.log(str.length)
      console.log(str)
      process.exit()
    })
  })
})
