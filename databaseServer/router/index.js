const controller = require("../Controller");

function router(req, res) {
  if (req.url === "api/create" && req.method === "POST") {
    controller.handleCreate(req,res);
  }
  if (req.url === "api/update" && req.method === "PUT") {
    controller.handleUpdate;
  }
  if (req.url === "api/delete" && req.method === "DELETE") {
    controller.handleDelete;
  }
  if (req.url === "api/read" && req.method === "GET") {
    controller.handleRead;
  }
}

module.exports = {
  router
}