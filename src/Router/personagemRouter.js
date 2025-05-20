import express from 'express'
import createPersonagemController from '../Controller/Personagem/createPersonagemController.js'
import listPersonagemController from '../Controller/Personagem/listPersonagemController.js'
import getPersonagemController from '../Controller/Personagem/getPersonagemController.js'
import deletePersonagemController from '../Controller/Personagem/deletePersonagemController.js'
import updatePersonagemController from '../Controller/Personagem/updatePersonagemController.js'
//import editPersonagemController from '../Controller/Personagem/editPersonagemController.js'

const router = express.Router()

router.get('/', (req, res) => {
    return res.json({
        message: "Resposta"
        }
    )
})

router.post('/', createPersonagemController)
router.get('/list', listPersonagemController)
router.get('/getbyid/:id', getPersonagemController)
router.delete('/:id', deletePersonagemController)
router.put('/:id', updatePersonagemController)

export default router