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
      // kwitansi.belongsTo(models.laporan_bulanan, {
      //   foreignKey: 'id_LB'
      // }),
      kwitansi.belongsTo(models.pengeluaran, {
        foreignKey: 'rek_P5'
      }),
      kwitansi.belongsTo(models.staff, {
        foreignKey: 'NIP'
      })
    }
  }
  kwitansi.init({
    id: {
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      type: DataTypes.INTEGER
    },
    tahun: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.INTEGER
    },
    bulan: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    total: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    nama: {
      type: DataTypes.STRING,
      allowNull: false
    },
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