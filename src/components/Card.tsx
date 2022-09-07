import React from 'react'
import { ReactComponent as Weight } from '../assets/images/weight.svg'
import { ReactComponent as Height } from '../assets/images/height.svg'
import NavArrow from '../assets/images/prev-next.svg'

import { IAbilityData, IStatData, ITypeData } from '../interfaces'

const Card = ( props: any ) =>
{
     // [{pokemonData}] = props;
     const {
          id,
          name,
          abilities,
          stats,
          types,
          sprites: {
               front_default, // using another image source for better quality instead of this one
          },
          weight,
          height,
     } = props.pokemonData
     const { handlePrevAndNextButton } = props

     return (
          <div className='w-full flex flex-col relative'>
               {/** Pokemon card Header */}
               <div className='w-full pt-6 flex items-center justify-around text-white'>
                    <p className='text-regular regular-24 font-bold capitalize'>{name}</p>
                    <p className='text-regular regular-12 font-bold capitalize un-selectable '>
                         #{id}
                    </p>
               </div>

               {/* Nav-Arrows Prev & Next and pokemon-img  */}
               <div className='flex relative z-10 mt-6 -mb-[50px] transparant'>
                    <div
                         onClick={handlePrevAndNextButton}
                         id='prev'
                         className='navigate-btn cursor-pointer top-[100px] left-[8px]'
                         data-pokemon-id={id}
                    >
                         <img
                              src={NavArrow}
                              alt='pokemon'
                              className='un-selectable pointer-events-none rotate-180 svg-white svg-red path'
                         />
                    </div>
                    <img
                         className='h-[200px] w-[200px] mx-auto un-selectable '
                         loading='lazy'
                         src={`${ front_default }`}
                         alt={`${ name }`}
                    />
                    <div
                         onClick={handlePrevAndNextButton}
                         id='next'
                         className='navigate-btn cursor-pointer top-[100px] right-[8px]'
                         data-pokemon-id={id}
                    >
                         <img
                              src={NavArrow}
                              alt='pokemon'
                              className='un-selectable pointer-events-none svg-white svg-red path'
                         />
                    </div>
               </div>

               {/* Pokemon info Section */}
               <section className='z-0 p-1 rounded-[12px] mx-1 mb-1 bg-slate-50'>
                    <div className='w-full overflow-hidden'>
                         <div className='px-6 rounded-[8px]'>
                              {/** Pokemon Types */}
                              <div className='flex justify-center gap-2 pt-[3rem] pb-4 py-4 '>
                                   {types.map( ( { type: { name } }: ITypeData, index: number ) => (
                                        <p
                                             key={index}
                                             className={`text-regular regular-12 btn-type font-bold text-white rounded-[8px] ${ name } un-selectable `}
                                        >
                                             {name}
                                        </p>
                                   ) )}
                              </div>

                              <h3
                                   className={`flex justify-center text-regular regular-14 text-${ types[0]?.type.name } font-bold mb-5`}
                              >
                                   About
                              </h3>

                              <div className='flex justify-between h-full mb-5 text-black'>
                                   <div className='min-w-[90px] flex flex-col'>
                                        <div className=' flex grow justify-center gap-x-2 mt-5 '>
                                             <Weight className='w-[16px] h-[16px]' />
                                             <p className='text-regular regular-10'>
                                                  {( weight / 10 ).toString().replace( '.', ',' )} kg
                                             </p>
                                        </div>
                                        <h3
                                             className={` self-center text-regular regular-8 font-extralight`}
                                        >
                                             Weight
                                        </h3>
                                   </div>

                                   <div
                                        className={`min-w-[90px] flex flex-col border-l-${ types[0].type.name } border-l flex flex-col`}
                                   >
                                        <div className='flex grow justify-center gap-x-2 mt-5 '>
                                             <Height className='w-[16px] h-[16px]' />
                                             <p className='text-regular regular-10'>
                                                  {( height / 10 ).toString().replace( '.', ',' )} m
                                             </p>
                                        </div>
                                        <h3
                                             className={` self-center text-regular regular-8 font-extralight`}
                                        >
                                             Height
                                        </h3>
                                   </div>

                                   <div className='flex flex-col justify grow border-l'>
                                        <div className='flex flex-col mx-auto grow justify-center gap-x-2 mt-5 '>
                                             {abilities.map(
                                                  ( { ability: { name } }: IAbilityData, index: number ) => (
                                                       <p
                                                            key={index}
                                                            className='text-regular regular-10 capitalize'
                                                       >
                                                            {' '}
                                                            {name}{' '}
                                                       </p>
                                                  )
                                             )}
                                        </div>
                                        <h3
                                             className={`flex justify-start  mx-auto text-grey-600 text-regular regular-8  font-extralight`}
                                        >
                                             Moves
                                        </h3>
                                   </div>
                              </div>

                              {/** Pokemon Base Stats */}
                              <section className='mb-4 '>
                                   <h3
                                        className={`flex justify-center text-${ types[0].type.name } text-regular regular-18 font-bold align-center mb-5`}
                                   >
                                        Base Stat
                                   </h3>
                                   {stats.map(
                                        ( { stat: { name }, base_stat }: IStatData, index: number ) => (
                                             <div key={index} className='flex justify-between mb-1'>
                                                  <p
                                                       className={`w-[120px] flex justify-start  text-regular regular-8 font-bold capitalize text-${ types[0].type.name }`}
                                                  >
                                                       {name}
                                                  </p>
                                                  <p
                                                       className={`w-[20px] flex justify-start text-regular regular-8 font-bold capitalize text-black`}
                                                  >
                                                       {base_stat}
                                                  </p>
                                                  <div
                                                       className={`w-full  text-regular regular-8 font-bold rounded-[5px] my-1 capitalize relative`}
                                                  >
                                                       <div
                                                            className={`w-full h-1 absolute left-1 top-0 ${ types[0].type.name } opacity-20 rounded-[5px]`}
                                                       ></div>
                                                       <div
                                                            className={`h-1 absolute left-1 top-0 ${ types[0].type.name } rounded-[5px]`}
                                                            style={{
                                                                 width: `${ base_stat <= 100 ? base_stat : 100 }%`,
                                                            }}
                                                       ></div>
                                                  </div>
                                             </div>
                                        )
                                   )}
                              </section>
                         </div>
                    </div>
               </section>
          </div>
     )
}

export default Card
