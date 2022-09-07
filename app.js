const express = require("express");
const addDays = require("date-fns/addDays");
const app = express();
const dateResponse = app.get("/", (request, response) => {
  let date = new Date();
  const newDate = addDays(
    new Date(`${date.getFullYear()},${date.getMonth() + 1},${date.getDate()}`),
    100
  );
  response.send(
    `${newDate.getDate()}/${newDate.getMonth() + 1}/${newDate.getFullYear()}`
  );
});
app.listen(3000);
module.exports = dateResponse;
