'use strict'
const api = require('express').Router()
const {Campuses, Students} = require('../db/models')

api.get('/', (req,res,next) => {
    Campuses.findAll()
        .then(campuses => res.json(campuses))
        .catch(next)
})

api.get('/:CampusId', (req,res,next) => {
    Campuses.findById(
        Number(req.params.CampusId),
        {include: Students})
        .then(campusAndItsStudents => res.json(campusAndItsStudents))
        .catch(next)
})

api.post('/', (req,res,next) => {
    Campuses.create(req.body)
        .then(campus => res.json(campus))
        .catch(next)
})

api.put('/:CampusId', (req,res,next) => {
    Campuses.findById(Number(req.params.CampusId))
        .then(campus => campus.update(req.body))
        .then(campus => res.json(campus))
        .catch(next)
})

api.delete('/:CampusId', (req,res,next) => {
    let id = Number(req.params.CampusId)
    Campuses.destroy({where: {id}})
        .then(() => res.redirect("/api/campuses"))
        .catch(next)
})

module.exports = api;