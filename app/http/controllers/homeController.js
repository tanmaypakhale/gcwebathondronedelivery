const Menu = require('../../models/menu')
function homeController() {
    return {
        async index(req, res) {
            const drones = await Menu.find()
            return res.render('home', { drones : drones })
        }
    }
}

module.exports = homeController