const express = require("express");
const createToken = require('../libs/auth').createToken;
const router = express.Router();
const user = require('../models/user');
const bcrypt = require('bcrypt');

router.post('/login_check', (req, res) => {

    var email = req.body.email;
    var password = req.body.password;

    if (email == null || password == null)
        return res.status(400).json({'error' : 'missing parameters'});

    user.findOne( {email: email}, function (error, user) {
        if (error) {
            return res.status(500).json({'error' : error});
        }
        else {
            if (!user)
                return res.status(404).json({'error' : 'user not found'});
            else
                bcrypt.compare(password, user.password, function (error, result) {
                    if (result) {
                        const token = createToken({email: email});
                        return res.status(200).json({'id' : user.id , 'token' : token});
                    }
                    else
                        return res.status(401).json({'error' : 'invalid password'})

                })
        }


    });
});

module.exports = router;