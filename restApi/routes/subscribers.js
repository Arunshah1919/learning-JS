const express = require("express");
const router = express.Router();
const subscriber  = require("../models/subscriber");

router.get("/", async(req,res)=>{
    try {
        const subscribers = await subscriber.find();
        res.json(subscribers);
    } catch (err) {
        res.status(500).json({message: err.message})
    };
});

router.get("/:id",getSubscriber, (req,res)=>{
    res.json({id:req.params.id});
});

router.post("/", async (req,res)=>{
    const subscribers = new subscriber({
        name: req.body.name,
        subscribedTochannel: req.body.subscribedToChannel
    });
    try {
        const newsubscriber = await subscribers.save()
        res.status(201).json(newsubscriber)
    } catch (err) {
        res.status(400).json({message: err.message})
    }
});

router.patch("/:id", getSubscriber,async (req,res)=>{
    if (req.body.name != null) {
        res.subscriber.name = req.body.name
    }
    if (req.body.subscribedTochannel != null) {
        res.subscriber.subscribedTochannel = req.body.subscribedTochannel
    };
    try {
        const updatedSubscriber = await res.subscriber.save();
        res.json(updatedSubscriber);
    } catch (err) {
        res.status(400).json({message: err.message})
    }
});

router.delete("/:id",getSubscriber,async (req,res)=>{
    try {
        await res.subscriber.remove();
        res.json({message: "Deleted Subscriber"})
    } catch (err) {
        res.status(500).json({message: err.message})
    }
});
 async function getSubscriber(req, res, next) {
    let subscribers
    try {
        subscribers= await subscriber.findById(req.params.id);
        if (subscribers == null) {
            return res.status(404).json({message: "Cannot Find Subscriber"})
        }
    } catch (err) {
        return res.status(500).json({message1: err.message})
    }
    res.subscriber = subscriber;
    next()
}

module.exports = router;