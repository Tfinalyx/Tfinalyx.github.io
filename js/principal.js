var titulo = document.querySelector(".titulo")
console.log(titulo)
titulo.textContent = "Buena vida Nutricion"
//console.log("principal.js")

function imc(peso, altura){
    if (peso<=0 || altura<=0){
        alert("error de datos")
        return 0
    }else{
        return (peso/(altura*altura))    
    }     
    
}

function ModVal_imc(NumPaciente){
var paciente = document.querySelector(NumPaciente)
var peso = parseFloat(paciente.querySelector(".info-peso").textContent)
var altura = parseFloat(paciente.querySelector(".info-altura").textContent)
var imc_c = imc(peso,altura)
paciente.querySelector(".info-imc").textContent = String(Math.round(imc_c))
console.log(imc_c)
}

ModVal_imc("#pac1")
ModVal_imc("#pac2")
ModVal_imc("#pac3")
ModVal_imc("#pac4")
ModVal_imc("#pac5")

