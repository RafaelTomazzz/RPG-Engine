import express from 'express'
import createPersonagemController from '../Controller/Personagem/createPersonagemController.js'
const router = express.Router()

router.get('/', (req, res) => {
    return res.json({
        message: "Resposta"
        }
    )
})

router.post('/', createPersonagemController)

export default router