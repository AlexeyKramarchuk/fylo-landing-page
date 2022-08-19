//co wybiera const user=prompt(“o r”) 
const userChoose=prompt("wybierz orla - o albo reszke - r")

setTimeout(() => {
    console.log("3")
}, 1000);
setTimeout(() => {
    console.log("2")
}, 2000);
setTimeout(() => {
    console.log("1")
    const wyloswanePrzezKomp=Math.floor(Math.random() * 1)
    //wylosowane 0 to Orzel
    if(wyloswanePrzezKomp===0 && userChoose==="o"){
        console.log("wygrał user")
    }else{
        console.log("wyrgal komputer")
    }
}, 3000);
//setTimeout(()=>{console.log(3)}, 1000)


//kamien papier nozyce

const user1=prompt("k-kamien, p-papier, n-nozyce")
const user2=prompt("k-kamien, p-papier, n-nozyce")
if(user1==="k" ||user1==="p" || user1==="n" ){

    if((user1==="k" && user2==="p") || (user1==="p" && user2==="k")){
        console.log("Wygral user1")
    }
}else{
    console.log("Nieprawidlowe dane")
}
//zad 7

let ciagZnakow="";

const characters= 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%';
for(let i=0;i<100;i++){
ciagZnakow+=characters.charAt(Math.floor(Math.random()*characters.length))
}
console.log(ciagZnakow)

//zad 8

//1. podanie poczatkowego
let poziomPaliwa=0;
do{
    poziomPaliwa=+prompt("Podaj paliwo 5000 a 30000")
}while(poziomPaliwa<5000 && poziomPaliwa>30000);

//2. TODO: podaj ilosc astronautow 0 < x <7
let astronauci=0;

//3. lot statku
let jakWysoko=0;
do{
    poziomPaliwa=poziomPaliwa-300+100*astronauci;
    jakWysoko=jakWysoko+100;
    console.log("jak wysoko",jakWysoko)
}while(poziomPaliwa<poziomPaliwa-300+100*astronauci)

// 4. 
if(jakWysoko>2000){
    // dotarl do orbity
}else{
    //nie dotarl
}

// wiemy ile razy
for (let index = 0; index < 10; index++) {
    const element = array[index];
    
}
//nie wiem czy ma sie wykonac a jak tak to nie wiadomo ile
while (condition) {
    
}

//przynajmniej raz
do {
    
} while (condition);