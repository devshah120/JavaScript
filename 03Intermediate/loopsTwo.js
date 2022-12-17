//forOf Loop use for arrays

const names = ["Youtube","Facebook","Netflix","Apple","Amazon"]

for(const n of names){
    console.log(n);
}


//forIn Loop use for Objects

const symbols={
    yt:"Youtube",
    fb:"Facebook",
    ig:"Instagram"
}

for(const s in symbols){
    console.log(`key is ${s} and value is ${symbols[s]}`);
}