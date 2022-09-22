import editUsersService from "../services/editUsers.service"

const editUsersController = (req, res) => {
    const { id } = req.params
    const data = req.body

    const edited = editUsersService(id, data)

    return res.status(200).json(edited)

}

export default editUsersController