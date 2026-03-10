type Alcohol = {
    name:string;
    percentage: number;
    type:string;
}

type Mixer = {
    name: string;
    type: string;
    carbonated: boolean
}

type Cocktail = Alcohol & Mixer;

const margerita: Cocktail = {
    name: "Rum & Lime",
    percentage: 15,
    type: "cocktail",
    carbonated: false,
}

console.log(margerita)

function mixCocktail(alcohol: Alcohol, mixer: Mixer): Cocktail{
    return {
        name: `${alcohol.name} ${mixer.name}`,
        percentage: alcohol.percentage,
        type: alcohol.type,
        carbonated: mixer.carbonated

    }}

 const vodka: Alcohol = {
  name: "Vodka",
  percentage: 40,
  type: "spirit"
};

const rum: Alcohol = {
  name: "Rum",
  percentage: 37,
  type: "spirit"
};

const lemon: Mixer = {
  name: "Lemon",
  type: "juice",
  carbonated: false
};

const cola: Mixer = {
  name: "Cola",
  type: "soft drink",
  carbonated: true
};

const cocktail1 = mixCocktail(vodka, lemon)

const cocktail2 = mixCocktail(rum, cola)

console.log(cocktail1)
console.log(cocktail2)