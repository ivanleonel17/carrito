const connectDB = require('./Database')

const Product = require('./Models/Products')

const jsonProduct = require('./items.json')

// Testing
// Esta función se conecta a la DB, elimina todo lo que hay en la DB y sube la info nueva a la DB
const iniciar = async () => {
    try {
       await connectDB(process.env.MONGO_URL)
       await Product.deleteMany()
       //await Product.updateOne()
       //await Product.updateMany([{},{}])
       await Product.create(jsonProduct)
       console.log('Se efectuó el cambio') 
    } catch (error) {
        console.log(error)
    }
}

iniciar()
