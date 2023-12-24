"use strict";
import { Model } from "sequelize";

export interface TaskAttributes {
  id: number;
  userId: number;
  projectId: number;
  sprintId: number;
  description: string;
}

export interface TaskInputAttributes {
  userId: number;
  projectId:number;
  sprintId: number;
  description: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class task extends Model<TaskAttributes> implements TaskAttributes {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    id!: number;
    userId!: number;
    projectId!: number;
    sprintId!: number
    description!: string;

    static associate(models: any) {
      models.task.belongsTo(models.user, {
        foreignKey: "user_id",
      });

      models.task.belongsTo(models.project,{
        foreignKey: "project_id"
      });

      models.task.belongsTo(models.sprint,{
        foreignKey: "sprint_id"
      })
    }
  }

  task.init(
    {
      id: {
        type: DataTypes.BIGINT(20),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      userId: {
        type: DataTypes.BIGINT(20),
        allowNull: false,
        field: "user_id",
      },
      projectId: {
        type: DataTypes.BIGINT(20),
        allowNull: false,
        field: "project_id",
      },
      sprintId: {
        type: DataTypes.BIGINT(20),
        allowNull: false,
        field: "sprint_id",
      },
      description: {
        type: DataTypes.STRING(1000),
        allowNull: false,
        field: "description",
      },
    },
    {
      sequelize,
      modelName: "task",
      freezeTableName: true,
      indexes: [
        // {
        //   name: "task_description",
        //   fields: ["description"],
        // },
      ],
    },
  );
  return task;
};