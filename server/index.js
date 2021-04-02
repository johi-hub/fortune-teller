const express = require('express')
const cors = require('cors');
const app = express()
const port = 8080

app.use(express.json());
app.use(cors());



app.listen(port, () => {
console.log(`pair-project app listening at http://localhost:${port}`)
})
