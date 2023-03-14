const router = require('express').Router();
const Show = require('../models/Show');

// @desc    return all shows
// @route   GET /shows
// @access  Public
router.get('/', async (req, res, next) => {
    try {
        const shows = await Show.find();
        res.status(200).json({ shows });
    } catch (error) {
        next(error);
    }
});

// @desc    return show based on ID
// @route   GET /shows/:showID
// @access  Public
router.get('/', async (req, res, next) => {
    const {id} = req.params;
    try {
        const show = await Show.findById(id);
        res.status(200).json(show);
    } catch (error) {
        next(error);
    }
});

// @desc    add show to DB
// @route   POST /shows
// @access  Public
router.post('/', async (req, res, next) => {
    try {
        const show = await Show.create(req.body);
        res.status(201).json(show);
    } catch (error) {
        next(error);
    }
});

// @desc    edit show information
// @route   PUT /shows/:showId
// @access  Public
router.put('/:showId', async (req, res, next) => {
    const {id} = req.params;
    const {newShow} = req.body;
    try {
        await Show.findByIdAndUpdate(id, newShow);
    } catch (error) {
        next(error);
    }
});

// @desc    deletes show from DB based on ID
// @route   DELETE /shows/:showId
// @access  Public
router.delete('/:showId', async (req, res, next) => {
    const {id} = req.params;
    try {
        const show = await Show.findByIdAndDelete(id);
        res.status(204).json(show);
    } catch (error) {
        next(error);
    }
});

module.exports = router;
  