const router = require("express").Router();


router.get("/", (req, res) => {
    res.json({
        message: "Working!"
    });
});




module.exports = router;