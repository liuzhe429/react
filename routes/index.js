/**
 * Created by Administrator on 2017/3/30.
 */
let express = require("express");
let router = express.Router();
router.get("/",function(req,res){
    var pageTitle = "LiuZhe's Blog";
    var pageTitle2 = "学习弯道超车的技巧！";
    res.render("index",{pageTitle:pageTitle,pageTitle2:pageTitle2});
});

module.exports = router;