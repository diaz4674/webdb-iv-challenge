const express = require('express');
const server = (express());

server.use(express.json())

const knex = require('knex');
const dbConfig = require('./knexfile.js');
const db = knex(dbConfig.development);

server.get('/', (req, res) => {
    res.send('Welcome !')
})

server.get('/api/dishes', (req, res) => {
    db('dish')
        .then(results => res.json(results))
        .catch(err => res.json(err))
})

server.get('/api/recipes', (req, res) => {
    db('recipe')
        .then(results => res.json(results))
        .catch(err => res.json(err))
})

server.post('/api/dishes', (req, res) => {
    db('dish').insert(req.body)
        .then(newFood => res.json(newFood))
        .catch(err => res.json(err))
})

server.get('/api/dishes/:id', (req, res) => {
    db('dish')
        .where({id: req.params.id})
        .first()
        .then(item => res.json(item))
        .catch(err => res.json(err))
})

server.post('/api/recipes', (req, res) => {
    db('recipe').insert(req.body)
        .then(newRecipe => res.json(newRecipe))
        .catch(err => res.json({message: 'Error could not add new Recipe', err}))
})

module.exports = server;