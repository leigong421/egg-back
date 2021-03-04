'use strict';

module.exports = app => {
  const {
    STRING,
    INTEGER,
  } = app.Sequelize;

  const EmperorHasEngineering = app.model.define('emperor_has_engineering', {
    // id: {
    //   type: INTEGER,
    //   primaryKey: true,
    //   autoIncrement: true,
    // },
    engineeringsName: STRING(50),
    emperorName: STRING(50),
    engineeringsId: {
      type: INTEGER,
      primaryKey: true,
    },
    emperorId: {
      type: INTEGER,
      primaryKey: true,
    },

  }, {
    freezeTableName: true,
    timestamps: false,
  });

  return EmperorHasEngineering;
};