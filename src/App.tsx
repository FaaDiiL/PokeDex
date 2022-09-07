import React, { useState, useLayoutEffect } from 'react';
import './App.css';
import './pokemon.spinner.css';
import Card from './components/Card';
import { IPokemonData } from './interfaces';
import { ReactComponent as Pokeball } from './assets/images/pokeball.svg';
import SearchBar from './SearchBar';
import axios from 'axios';


function App()
{
  const [isLoading, setIsLoading] = useState<boolean>( false );
  const [fetchedPokemon, setFetchedPokemon] = useState<any>( null );
  const [hasError, setHasError] = useState<boolean | null>( null );
  const baseUrl = "https://pokeapi.co/api/v2/pokemon/";
  const [inputState, setInputState] = useState<string>( "" );
  const [searchQuery, setSearchQuery] = useState<string | null>( null );

  /**
   * 
   * 
   * Function 
   * 
   */

  /* controlled component */
  const handleInputChange = ( e: any ) =>
  {
    setInputState( e.target.value );
  }

  /*  Fires on search button click */
  const handleInputSearchQuery = ( e: any ) =>
  {
    e.preventDefault();
    if ( searchQuery === inputState || inputState === '' ) return
    setSearchQuery( prev => prev = inputState );
    setIsLoading( true );
  }



  /*  Fires on prev | next button click */
  const handlePrevAndNextButton = ( e: any ) =>
  {
    e.preventDefault();
    if ( e.target.id === 'prev' && fetchedPokemon?.id > 1 ) {
      setSearchQuery( prev => prev = ( +( fetchedPokemon?.id ) - 1 ).toString() );
    } else if ( e.target.id === 'prev' && fetchedPokemon?.id === 1 ) {
      setSearchQuery( prev => prev = ( +905 ).toString() );
    }
    else if ( e.target.id === 'next' && fetchedPokemon?.id < 905 ) {
      setSearchQuery( prev => prev = ( +( fetchedPokemon?.id ) + 1 ).toString() );
    }
  }





  /* initial effect */
  useLayoutEffect( () =>
  {
    setIsLoading( true );
    setSearchQuery( prev => prev = '1' )

  }, [] );


  useLayoutEffect( () =>
  {
  setIsLoading(true)
    setIsLoading( prev => prev = true )
    const fetchData = async () =>
    {

      try {
        const result = await fetch( `${ baseUrl }${ searchQuery?.toLowerCase() }` );

        const data = await result.json();
        if ( !result.status ) {
          setIsLoading( false );
          setHasError( true );
        } else {
          // replace front_default with a url that has better quality if pokemon image with better quality is available
          fetch( `https://cdn.traction.one/pokedex/pokemon/${ data.id }.png` ).then( res =>
          {
            if ( res.status !== 404 ) {
              data.sprites.front_default = data.sprites.front_default = `https://cdn.traction.one/pokedex/pokemon/${ data.id }.png`;
              setFetchedPokemon( ( prev: IPokemonData ) => prev = data );
          setIsLoading(false)

            }
            else {
              setFetchedPokemon( ( prev: IPokemonData ) => prev = data );
          setIsLoading(true)

            }
          } )

          setIsLoading(false)
          setHasError( false );
        }
      } catch ( error ) {
        setIsLoading( prev => prev = false );
        console.log( error )
        setHasError( true );
        setFetchedPokemon( null );
      }
    };

    if ( isLoading ) {
      fetchData();
      setIsLoading( true );
    }
    

    return () =>
    {
      setIsLoading( false );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery, hasError, fetchedPokemon] );



  return (
    <div className="mt-10">
      {/* Search by Id || Name*/}
      <div className=" w-[352px] mx-auto">
        <SearchBar handleInputChange={handleInputChange} handleInputSearchQuery={handleInputSearchQuery} />
      </div>

      {/* Pokemon card-wrapper*/}
      <div className={`relative rounded-lg w-[22.5rem] mx-auto my-10 ${ fetchedPokemon?.types[0].type.name } outline outline-[12px] outline-white  `} >

        {/** Pokeball transparent */}
        <Pokeball className="w-[208px] h-[208px] svg-white absolute top-[8px] right-[8px] opacity-10" />

        {/** This is the pokemon data  */}
        <div className="relative flex flex-col align-center justify-center">
          {!isLoading && (<span className="pokemon-wrapper ">
            <div className="pokemon"></div>
          </span>)}
          {hasError && <p>could not find the pokémon Try another one.</p>}
          {fetchedPokemon && (
            <Card pokemonData={fetchedPokemon} handlePrevAndNextButton={handlePrevAndNextButton} />
          )}
        </div>
      </div>
    </div>

  );
}

export default App;
