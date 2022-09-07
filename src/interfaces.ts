// interfaces.ts
interface IPokemonData {
     pokemonData: {
          id: number;
          name: string;
          abilities: IAbilityData[];
          stats: IStatData[];
          types: ITypeData[];
          sprites: {
               front_default: string;
          }
          weight: number;
          height: number;
     }
}

interface IAbilityData {
     ability: {
     name: string;
     };
}

interface IStatData {
     stat: {
          name: string;
     };
     base_stat: number;
}

interface ITypeData {
     type: {
          name: string;
     };
}
   
export type  {
     IPokemonData,
     IAbilityData,
     IStatData,
     ITypeData
}