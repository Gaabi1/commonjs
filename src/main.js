const {getFullName} = require("./services/products")
const products = require("./services/products")
const config  = require("./services/config")
const dataBase = require("./services/database")

async function main(){
    console.log("Carrinho de compra: ");
    
    products.getFullName("103", "mousepad")
    
    getFullName("105", "nootbook")

    products.getProductLabel("Mouse")

    console.log(config.production)

    dataBase.connectToDataBase("shopping")
    
}

main();