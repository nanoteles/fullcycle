const express = require('express')
const app = express()
const port = process.env.APP_PORT || 3000
var gerador = require('gerador-nome')

const config = {
  host: 'mysql',
  user: 'admusr',
  password: 'admusr',
  database: 'fullcycle',
}

const mysql = require('mysql')

const connection = mysql.createConnection(config)

app.get('/', (req, res) => {
  const name = gerador.geradorNome()

  connection.query(`INSERT INTO people (nome) VALUES ('${name}')`)

  connection.query(`SELECT nome FROM people`, (error, results, fields) => {
    res.send(`
      <h1>Full Cycle Rocks!</h1>
      <ol>
        ${!!results.length ? results.map(el => `<li>${el.nome}</li>`).join('') : ''}
      </ol>
    `)
  })
})

app.listen(port, function () {
  console.log(`Escutando na porta ${port}`)
})