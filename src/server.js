import express from "express"
import personagemRouter from './Router/personagemRouter.js' 

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    return res.json({
        message: "Funcionou"
    })
})

app.use('/personagem', personagemRouter)

app.listen(3000, () => {
    console.log('Servirdor Rodando no http://localhost:3000')
})