const express = require("express");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const app = express();
const bodyParser = require("body-parser");
const usersRoutes = require("./routes/users.routes");


app.use(bodyParser.json());
const swaggerOption = {
  swaggerDefinition: (swaggerJsdoc.Options = {
    info: {
      title: "Online Voting",
      description: " Voting API ",
     
    },
  }),
  apis: ["index.js", "./routes/*.js"],
};

const swaggerDocs = swaggerJsdoc(swaggerOption);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));


app.use("/users", usersRoutes);
app.use("/query",usersRoutes );
app.use("/options",usersRoutes );
app.use("/vote",usersRoutes );
app.use("/details",usersRoutes);

app.listen(3000, () => {
  console.log("Connected");
});
