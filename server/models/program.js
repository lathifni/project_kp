'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class program extends Model {
    static associate(models) {
      program.hasMany(models.kegiatan, {
        foreignKey: 'rek_P4'
      })
    }
  }
  program.init({
    id: {
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      type: DataTypes.INTEGER
    },
    rek_P4: {
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
    modelName: 'program',
  });
  return program;
};