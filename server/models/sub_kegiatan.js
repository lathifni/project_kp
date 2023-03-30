'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class sub_kegiatan extends Model {
    static associate(models) {
      sub_kegiatan.belongsTo(models.kegiatan, {
        foreignKey: 'rek_PK4'
      }),
      sub_kegiatan.hasMany(models.pengeluaran, {
        foreignKey: 'rek_PKSk4'
      })
    }
  }
  sub_kegiatan.init({
    id: {
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      type: DataTypes.INTEGER
    },
    rek_PKSk4: {
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
    modelName: 'sub_kegiatan',
  });
  return sub_kegiatan;
};