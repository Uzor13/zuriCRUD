const User = require('../models/model')

// Get Data
const getData = async (req, res) => {
    try {
        const client = await User.find();
        // res.status(200).json({message: 'Successful'});
        return res.status(200).json({
            message: 'Successful',
            data: client
        });
    } catch (e) {
        res.status(404).json({message: `Unsuccessful ${e.message}`});
    }
}

//Get a single data
const getSpecData = async (req, res) => {
    const id = req.params.id;
    try {
        const client = await User.findOne({id: id});
        res.status(200).json({
            message: 'Successful',
            data: client
        });
    } catch (e) {
        res.status(404).json({message: `Unsuccessful ${e.message}`});
    }
}

//Create Data
const createClient = async (req, res) => {
    const newData = new User({
        id: req.body.id,
        name: req.body.name,
        email: req.body.email,
        country: req.body.country
    })
    try {
        await newData.save();
        res.status(201).json({
            message: 'Successful',
            data: newData
        });
    } catch (e) {
        res.status(404).json({message: `Unsuccessful ${e.message}`});
    }
}

//Update Data
const updateClient = async (req, res) => {
    const id = req.params.id;
    try {
        await User.findOneAndUpdate({
                id: id,
            },
            {
                id: req.body.id,
                name: req.body.name,
                email: req.body.email,
                country: req.body.country
            }
        )
        res.status(202).json({
            message: 'Successful',
            data: id
        });

    } catch (e) {
        res.status(404).json({message: `Unsuccessful ${e.message}`});
    }

}

//Delete Data
const deleteClient = async (req, res) => {
    const id = req.params.id;

    try {
        await User.findOneAndRemove({id: id});
        res.status(203).json({
            message: 'Successful',
            data: id
        });

    } catch (e) {
        res.status(404).json({message: `Unsuccessful ${e.message}`});
    }
}

module.exports = {
    getData,
    getSpecData,
    createClient,
    updateClient,
    deleteClient
}