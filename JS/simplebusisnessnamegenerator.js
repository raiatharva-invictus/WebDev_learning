let Adjectives = {
    1 : "crazy",
    2 : "amazing",
    3 : "fire"
}
let ShopName = {
    1 : "engine",
    2 : "food",
    3 : "garments"
}
let AnotherWord = {
    1 : "bros",
    2 : "limited",
    3 : "hub"
}

let randomAdjective= Adjectives[Math.floor(Math.random() * 3) + 1];
let randomShopName = ShopName[Math.floor(Math.random() * 3) + 1];
let randomWord = AnotherWord[Math.floor(Math.random() * 3) + 1];

console.log(randomAdjective,randomShopName,randomWord)
