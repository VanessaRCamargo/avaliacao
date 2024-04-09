const express = require("express")
const controller = require("../controllers/controller")

const routes = express.Router()
  
routes.get("/",controller.getAllitem)
routes.get("/:id",controller.getItemById)
routes.post("/",controller.createItem)
routes.put("/:id",controller.updateItem)
routes.delete("/:id",controller.deleteItem)

module.exports = routes