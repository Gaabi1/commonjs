//Todas as funções que lidam com o produto
async function getFullName(codeId, productName) {
    console.log("Product: " + codeId + "--" + productName)
    await doBreakLine()
}

//hidden function 
async function doBreakLine() {
    console.log("\n")
}

async function getProductLabel(productName) {
    console.log("Product: " + productName)
}

module.exports = {
    getFullName,
    getProductLabel,
}