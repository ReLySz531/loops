for(let i= 1000; i >= 0; i = i - 2) {
    console.log(i);
}
for(let i = 0; i <= 10000; i++) {
    if (i == "2500") alert("A quarter of the way there!");
    else if (i == "5000") alert("Halfway there!");
    else if (i == "10000") alert("The loop is done!");
}
const favourite = ["Naruto", "My Hero Academia", "The Walking Dead", "Yugioh", "Destination Truth"]
const number = ["#1", "#2", "#3", "#4", "#5"]
for(let i=0; i < favourite.length; i++) {
    console.log(`My ${number[i]} favourite tv show is ${favourite[i]}.`);
}