const sequelize = require('../config/connection');
const { Category, Product, Tag, ProductTag } = require('../models');

const categoryData = require('./categoryData.json');
const productData = require('./productData.json');
const tagData = require('./tagData.json');
const productTagData = require('./productTagData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Category.bulkCreate(categoryData);
  await Product.bulkCreate(productData);
  await Tag.bulkCreate(tagData);
  await ProductTag.bulkCreate(productTagData);

  process.exit(0);
};

seedDatabase();
