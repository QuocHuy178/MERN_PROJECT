import React, {useContext, useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'
import {GlobalState} from '../../../GlobalState'
import ProductItem from '../utils/productItem/ProductItem'
function currencyFormat(num) {
  return  num.toFixed().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') + 'VND';
}
function DetailProduct() {
    const params = useParams()
    const state = useContext(GlobalState)
    const [products] = state.productsAPI.products
    const addCart = state.userAPI.addCart
    const[detailProduct, setDetailproduct] = useState([])

    useEffect(() => {
       if(params){
           products.forEach(product =>{
                if(product._id === params.id) setDetailproduct(product)
           })
       }
    }, [params, products])

    if(detailProduct.length === 0) return null;
    return (
        <div className="span9">
  <ul className="breadcrumb">
    <li><a href="index.html">Trang chủ</a> <span className="divider">/</span></li>
    <li className="active">Chi tiết sản phẩm</li>
  </ul>	
  <div className="row">	  
    <div id="gallery" className="span3">
      <a href="" title="">
        <img className="product-new radius" src={detailProduct.images.url} style={{width: '100%'}} alt="" />
      </a>
      <div className="btn-toolbar">
        <div className="btn-group">
          <span className="btn"><i className="icon-envelope" /></span>
          <span className="btn"><i className="icon-print" /></span>
          <span className="btn"><i className="icon-zoom-in" /></span>
          <span className="btn"><i className="icon-star" /></span>
          <span className="btn"><i className=" icon-thumbs-up" /></span>
          <span className="btn"><i className="icon-thumbs-down" /></span>
        </div>
      </div>
    </div>
    <div className="span6">
      <h3 title={detailProduct.title}>{detailProduct.title}</h3>
      <hr className="soft" />
      <form className="form-horizontal qtyFrm">
        <div className="control-group">
          <label className="control-label"><span>{currencyFormat(detailProduct.price)}</span></label>
          <div className="controls">
            <Link  to={{}}>
                <button style={{padding:'7px 20px'}} onClick={()=> addCart(detailProduct)} type="submit" className="btn btn-large btn-primary pull-right"> Thêm vào giỏ <i className=" icon-shopping-cart" /></button>
              </Link>
              
            
          </div>
        </div>
      </form>
      <hr className="soft" />
      <form className="form-horizontal qtyFrm pull-right">
        <div className="control-group">
        </div>
      </form>
      <hr className="soft clr" />
      <a className="btn btn-small pull-right" href="#detail">Thông tin thêm</a>
      <br className="clr" />
      <a href="#" name="detail" />
      <hr className="soft" />
    </div>
    <div className="span9">
      <ul id="productDetail" className="nav nav-tabs">
        <li className="active"><a href="#home" data-toggle="tab">Chi tiết sản phẩm</a></li>
        <li><a href="#profile" data-toggle="tab">Sản phẩm tương tự</a></li>
      </ul>
      <div id="myTabContent" className="tab-content">
  <div className="tab-pane fade active in" id="home">
    <h4>Thông tin sản phẩm</h4>
    <table className="table table-bordered">
      <tbody>
        <tr className="techSpecRow">
          <th colSpan={2}>Chi tiết</th>
        </tr>
        <tr className="techSpecRow">
          <td className="techSpecTD1">Đã bán:</td>
          <td className="techSpecTD2">{detailProduct.sold}</td>
        </tr>
        <tr className="techSpecRow">
          <td className="techSpecTD1">Mô tả:</td>
          <td className="techSpecTD2">{detailProduct.content}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div className="tab-pane fade" id="profile">
  <div id="myTab" className="pull-right">
    <a href="#blockView" data-toggle="tab"><span className="btn btn-large btn-primary"><i className="icon-th-large" /></span></a>
  </div>
  <br className="clr" />
  <hr className="soft" />
  <div className="tab-content">
    <div className="tab-pane active" id="blockView">
      <ul className="thumbnails">
          {
            products.map(product =>{
                return product.category === detailProduct.category
                    ?<ProductItem key={product._id} product={product}/> : null
          })
        }
        {/* <li className="span3">
          <div className="thumbnail">
            <a href="">
              <img style={{height: '160px', width: '160px', objectFit: 'cover', borderRadius: '15px'}} src="" alt="" /></a>
            <div className="caption">
              <h5>fdgfdg</h5>
              <p>
                fdgdfg
              </p>
              <form method="post" action="" className="form-horizontal qtyFrm">
                <h4 style={{textAlign: 'center'}}>
                  <a className="btn" href="">
                    <i className="icon-zoom-in" />
                  </a>
                  <input defaultValue=" Thêm vào giỏ" type="submit" name="themgiohang" className="btn btn-primary" />
                  <a className="btn btn-primary" href="#"> 2000
                  </a>
                </h4>
              </form>
            </div>
          </div>
        </li> */}
      </ul>
      <hr className="soft" />
    </div>
  </div>
  <br className="clr" />
</div>

</div>
        
    </div>
  </div></div>

    )
}

export default DetailProduct
