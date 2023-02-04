'use strict';
const {
  Model
} = require('sequelize');
const sub_kegiatan = require('./sub_kegiatan');
module.exports = (sequelize, DataTypes) => {
  class staff extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      staff.hasOne(models.akun, {
        foreignKey: 'NIP'
      }),
      staff.hasMany(models.sub_kegiatan, {
        foreignKey: 'NIP'
      })
      staff.hasMany(models.kwitansi, {
        foreignKey: 'NIP'
      })
    }
  }
  staff.init({
    NIP: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: true
    },
    nama: DataTypes.STRING,
    TTL: DataTypes.STRING,
    alamat: DataTypes.STRING,
    telp: DataTypes.STRING,
    createdAt: {
      type: DataTypes.DATEONLY,
      allowNull:true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    updatedAt: {
      type: DataTypes.DATEONLY,
      allowNull:true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    modelName: 'staff',
  });
  return staff;
};