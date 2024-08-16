function removeFromArray(arreglo,  item){
    const indexOf = arreglo.indexOf(item);
    if (indexOf != -1){
        arreglo.splice(indexOf,1);
    }
    return arreglo;
};

const cities = ["Manchester", "Liverpool", "Edinburgh", "Carlisle"];
const CityRemoved = document.getElementById('texto');
const boton = document.querySelector('button');
const resultado = document.getElementById('resultado');
boton.addEventListener("click", () => {
    const result = removeFromArray(cities,CityRemoved.value);
    resultado.textContent = result;    
});