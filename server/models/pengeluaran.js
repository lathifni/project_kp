'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pengeluaran extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      pengeluaran.belongsTo(models.sub_kegiatan, {
        foreignKey: 'rek_PKSk4'
      }),
      // pengeluaran.hasMany(models.laporan_bulanan, {
      //   foreignKey: 'rek_P5'
      // })
      pengeluaran.hasMany(models.kwitansi, {
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
    anggaran: {
      type: DataTypes.INTEGER
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