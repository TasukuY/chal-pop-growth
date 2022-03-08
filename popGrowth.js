
function nbYear(population, percent, inhabitants, populationToSurpass){
    let years = 0;
    let totalPopulation = 0;
    while(totalPopulation < populationToSurpass){
        totalPopulation = population + (population * (percent/100)) + inhabitants;
        population = totalPopulation;
        years++;
    }
    
    return years;
}

console.log(nbYear(1500, 5, 100, 5000));