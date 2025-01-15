const User = require('../Modals/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require("dotenv").config();

const cookieOptions = {
    httpOnly: true,
    secure: false, // Set to true in production
    sameSite: 'Lax'
};

exports.signUp = async (req, res) => {
    try {
        const { channelName, userName, about, profilePic, password } = req.body;
        const isExist = await User.findOne({ userName });
        if (isExist) {
            res.status(400).json({ error: "Username Already Exist Please try with other username" });

        } else {
            let updatePass = await bcrypt.hash(password, 10)
            const user = new User({ channelName, userName, about, profilePic, password: updatePass });
            await user.save();
            res.status(201).json({
                message: 'User registered succesfully',
                success: 'yes',
                data: user
            });
        }



    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
}

exports.signIn = async (req, res) => {
    try {
        const { userName, password } = req.body;
        const user = await User.findOne({ userName });
        if (user && bcrypt.compare(password, user.password)) {
            const token = jwt.sign({ userId: user._id }, SCRET_KEY);
            res.cookie('tokens', token, cookieOptions);
            res.json({ message: 'Logged in successfully', success: "true", token, user });

        } else {
            res.status(400).json({ error: 'Invalid credentials' });
        }

    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
}

exports.logout = async (req, res) => {
    res.clearCookie('tokens', cookieOptions).json({ message: 'Logged out successfully'});

}



