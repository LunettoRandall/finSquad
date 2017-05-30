// DEPENDENCIES
// We require express so we can display to HTML
<<<<<<< HEAD

var request = require("request")
var path = require("path"); 

=======
var request = require("request")
var path = require("path"); 
>>>>>>> a4b5cb222d95a75a45cbd4a23902afabbb73f749
var express = require("express");
// Router sets up 
var router = express.Router();

var dbManager = require("../models/dbManager.js");

router.get("/", function(req, res){
    res.sendFile(path.join(__dirname,"../public/assets/graphtest.html"));
    // USE HANDLEBARS HERE TO RENDER PAGE 
    // POPULATES THE FRONT PAGE WITH POSTS
}); 

router.get("/tblcurrency", function(req,res){
    dbManager.getAll_tbl_currency(function(tableInfo){
        res.json(tableInfo); 
        // console.log(tableInfo)
    });
});

//NEEDS TO BE WORKED ON. Will post to tblgeneralpost. 
router.post("/post_generalpost", function(req, res){
	dbManager.addToGeneralPost(); 
});
// THIS ROUTER WORKS. Will Get all post from general post. 
router.get("/get_all_general_post", function(req, res){
	dbManager.grabAllGeneralPost(function(generalpost){
		res.json(generalpost); 
	}); 
}); 
// NEEDS TO BE WORKED ON. In charge of grabbing all friends post. 
router.get("/api/:userid/allfriendspost", function(req, res){
    dbManager.getAllFriendsPost(function(friendsPost){
        res.json(friendsPost); 
    }); 
}); 
// NEEDS TO BE WORKED ON. 
router.post("privatepost", function(req, res){
    dbManager.insertPrivatePost(function(info){
            res.json(info); 
    }); 
});

// Create all our routes and set up logic within those routes where required.
/*
router.get("/", function(req, res) {  
    db.Stock.findAll({}).then(function(data) {
        console.log("get all")
        console.log(data)
        var hbsObject = {
            stocks: data
        };
        res.render("index", hbsObject)
    });
});

router.get("/api/stocks?", function(req, res) {
    db.Stock.findAll({}).then(function(data) {
        var hbsObject = {
            stocks: data
        };
        res.json(hbsObject)
    });
});

router.post("/", function(req, res) {
<<<<<<< HEAD

   
=======
>>>>>>> a4b5cb222d95a75a45cbd4a23902afabbb73f749
    var newStock = req.body;
    db.Stock.create({
        currency: newStock.currency,
        priceUSD: newStock.priceUSD,
        priceBTC: newStock.priceBTC
<<<<<<< HEAD

=======
>>>>>>> a4b5cb222d95a75a45cbd4a23902afabbb73f749
    }).then(function() {
        res.redirect("/")

    })

});

router.put("/api/stocks/:id", function(req, res) {
    var id = req.params.id;
    console.log(req.params)
        // console.log(req.body.drinken)
    db.Stock.update({
        priceUSD: newStock.priceUSD,
        priceBTC: newStock.priceBTC
    }, {
        where: {
            id: id
        }
    }).then(function() {
        res.redirect("/")
    });
});

router.delete("/api/stocks/:id", function(req, res) {
    var id = req.params.id;
    db.Stock.destroy({
        where: {
            id: id
        }
    }).then(function() {
        res.redirect("/")
    })
});
*/
// Export routes for server.js to use.
module.exports = router;



