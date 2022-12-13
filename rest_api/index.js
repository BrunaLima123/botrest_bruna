const express = require('express')
const cors = require('cors')
const config = require('./config')
const livroRoutes = require('./routes/livro-routes')
const editoraRoutes = require('./routes/editora-routes')
const autorRoutes = require('./routes/autor-routes')


const app = express()


app.use(express.json())
app.use(cors())
app.use('/api/livros', livroRoutes.routes)
app.use('/api/autores', autorRoutes.routes)
app.use('/api/editoras', editoraRoutes.routes)


app.listen(config.port, () =>
  console.log('API está rodando em http://localhost:' + config.port)
)
