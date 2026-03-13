export function soma(a,b){
    if (typeof(a)!=='number' || typeof(b)!=='number'){
        throw new Error('Os valores devem ser numéricos')
    }
    return a + b
}

// export function anoBissexto(){
//     const ano = (new Date()).getFullYear()
//     if(ano % 4 == 0)
//         return true
//     else
//         return false
// }
export function anoBissexto(ano){
    if(typeof(ano)!=='number') throw new Error("O ano deve ser numérico")
    if(ano<=0) throw new Error("O ano deve ser positivo")

    if(ano % 4 == 0)
        return true
    else
        return false
}

