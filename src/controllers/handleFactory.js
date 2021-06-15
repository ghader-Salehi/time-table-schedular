const AppError = require('../utils/AppError');
const catchAsync = require('../utils/catchAsync');

exports.createNewDocument = (Model) =>
  catchAsync(async (req, res, next) => {
    const modelName = Model.collection.collectionName;
    const doc = await Model.create(req.body); // this is not secure

    res.status(201).json({
      status: 'Created',
      success: true,
      message: `${modelName} created`,
      data: {
        [modelName]: doc,
      },
    });
  });

exports.getListOfDocuments = (Model, findOptions) =>
  catchAsync(async (req, res, next) => {
    const modelName = Model.collection.collectionName;
    const doc = await Model.find({
      findOptions,
    });
    // TODO: pagination
    res.status(200).json({
      status: 'success',
      success: true,
      message: `${modelName}s found`,
      data: {
        [modelName]: doc,
      },
    });
  });

exports.getOneByID = (Model, populations) =>
  catchAsync(async (req, res, next) => {
    const modelName = Model.collection.collectionName;
    if (!req.params.id) return next(new AppError('Provide an ID', 400));
    const doc = await Model.findById(req.params.id);
    if (!doc)
      return next(
        new AppError(`${modelName} with ID ${req.params.id} does not exist`)
      );
    res.status(200).json({
      status: 'OK',
      success: true,
      message: `${modelName} found`,
      data: {
        [modelName]: doc,
      },
    });
  });

exports.updateOneByID = (Model, updateOptions) =>
  catchAsync(async (req, res, next) => {
    const modelName = Model.collection.collectionName;
    const doc = await Model.findOneAndUpdate(
      req.params.id,
      req.body,
      updateOptions
    );
    if (!doc)
      return next(
        new AppError(`${modelName} with ID ${req.params.id} does not exist`)
      );
    res.status(200).json({
      status: 'OK',
      success: true,
      message: `${modelName} updated`,
      data: {
        [modelName]: doc,
      },
    });
  });

exports.deleteOneByID = (Model) =>
  catchAsync(async (req, res, next) => {
    const modelName = Model.collection.collectionName;
    const doc = await Model.findOneAndDelete(req.params.id);
    if (!doc) return next(new AppError(`${modelName} does not exist`));
    res.status(200).json({
      status: 'OK',
      success: true,
      message: `${modelName} deleted`,
      data: {
        [modelName]: doc,
      },
    });
  });
