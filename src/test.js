// const image = "image";
// let animals = []
// for (let index = 1 ; index < 11; index++ )
// {
//     let name = `image${index}`;
//     console.log(name);
//     console.log(index)
// }


///////////////////////////////////////

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  

let randomIndex = 0
let randomArr = []

while (randomIndex < 8)
{
    let randomNumber = getRandomInt(14);
    if (randomArr.includes(randomNumber)) 
        continue
    else {
        randomArr.push(randomNumber);
        randomIndex++;
    }
}
console.log(randomArr)
console.log(randomArr.length);
