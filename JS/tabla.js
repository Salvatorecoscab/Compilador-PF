//Se define la tabla que se va a mandar al Analizador sintáctico
const table=[];

//Se agregan las palabras reservadas
table.push({token:'int',lexema:'int',id:1});
table.push({token:'float',lexema:'float',id:2});
table.push({token:'char',lexema:'char',id:3});
table.push({token:'string',lexema:'string',id:4});
table.push({token:'bool',lexema:'bool',id:5});
table.push({token:'if',lexema:'if',id:6});
table.push({token:'else',lexema:'else',id:7});
table.push({token:'while',lexema:'while',id:8});
table.push({token:'do',lexema:'do',id:9});
table.push({token:'for',lexema:'for',id:10});
table.push({token:'switch',lexema:'switch',id:11});
table.push({token:'case',lexema:'case',id:12});
table.push({token:'break',lexema:'break',id:13});
table.push({token:'main',lexema:'main',id:14});
console.log(table);
//Apartir de aqui se agregaran los tokens ingresados por el usuario
const id=15;
//Se define la tabla de simbolos
const symbolTable=[];
//Se define la tabla de errores
const errorTable=[];
//Se define la tabla de tokens
