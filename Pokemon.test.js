//importar funcoes do poku para testes
import {describe,assert,it,beforeEach,afterEach} from 'poku'

//importar a classe
import Pokemon from '../src/utils/Pokemon.js'

let pokemon

beforeEach(()=>{
    pokemon = new Pokemon()
})
afterEach(()=>{})

describe("TESTE DA CLASSE Pokemon",{background:'red'})

it("Testando a função valida",async ()=>{
    assert.deepEqual(await pokemon.valida(),{validade:'ok',autor:'pikachu'},"validou")
})
