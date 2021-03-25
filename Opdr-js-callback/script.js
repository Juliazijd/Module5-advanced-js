const huiswerkMaken = (vak) => {
 console.log(`Ok, ok, ik ga nu mijn ${vak} huiswerk maken`)
}

const klaarMetHuiswerk = () => {
   setTimeout(() => { console.log(`Kijk Paps/Mams, ik ben klaar met mijn huiswerk!`) }, 2000) 
}

huiswerkMaken('wiskunde', klaarMetHuiswerk());