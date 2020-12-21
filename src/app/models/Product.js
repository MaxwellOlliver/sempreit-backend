import Sequelize from 'sequelize';

class Product extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          primaryKey: true,
        },
        description: Sequelize.STRING,
        value: Sequelize.STRING,
      },
      { sequelize }
    );

    return this;
  }
}

export default Product;
