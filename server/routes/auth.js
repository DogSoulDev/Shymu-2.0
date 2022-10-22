const router = require("express").Router();

router.get("/login", (req,res)=>{
  return res.send(req.headers.authorization);
})

module.exports = router;


//!Para hacer peticiones tenemos que meter en el Header de Postman en KEY: Authorization y en VALUE:El Token
