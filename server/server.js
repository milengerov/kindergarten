const express = require("express");

const config = require("./config/config");
const routes = require("./routes");


const app = express();
require("./config/express")(app)
require("./config/mongoose")(app);



app.use(routes);

// app.get("/", (req, res) => {
//     res.json({
//         message: "Working!"
//     });
// });


app.listen(config.PORT, () => {
    // console.log(process.env.NODE_ENV);
    console.log(`Server is listening on port ${config.PORT}}`);
});