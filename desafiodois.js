let vitorias = 100
let derrotas = 25

let saldoVitorias = calcularSaldoVitorias(vitorias, derrotas)

function calcularSaldoVitorias(vitorias, derrotas){
    let calcular = vitorias - derrotas
    return calcular
}

let ranking = ["Ferro", "Bronze", "Prata", "Ouro", "Diamante", "Lendário", "Imortal"]

if(saldoVitorias < 10){
    console.log("O Herói tem de saldo " + saldoVitorias + " e esta no nivel " + ranking[0])
} else if((saldoVitorias >= 11) && (saldoVitorias <= 20)){
    console.log("O Herói tem de saldo " + saldoVitorias + " e esta no nivel " + ranking[1])
} else if((saldoVitorias >= 21) && (saldoVitorias <= 50)){
    console.log("O Herói tem de saldo " + saldoVitorias + " e esta no nivel " + ranking[2])
} else if((saldoVitorias >= 51) && (saldoVitorias <= 80)){
    console.log("O Herói tem de saldo " + saldoVitorias + " e esta no nivel " + ranking[3])
} else if((saldoVitorias >= 81) && (saldoVitorias <= 90)){
    console.log("O Herói tem de saldo " + saldoVitorias + " e esta no nivel " + ranking[4])
} else if((saldoVitorias >= 91) && (saldoVitorias <= 100)){
    console.log("O Herói tem de saldo " + saldoVitorias + " e esta no nivel " + ranking[5])
} else{
    console.log("O Herói tem de saldo " + saldoVitorias + " e esta no nivel " + ranking[6])
}