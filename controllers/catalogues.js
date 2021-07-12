const asyncHandler = require("../middleware/async");
const Catalogue = require("../models/Catalogue");
const ErrorResponse = require("../utils/errorResponse");

// @desc    get all catelogues
// @route   GET /api/v1/catelogues
// @access  Public
exports.getCatalogues = asyncHandler(async (req, res, next) => {
  const catalogues = await Catalogue.find();
  res.status(200).json({
    success: true,
    count: catalogues.length,
    data: catalogues,
  });
});

// @desc    create new catelogue
// @route   POST /api/v1/catelogues
// @access  Private
exports.createtCatalogue = asyncHandler(async (req, res, next) => {
  const catalogue = await Catalogue.create(req.body);

  res.status(201).json({
    success: true,
    data: catalogue,
  });
});

// @desc    Update catelogue
// @route   PUT /api/v1/catelogues/:id
// @access  Private
exports.updateCatalogue = asyncHandler(async (req, res, next) => {
  const catalogue = await Catalogue.findByIdAndUpdate(req.params.id, req.body, {
    new: true, //to get updated data back in response
    runValidators: true,
  });

  if (!catalogue) {
    return next(
      new ErrorResponse(`Catalogue not found with if of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({
    success: true,
    data: catalogue,
  });
});

// @desc    Delete catelogue
// @route   DELETE /api/v1/catelogues/:id
// @access  Private
exports.deleteCatalogue = asyncHandler(async (req, res, next) => {
  const catelogue = await Catalogue.findByIdAndDelete(req.params.id);

  if (!catelogue) {
    return next(
      new ErrorResponse(`Catalogue not found with if of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({
    success: true,
    data: catelogue,
  });
});
