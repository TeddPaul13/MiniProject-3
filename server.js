const cors = require("cors");

let express = require("express");

let app = express();
let dbConnect = require("./dbConnect");
dbConnect.connectMysql();

const port = process.env.PORT || 8080;
app.use(express.json());

app.use(cors());

//Set Router
const teamRouters = require("./routes/teamRoutes");
app.use("/api/teams", teamRouters);

app.listen(port, () => {
  console.log("Listening on port ", port);
});
