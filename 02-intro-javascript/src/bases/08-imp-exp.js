    import heroes from '../data/heroes';

export const getHeroeById = (id) => heroes.find( (heroe) => heroe.id === id);
export const getHeroeByName = (name) => heroes.find( (heroe) => heroe.name === name );
export const getHeroesByOwner = (owner) => heroes.filter( (heroe) => heroe.owner === owner );


/*
console.log(owners);
console.log( getHeroeById(4) );
console.log( getHeroeByName('Gualguarin') );
console.log( getHeroesByOwner('Marvel') );
*/