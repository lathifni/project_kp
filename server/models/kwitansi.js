'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class kwitansi extends Model {
    static associate(models) {
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