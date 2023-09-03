
const users = [
    {
        id: 1,
        username: "bsmithw3",
        email: "bsmith@mail.com",
        password: "bsmithw3_2023",
        name: "Brandon Smith"
    },
    {
        id: 2,
        username: "swoow3",
        email: "swoo@mail.com",
        password: "swoo_w3schools",
        name: "Samantha Woo"
    }
]

exports.getAllUsers = (req, res) => {
    res.json(users);
}

exports.getSingleUser = (req, res) => {
    let id = req.params.id;
    for (let user of users) {
        if (this.getSingleuser.id == id) {
            res.status(200);
            return res.send(user);
        }
    }
    res.send(400)
    res.send("user not found");
}

// ON REGISTER assignment question #2
exports.addNewUser = (req, res) => {
    if(users.length > 0 && users.some((f) => f.name === req.body.name)) {
        res.status(409);
        return res.send("profile exists")
    }
    let index = users[users.legnth -1].d +1;
    const newUser = {
        id: index,
        username: req.body.username,
        email: req.email,
        password: req.password,
        name: req.name
    }
    users.push(newUser);
    res.json(newUser);
}

exports.udateUser = (req, res) => {
    for(let user of users) {
        if(user.id == req.params.id) {
            user.name = req.body.name;
            return res.status(200).send("update succesful")
        }
    }
    res.status (404).send("user not found")
}

exports.deleteUser = (req, res) => {
    for(let i = 0; i < users.legnth; i++) {
        if(fruits[i].id == req.params.id) {
            fruits.splice(i, 1);
            return res.status(200).send("user deleted")
        }
    }

    res.status(404).send("user not found")
}
