"use strict";
//Aplication Depenencies (require)
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const superagent = require('superagent');
let pg = require('pg');




//application setup (port,server,use cors)
const PORT = process.env.PORT || 3000;
const server = express();
server.use(cors());

server.use(express.static('./public'));
server.set('view engine','ejs');// hi theeeere am using ejs !
server.get('/searches/new',(req,res)=>{
    res.render('pages/searches/new.ejs');

})








        server.listen(PORT, () => {
            console.log(`listining on port ${PORT}`);
        });
