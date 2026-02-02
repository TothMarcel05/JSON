// 1. Hozz létre egy üres JSON objektumot. 
const uresObj = {}

// 2. Adj hozzá kulcs-érték párokat a JSON objektumhoz. 
uresObj.nev = "Jakab"
uresObj.kor = 20;

// 3. Konvertáld a JSON objektumot szöveges formátumba (JSON.stringify). 
const jsonSzoveg = JSON.stringify(uresObj)

// 4. Olvass be egy JSON szöveget és alakítsd át objektummá (JSON.parse). 
const jsnonString = '{"nev": "Aladár", "kor": 20}'
console.log(jsnonString)
const objektum = JSON.parse(jsnonString)
console.log(objektum)

// 5. Módosítsd a létrehozott objektumot, majd frissítsd a JSON szöveget. 
objektum.kor = 25
const frissitettJson = JSON.stringify(objektum)
console.log(frissitettJson + "frissítettJson")

// 6. Távolíts el egy kulcs-érték párt a JSON objektumból. 
delete objektum.kor
console.log(objektum)

// 7. Ellenőrizd, hogy egy adott kulcs létezik-e a JSON objektumban. 
const visszaAlakított = JSON.parse(frissitettJson)
if ("nev" in objektum) {
    console.log("Létezik a kulcs" + objektum.nev)
}

// 8. Hozz létre egy JSON tömböt és adj hozzá elemeket. 
const tombGyumolcsok = []

tombGyumolcsok.push("alma")
tombGyumolcsok.push("körte")

const jsonTomb = JSON.stringify(tombGyumolcsok)
console.log(jsonTomb)

// 9. Szűrd ki a JSON tömböt egy adott feltétel alapján. 
const tanulok = [
    {nev: "Kovács", kor:19},
    {nev: "Nagy", kor:22},
    {nev: "Kiss", kor:21},
    {nev: "Kádár", kor:25}
]

const fiatalok = []
for (const tanulo of tanulok)
{
    if (tanulo.kor < 25) {
        fiatalok.push(tanulo)
    }
}

console.log(fiatalok)

// Filter
const fiatalokFilter = tanulok.filter(tanulo => tanulo.kor < 25)
console.log(fiatalokFilter)
const tanulok2 = tanulok

// 10. Rendezd növekvő sorrendbe a JSON tömb elemeit egy kulcs alapján. 
for (let i = 0; i < tanulok.length; i++){
    for (let j = 0; j < tanulok.length; j++){
        if (tanulok[j].kor < tanulok[j+1].kor)
        {
            let temp = tanulok[j]
            tanulok[j] = tanulok[j+1]
            tanulok[j+1] = temp

        }
    }
}

console.log(tanulok)

tanulok2.sort((a,b) => a.kor - b.kor)
console.log(tanulok2)



// 11. Keresd meg a JSON tömb legnagyobb elemét egy adott kulcs alapján. 
// 12. Számolj össze egy JSON tömbben található számokat. 
// 13. Cseréld ki egy JSON objektum értékét egy másik értékre. 
// 14. Másold le egy JSON objektumot és módosítsd az másolt objektumot anélkül, hogy az
// eredeti módosulna. 
// 15. Tárold a JSON objektumot egy fájlban és olvasd be onnan