const express = require('express')
const app = express()
const port = 8080

app.use(express.json());

app.get('/', (req, res) => {
    res.send('')
  })

app.listen(port, () => {
console.log(`pair-project app listening at http://localhost:${port}`)
})
