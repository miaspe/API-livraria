const route = require ('express').Router();
const usercont = require ('../controle/user.cont');

route.post("/", usercont.create);
//route.get("/", usercont.find);
//route.get("/:id", usercont.findid);
//route.post("/", usercont.create);

module.exports = route;