import 'dotenv/config'

import app from './app'

const port = process.env.PORT

app.listen(port, () => console.log(`Backend executando na porta ${port}!`))
