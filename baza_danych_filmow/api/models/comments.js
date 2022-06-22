const {Sequelize, DataTypes}=require('sequelize');
const sequelize=require('../../secrets/database').sequelize;

//nazwa modelu -> comment
const Comment = sequelize.define('comment', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  komentarz: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'opinie',
  timestamps: false
});


module.exports=Comment;