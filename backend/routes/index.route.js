const express = require('express');
const indexRouter = express.Router();

const leadRouter = require('./lead.route.js');


indexRouter.use("/api/v1", leadRouter);



module.exports = indexRouter;
