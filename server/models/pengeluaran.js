'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pengeluaran extends Model {
    static associate(models) {
      pengeluaran.belongsTo(models.sub_kegiatan, {
        foreignKey: 'rek_PKSk4'
      }),
      pengeluaran.hasMany(models.notas, {
        foreignKey: 'rek_P5'
      })
    }
  }
  pengeluaran.init({
    id: {
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      type: DataTypes.INTEGER
    },
    rek_P5: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: true
    },
    tahun: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    nama: {
      type: DataTypes.STRING,
      allowNull: false
    },
    triwulan1: {
      type: DataTypes.INTEGER
    },
    triwulan2: {
      type: DataTypes.INTEGER
    },
    triwulan3: {
      type: DataTypes.INTEGER
    },
    triwulan4: {
      type: DataTypes.INTEGER
    },
    createdAt: {
      type: DataTypes.DATEONLY,
      defaultValue: sequelize.literal('NOW()')
    },
    updatedAt: {
      type: DataTypes.DATEONLY,
      defaultValue: sequelize.literal('NOW()')
    }
  }, {
    sequelize,
    modelName: 'pengeluaran',
  });
  return pengeluaran;
};