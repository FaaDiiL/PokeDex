import React, { useState, useEffect } from 'react'
import axios from 'axios'

const useFetch = ( url: string ) =>
{
     const [data, setData] = useState<any>( null )
     const [loading, setLoading] = useState<boolean>( false )
     const [error, setError] = useState<Object>( { message: '', status: 0 } )

     useEffect( () =>
     {
          setLoading( true )
          const fetchData = async () =>
          {
               setLoading( true )
               try {
                    const result = await axios.get( url )
                    setData( result.data )
                    setLoading( false )
               } catch ( error: any ) {
                    setError( error )
               }
               finally {
                    setLoading( false )
               }
          }
          fetchData()
          return () =>
          {
               setLoading( false )
          }
     }, [url] )

     const fetchPokemonById = async ( id: any, query: string ) =>
     {
          try {
               setLoading( true )
               const result = await axios.get( url )
               setData( result.data )
               setLoading( false )
          } catch ( error: any ) {
               setError( error )
          }
          finally {
               setLoading( false )
          }
     }


     const fetchedQualityImg = ( id: any ) =>
     {
          const baseUrl = `https://cdn.traction.one/pokedex/pokemon/`
          const fetchImg = async () =>
          {
               try {

                    const response = await axios.get( `${ baseUrl }${ id }.png` )
                    if ( response.status !== 404 ) {

                         console.log( id )

                    } else {
                         console.log( response )


                         // console.log(img.status)
                    }
               } catch ( error ) {
                    console.log( error )

               }
               finally {

                    console.log( 'img' )
               }
          }
          fetchImg()

     }

     return { data, loading, error, fetchPokemonById, fetchedQualityImg }
}

export default useFetch
