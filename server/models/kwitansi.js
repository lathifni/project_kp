'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class kwitansi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      kwitansi.belongsTo(models.laporan_bulanan, {
        foreignKey: 'id_LB'
      }),
      kwitansi.belongsTo(models.staff, {
        foreignKey: 'NIP'
      })
    }
  }
  kwitansi.init({
    id: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.INTEGER
    },
    tahun: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.INTEGER
    },
    total: DataTypes.INTEGER,
    status: DataTypes.INTEGER,
    nama: DataTypes.STRING,
    createdAt: {
      type: DataTypes.DATEONLY,
      defaultValue: sequelize.literal('NOW()')
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: sequelize.literal('NOW()')
    }
  }, {
    sequelize,
    modelName: 'kwitansi',
  });
  return kwitansi;
};