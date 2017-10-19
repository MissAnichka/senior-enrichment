'use strict'
const api = require('express').Router()
const {Students, Campuses} = require('../db/models')

api.get('/', (req,res,next) => {
    Students.findAll({
        include: Campuses
    })
        .then(students => res.json(students))
        .catch(next)
})

api.get('/:StudentId', (req,res,next) => {
    Students.findById(
        Number(req.params.StudentId),
        {include: Campuses})
        .then(student => res.json(student))
        .catch(next)
})

api.post('/', (req,res,next) => {
    console.log(req.body)
    Students.create(req.body)
        .then(student => res.json(student))
        .catch(next)
})

api.put('/:StudentId', (req,res,next) => {
    Students.findById(req.params.StudentId)
        .then(student => student.update(req.body))
        .then(newstudent => res.json(newstudent))
        .catch(next)
})

api.delete('/:StudentId', (req,res,next) => {
    let id = Number(req.params.StudentId)
    Students.destroy({where: {id}})
        .then(id => res.json(id))
        .catch(next)
})

module.exports = api;