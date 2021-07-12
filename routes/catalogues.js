const express = require("express");
const {
  getCatalogues,
  createtCatalogue,
  updateCatalogue,
  deleteCatalogue,
} = require("../controllers/catalogues");
const router = express.Router();

router.route("/").get(getCatalogues).post(createtCatalogue);
router.route("/:id").put(updateCatalogue).delete(deleteCatalogue);

module.exports = router;
