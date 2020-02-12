const express = require('express')
const router = express.Router()
const Adventure = require('../models/adventure')
const Comment = require('../models/comment')

router.post("/post", (req,res) => {
    const {title, author, genre, description} = req.body

    const newAdventure = new Adventure({
        title: title,
        author: author,
        genre: genre,
        description: description
    })

    newAdventure.save((err, savedTopic) => {
        if (err) return res.json(err)
        res.json(savedTopic)
    })
})

router.get("/all", (req,res) => {
    Adventure.find({}).sort({date: -1}).then(results => res.json(results))
})

router.get("/family", (req,res) => {
    Adventure.find({genre: "family"}).sort({date: -1}).then(results => res.json(results))
})

router.get("/health", (req,res) => {
    Adventure.find({genre: "health"}).sort({date: -1}).then(results => res.json(results))
})

router.get("/social", (req,res) => {
    Adventure.find({genre: "social"}).sort({date: -1}).then(results => res.json(results))
})

router.get("/emotion", (req,res) => {
    Adventure.find({genre: "emotion"}).sort({date: -1}).then(results => res.json(results))
})

router.get("/psych", (req,res) => {
    Adventure.find({genre: "psych"}).sort({date: -1}).then(results => res.json(results))
})

router.get("/finance", (req,res) => {
    Adventure.find({genre: "finance"}).sort({date: -1}).then(results => res.json(results))
})

router.get("/api/story/:id", (req,res) => {
    Adventure.findById(req.params.id).then(results => res.json(results))
})

router.post("/submit/:id", function(req,res){
    const { author , body, postId } = req.body

    const newComment = new Comment({
        author: author,
        body: body,
        postId: postId

    })

    newComment.save((err, dbComment) => {
        if (err) return res.json(err)
        res.json(dbComment)
        console.log( dbComment)
    })
})

router.get("/api/comment/:id", function (req, res) {
    Comment.find({ postId: req.params.id }).then(results => res.json(results))
})


module.exports = router