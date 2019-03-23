const express = require('express')
const app = express()
const port = 3000
app.get('/', (req, res) => res.send('Hello World!'));
app.listen(port, () => console.log(`Sequelize Demo app listening on port ${port}!`))



const UserDAO = require('./src/main/daos/UserDAO');
app.get('/test', async (req, res) => {    
    let user = await UserDAO.getOneUser();
    res.json(user);
});

