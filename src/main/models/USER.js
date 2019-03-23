module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
    userId: {
      type: DataTypes.INTEGER(12),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'USER_ID'
    },
    emailId: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'EMAIL_ID'
    },
    firstName: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'FIRST_NAME'
    },
    lastName: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'LAST_NAME'
    },
    creTs: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'CRE_TS'
    },
    updTs: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'UPD_TS'
    },
    creUserId: {
      type: DataTypes.STRING(256),
      allowNull: false,
      field: 'CRE_USER_ID'
    },
    updUsrId: {
      type: DataTypes.STRING(256),
      allowNull: true,
      field: 'UPD_USR_ID'
    }
  }, {
    tableName: 'USER',
    timestamps: true,
    createdAt: 'creTs',
    updatedAt: 'updTs'
  });
};
