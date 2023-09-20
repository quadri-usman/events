const Event = sequelize.define(
  "Event",
  {
    id: {
      type: UUID,
      primaryKey: true,
      defaultValue: UUIDV4,
    },
    title: {
      type: STRING,
      allowNull: false,
    },
    description: {
      type: STRING,
    },
    creator: {
      type: UUID,
      references: {
        model: "Users",
        key: "id",
      },
    },
    location: {
      type: STRING,
    },
    start_at: {
      type: DATE,
    },
    end_at: {
      type: DATE,
    },
    thumbnail: {
      type: STRING,
      comment: "URL to the thumbnail",
    },
  },
  {
    tableName: "events",
    modelName: "events",
  }
);

module.exports = {
  User,
  InterestedEvent,
  UserGroup,
  GroupEvent,
  Group,
  Event,
  Comment,
  Image,
};
