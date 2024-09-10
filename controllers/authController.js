const User = require('../models/user');
const bcrypt = require('bcrypt');

const authController = {
    register: async (req, res) => {
        try {
            // extract the details from the request body
            const { name, email, password } = req.body;

            // check if the user already exists
            const user = await User.findOne({ email });

            if (user) {
                return res.status(400).json({ message: 'User already exists' });
            }

            // hash the password
            const hashedPassword = await bcrypt.hash(password, 10);

            // create a new user
            const newUser = new User({ name, email, password: hashedPassword });

            // save the user to the database
            await newUser.save();

            res.status(201).json({ message: 'User registered successfully' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = authController;