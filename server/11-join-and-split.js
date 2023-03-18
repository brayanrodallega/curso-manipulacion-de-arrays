const elements = ["hola", null, "como", "estas"]

let acumulator = ""
const separator = "-"
for (let i = 0; i<elements.length; i++){
  const element = elements[i] ?? ""
  if(i !== elements.length-1 && element !== ""){
    acumulator += element + separator
  }else{
    acumulator += element
  }
}
console.log(acumulator)


// join
const elements2 = ["hola", null, "como", "estas"]
const result = elements2.join(separator)
console.log(result)

// split
const text = "Curso de Manipulación de Datos con JavaScript"
const urlFinal = text.split(" ").join("-").toLowerCase()
console.log(urlFinal)