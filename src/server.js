import express from "express"
import personagemRouter from './Router/personagemRouter.js' 
import armaRouter from './Router/armaRouter.js'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    return res.json({
        message: "Funcionou"
    })
})

app.use('/personagem', personagemRouter)
app.use("/arma", armaRouter)

app.listen(3000, () => {
    console.log('Servirdor Rodando no http://localhost:3000')
})