/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sg2cv9cs99h3uhf")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "8zynvipo",
    "name": "user",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "pn1ekldvd151ywg",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sg2cv9cs99h3uhf")

  // remove
  collection.schema.removeField("8zynvipo")

  return dao.saveCollection(collection)
})
