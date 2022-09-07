import React from 'react'
import { ReactComponent as SearchIcon } from './assets/images/search.svg';

const SearchBar = ({handleInputSearchQuery, handleInputChange}:any) => {
  return (
     <div className="mx-auto container flex justify-center items-center px-4 ">
       <div className="relative">
         <form onSubmit={handleInputSearchQuery}>
           <input onChange={handleInputChange}
                  autoComplete="off"
                  type="text"
                  className="h-14 mx-auto pr-8 pl-5 rounded z-0 focus:shadow focus:outline-none"
                  placeholder="Search anything..." />
            <div id="searchButton"
              onClick={handleInputSearchQuery}
              className="flex absolute top-3 right-4 border border-spacing-1 rounded-md px-3 py-1 border-grey-800 hover:bg-slate-100">
              <SearchIcon className="h-[18px] w-[18px]" />
           </div>
         </form>
       </div>
     </div>
  )
}

export default SearchBar