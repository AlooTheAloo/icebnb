/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sg2cv9cs99h3uhf")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "njl9cgaf",
    "name": "ItemState",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sg2cv9cs99h3uhf")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "njl9cgaf",
    "name": "State",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
