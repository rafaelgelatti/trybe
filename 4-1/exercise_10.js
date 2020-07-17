let custo_do_produto = 50;
let venda_do_produto = 85;

if (custo_do_produto === 0 || venda_do_produto === 0) {
    console.log("Erro");
}

let custo_do_produto_com_imposto = custo_do_produto + (custo_do_produto * 0.2);

let lucro = venda_do_produto - custo_do_produto_com_imposto;

let lucro_total = lucro * 1000;

console.log("Lucro total vendendo 1000 produtos: R$ " + lucro_total + ",00")