//buscando a lista de um array usando o for

let msg= document.getElementById('msg')

const usuarios=[
    {nome: "huguinho", idade:18},
    {nome: "Zezinho", idade:19},
    {nome: "Luizinho", idade:20},
];

const Users = usuarios.length;

for(let i=0; i<Users; i++){
    msg.innerHTML +=`<p>${usuarios[i].nome} ${usuarios[i].idade}</p>`
}

