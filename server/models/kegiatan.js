'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class kegiatan extends Model {
    static associate(models) {
      kegiatan.belongsTo(models.program, {
        foreignKey: 'rek_P4'
      }),
      kegiatan.hasMany(models.sub_kegiatan, {
        foreignKey: 'rek_PK4'
      })
    }
  }
  kegiatan.init({
    id: {
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      type: DataTypes.INTEGER
    },
    rek_PK4: {
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
    modelName: 'kegiatan',
  });
  return kegiatan;
};