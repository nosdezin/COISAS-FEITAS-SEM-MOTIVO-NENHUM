var cowsay = require("cowsay");

const opt = {
  text: "CASCO GRANDE DO KRAIKKKKK",
  // e: '^^',
  //   T:"_",
  d: true,
  f: "turtle",
};

// console.log("\x1b[92m%s\x1b[0m", cowsay.think(opt));

// for (let index = 0; index <= 112; index++) {
//     console.log(`\x1b[${index}m%s\x1b[0m`, `cor: ${index}`);
// }

const delay = (tempo) => {
  let n = 0;
  while (n <= tempo) {
    n++;
  }
};

const loading = () => {
  const tempo = 100000000;

  for (let index = 0; index <= 100; index++) {
    console.clear();
    console.log(
      " ====================\n",
      "| ",
      `CARREGANDO ${index}%`,
      "|\n",
      "===================="
    );
    delay(tempo);
  }
};

const turtuguita = () => {
  loading();
  console.clear();
  console.log("\x1b[92m%s\x1b[0m", cowsay.think(opt));
};

turtuguita();

// console.log("\x1b[0m");
