import express from 'express';
const router = express.Router();
import Restaurant from '../models/restaurantModel.js';


router.post('/', async (req, res) => {
    try {
        const newRestaurant = new Restaurant(req.body);
        const restaurant = await newRestaurant.save();
        res.status(201).json(restaurant);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const restaurants = await Restaurant.find();
        res.json(restaurants);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});


router.get('/:id', async (req, res) => {
    try {
        const restaurant = await Restaurant.findById(req.params.id);
        if (!restaurant) return res.status(404).json({ error: 'Restaurant not found' });
        res.json(restaurant);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const restaurant = await Restaurant.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!restaurant) return res.status(404).json({ error: 'Restaurant not found' });
        res.json(restaurant);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const restaurant = await Restaurant.findByIdAndDelete(req.params.id);
        if (!restaurant) return res.status(404).json({ error: 'Restaurant not found' });
        res.json({ message: 'Restaurant deleted' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});



export default router;
