const EntitySchema = require('typeorm').EntitySchema

const AddressEntity = new EntitySchema({
  name: "Address",
  target: "Address",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true
    },
    area: {
      type: "varchar"
    },
    road: {
      type: "varchar"
    }
  },
  relations: {
    user: {
      type: 'many-to-one',
      target: 'User',
      inverseSide: 'addresses',
      joinColumn: 'userId',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    }
  }
})

module.exports = { AddressEntity }