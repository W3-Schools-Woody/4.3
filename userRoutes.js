const express = require("express");
const router = express.Router();
const userController = require("../userController");

// -=-=-=-= MIDDLEWARE +_+_+_+_+_+_

// ON LOGIN, assignment questions #1
const routeMiddleware =  (req, res, next) => {
    if (req.body.role === "login") {
        next();
    } else {
        res.status(403).send("login unsuccessful");
    }
}

// -=-=-=-=-=-=-=- ROUTES =-=-=-=-=-=-=

// GET all users
router.get("/:id", userController.getAllUsers);

// GET by :id
router.get("/:id", userController.getSingleUser);

// POST route
router.post("/", routeMiddleware, userController.addNewUser);

// PUT route
router.put("/:id", userController.updateUser);

// Delete route
router.delete("/:id", userController.deleteUser);
