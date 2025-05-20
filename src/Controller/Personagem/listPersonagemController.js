import { getallPersonagem } from "../../Model/personagemModel.js";

export default async function listPersonagemController(req, res) {
    const result = await getallPersonagem()

    return res.json(result)
}