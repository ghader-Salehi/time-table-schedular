const AppError = require('../utils/AppError');
const catchAsync = require('../utils/catchAsync');
const APIFeatures = require('../utils/apiFeatures');

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

exports.getListOfDocuments = (Model, populations) =>
  catchAsync(async (req, res, next) => {
    const findOptions = req.findOptions ? req.findOptions : {};
    const modelName = Model.collection.collectionName;
    const features = new APIFeatures(Model.find(findOptions), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();
    if (req.query.rule)
      features.query = features.query.find({ rule: req.query.rule });
    const docs = await features.query.populate(populations);
    res.status(200).json({
      status: 'success',
      success: true,
      message: `${modelName}s found`,
      data: {
        [modelName]: docs,
      },
    });
  });

exports.getOneByID = (Model, populations) =>
  catchAsync(async (req, res, next) => {
    const modelName = Model.collection.collectionName;
    if (!req.params.id) return next(new AppError('Provide an ID', 400));
    const doc = await Model.findById(req.params.id).populate(populations);
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
    const doc = await Model.findByIdAndUpdate(
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
    const doc = await Model.findByIdAndDelete(req.params.id);
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
