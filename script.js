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


/*criando um array de imagens*/
var imagens=[
    'img/1.jpg',
    'img/2.jpg',
    'img/3.jpg',
];


/*criando um array de variáveis*/
var index =0;
var time =2000;


/*criando um array de função*/
function slideShow(){
    document.getElementById('image')
}