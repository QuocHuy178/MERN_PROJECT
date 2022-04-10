import React, {useContext} from 'react'
import {GlobalState} from '../../../GlobalState'



function CateSidebar() {
    const state = useContext(GlobalState)
    const [categories] = state.categoriesAPI.categories
    return (
        <div>
             <ul id="sideManu" className="nav nav-tabs nav-stacked">
                <li className="subMenu open"><a> Danh mục</a>
                    <ul>
                       
                        {
                        categories.map(category => (
                            <li><a className="active" href="#"><i className="icon-chevron-right" />{category.name}</a></li>
                            ))
                        }
                    </ul>
                </li>
            </ul>
        </div>
    )
}

export default CateSidebar
