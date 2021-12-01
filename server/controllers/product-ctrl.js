const db = require('../db/db')
const  ObjectID = require('mongodb').ObjectId;
createProduct = async (req, res) => {    
    var state;
    if (req.body.state == "true"){
        state =  true;
    }else{
        state =  true;
    }

    const collection = db.collection('Products')   
    
    
    const findResultname = await collection.aggregate([
        {
           "$match": {
              "name": {
                   "$eq": req.body.name
               },
               "state": {
                "$eq": true
                },
               "_id": {
                "$ne": ObjectID(req.params.id)
            }
           }
        } ]).toArray();
    if (findResultname != ""){
        if (findResultname[0].name !== undefined) {
            res.json({message: "El Nombre se encuentra repetido"});
        }       
    }else{
        const findResult = await collection.insertOne({"name": req.body.name, "category": req.body.category,
        "flavor": req.body.flavor, "price": parseInt(req.body.price) ,"state": state });
        res.json({message: "Se creo un producto correctamente"});
    }
}

updateProduct = async (req, res) => {

    var state;
    if (req.body.state == "true"){
        state =  true;
    }else{
        state =  true;
    }


    const collection = db.collection('Products')
    

    const findResultname = await collection.aggregate([
        {
           "$match": {
              "name": {
                   "$eq": req.body.name
               },
               "state": {
                "$eq": true
                },
               "_id": {
                "$ne": ObjectID(req.params.id)
            }
           }
        } ]).toArray();
    if (findResultname != ""){
        if (findResultname[0].name !== undefined) {
            res.json({message: "El Nombre se encuentra repetido"});
        }       
    }else{
        const findResult = await collection.updateMany({ "_id": ObjectID(req.params.id)},
        {
          $set: { "name": req.body.name, "category": req.body.category,
          "flavor": req.body.flavor, "price": parseInt(req.body.price) ,"state": state }
        }
        );
    
        res.json({message: "Se actualizo el producto correctamente"});
    }
  
}

deleteProduct = async (req, res) => {
    //console.log("pasa" + req.params.id);
    const collection = db.collection('Products')    
    const findResult = await collection.updateMany({ "_id": ObjectID(req.params.id)},
    {
      $set: { "state": false }
    }
    );
    res.json(findResult);
}

productById = async (req, res) => {
   
    const collection = db.collection('Products')
 
    const findResult = await collection.find({ "_id": ObjectID(req.params.id)}).toArray();
    res.json(findResult);

}
allProducts = async (req, res) => {
    

    const collection = db.collection('Products')
 
    const findResult = await collection.aggregate([
       {
          "$match": {
             "state": {
                  "$eq": true
              }
          }
       }   
    ]).toArray();
    res.json(findResult);
}

module.exports = {
    createProduct,
    updateProduct,
    deleteProduct,
    productById,
    allProducts,
}
