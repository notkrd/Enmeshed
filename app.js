const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Goodbye, cruel world!'))

app.listen(port, () => console.log('Whatever forests might previously have existed were made illegible by several thousand years\' continuous human habitation.'))