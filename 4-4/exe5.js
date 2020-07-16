let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
  };

let info2 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: "O último MacPatinhas",
    recorrente: 'Sim',
}

for (let value in info) {
    if (info[value] === info2[value]) {
        console.log("Ambos recorrentes")
    } else {
        console.log(info[value] + " e " + info2[value]);
    }
}