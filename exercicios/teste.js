
async function postarDados(url, product){
    const res = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            body: JSON.stringify(product)
        }
    })
}
let setproducts

setproducts = ((prev) => [...prev, product])

