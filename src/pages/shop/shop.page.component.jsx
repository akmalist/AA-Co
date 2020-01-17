import React from 'react';
import SHOP_DATA from './shop.page.data';
import PreviewCollection from '../../components/preview-collection/preview-collection.component';
 

class ShopPage extends React.Component{
    constructor(){
        super();

        this.state = {
            collections: SHOP_DATA
        }
    }

    render(){
        const {collections} =this.state;
        return (
        
            <div className="shop-page">
              {
              collections.map(({id, ...restDataItems}) =>(
                  <PreviewCollection key ={id} {...restDataItems}/>
              ))
              }
            </div>
        )
    }
  
}

export default ShopPage;