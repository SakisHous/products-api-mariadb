const EntitySchema = require('typeorm').EntitySchema

const PhoneEntity = new EntitySchema({
  name: "Phone",
  target: "Phone",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true
    },
    phoneType: {
      type: "varchar"
    },
    phoneNumber: {
      type: "varchar"
    }
  },
  relations: {
    user: {
      type: 'many-to-one',
      target: 'User',
      inverseSide: 'phones',
      joinColumn: 'userId',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    }
  }
})

module.exports = { PhoneEntity }