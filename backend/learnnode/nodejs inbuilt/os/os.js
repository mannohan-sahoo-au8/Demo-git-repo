const os = require("os")

console.log(os.arch())
console.log(os.hostname())
console.log(os.platform())
console.log(os.type())

const freemem = os.freemem()

console.log(`${freemem/1024/1024/1024} GB`)

const totalMem = os.totalmem()
console.log(`${totalMem/1024/1024/1024} GB`)
