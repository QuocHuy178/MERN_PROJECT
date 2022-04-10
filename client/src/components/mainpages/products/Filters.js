import React, {useContext} from 'react'
import {GlobalState} from '../../../GlobalState'

function Filters() {
    const state = useContext(GlobalState)

    const [sort, setSort] = state.productsAPI.sort
    const [search, setSearch] = state.productsAPI.search

    return (
        <div className="filter_menu" style={{display: 'flex', alignItems: 'center'}}>

        <div style={{margin:0}} className="form-inline navbar-search">
          <select  value={sort} onChange={e => setSort(e.target.value)} className="srchTxt">
            <option value=''>Mới nhất</option>
            <option value='sort=oldest'>Cũ hơn</option>
            <option value='sort=-sold'>Bán chạy</option>
            <option value='sort=-price'>Giá : cao-thấp</option>
            <option value='sort=price'>Giá : thấp-cao</option>
        </select> 
         
        </div>

           <input style={{margin:0,height:'30px',marginLeft:'10px'}} type="text" value={search} placeholder="Nhập gì đó..."
            onChange={e => setSearch(e.target.value.toLowerCase())} />

        </div>
        
        
    )
}

export default Filters
