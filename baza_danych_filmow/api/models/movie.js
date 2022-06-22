const {Sequelize, DataTypes}=require('sequelize');
const sequelize=require('../../secrets/database').sequelize;

// Movie Model
//nazwa modelu -> movie
const Movie = sequelize.define('movie', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    nazwa: {
      type: DataTypes.STRING,
      allowNull: false
    },
    rok_produkcji: {
      type: DataTypes.STRING,
      allowNull: false
    },
    oceniany: {
      type: DataTypes.STRING,
      allowNull: false
    },
    czas_trwania_w_min: {
      type: DataTypes.STRING,
      allowNull: false
    },
    gatunek: {
      type: DataTypes.STRING,
      allowNull: false
    },
    rezyser: {
      type: DataTypes.STRING,
      allowNull: false
    },
    plakat: {
      type: DataTypes.STRING,
      allowNull: false
    },
    oceny: {
      type: DataTypes.STRING,
      allowNull: false
    },
    opis: {
      type: DataTypes.STRING,
      allowNull: false
    },
    od_ilu_lat: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'filmy',
    timestamps: false
  });

module.exports=Movie;