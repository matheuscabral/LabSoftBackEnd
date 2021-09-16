const { Router } = require("express");
const {
  createAtleticaControllerFactory,
} = require("../factories/controllers/create-atletica-controller");
const {
  deleteAtleticaControllerFactory,
} = require("../factories/controllers/delete-atletica-controller");
const {
  getAllAtleticasControllerFactory,
} = require("../factories/controllers/get-all-atleticas-controller");
const {
  getAtleticaByIdControllerFactory,
} = require("../factories/controllers/get-atletica-by-id-controller");
const {
  updateAtleticaControllerFactory,
} = require("../factories/controllers/update-atletica-controller");

const router = Router();

const createAlteticaController = createAtleticaControllerFactory();
const getAtleticaByIdController = getAtleticaByIdControllerFactory();
const getAllAtleticasController = getAllAtleticasControllerFactory();
const updateAtleticaController = updateAtleticaControllerFactory();
const deleteAtleticaController = deleteAtleticaControllerFactory();

router.get("/", (req, res) => getAllAtleticasController.handle(req, res));
router.get("/:id", (req, res) => getAtleticaByIdController.handle(req, res));
router.post("/create", (req, res) => createAlteticaController.handle(req, res));
router.put("/update/:id", (req, res) =>
  updateAtleticaController.handle(req, res)
);
router.delete("/delete/:id", (req, res) =>
  deleteAtleticaController.handle(req, res)
);

exports.AtleticaRouter = router;
