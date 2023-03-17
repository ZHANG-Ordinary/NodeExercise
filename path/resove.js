const path = require('path')
console.log(path.resolve(__dirname, "index.html"));
console.log(path.resolve(__dirname, './index.html'));
//上面打印都是C:\Users\Zha\Desktop\vue ajax\node1\path\index.html

//不要直接/index.html
console.log(path.resolve(__dirname, '/index.html'));
//上面打印的是C:\index.html
console.log(123);