import React, {useContext} from 'react'
import {GlobalState} from '../../../GlobalState'

function Filters() {
    const state = useContext(GlobalState)

    const [sort, setSort] = state.productsAPI.sort
    const [search, setSearch] = state.productsAPI.search

    return (
        <div className="filter_menu">

        <div className="form-inline navbar-search">
          <select  value={sort} onChange={e => setSort(e.target.value)} className="srchTxt">
            <option value=''>Filter</option>
            <option value='sort=oldest'>Oldest</option>
            <option value='sort=-sold'>Best sales</option>
            <option value='sort=-price'>Price : high-low</option>
            <option value='sort=price'>Price : low-high</option>
        </select> 
         
        </div>

           <input type="text" value={search} placeholder="Enter your search!"
            onChange={e => setSearch(e.target.value.toLowerCase())} />

        </div>
        
        
    )
}

export default Filters
