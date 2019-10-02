const express = require('express')

const app = express()
const port = 5001

const fakeToken = '123456.kjhgfds.9876543.asdfgh.543212345'
let fakeUser = {
  id: 123456,
  token: fakeToken,
}

app.use(express.json())

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH',
  )
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization',
  )
  next()
})

app.use((req, res, next) => {
  setTimeout(next, 1000)
})

app.get('/', (req, res) => {
  let token = req.headers['authorization']
  if (token.startsWith('Bearer ')) {
    token = token.slice(7, token.length)
  }
  if (token === fakeToken) {
    return res.json(fakeUser)
  } else {
    res.sendStatus(401)
  }
})

app.post('/', (req, res) => {
  const { body } = req
  const { email } = body
  fakeUser = {
    ...fakeUser,
    email,
  }
  res.json(fakeUser)
})

app.listen(port, () =>
  console.log(`Api listening on port ${port}!`),
)
