import React, { useState } from 'react';
import ProductInfo from './ProductInfo';
const Product=()=>{
    const [item,setItem]=useState(ProductInfo);
    const [cakeitem,setcakeItem]=useState(ProductInfo[0]);
    const [positem,setpos]=useState(0);
    const slectCake=(pos)=>{
        setcakeItem(ProductInfo[pos]);
        setpos(pos);
    }
    return(<> 
        <div className="container">
            <h1>Cake Factory</h1>
            <p className="cakeheading">Lorem ipsum dolor Lorem ipsum dolor  Lorem ipsum dolor.</p>
            <div className="cakeContainer">
                {
                    item.map((item,pos)=>{
                        const arr=["classimg"];
                        if(pos==positem)
                        {
                            arr.push("classimgBorder");
                        }
                        return(
                            <img className={arr.join(' ')} src={item.image} onClick={()=>{slectCake(pos)}}></img>
                        )
                    })
                }
            </div>
            <div className="cakeInfo"> 
                <h1>{cakeitem.name}</h1>
                <img src={cakeitem.image}/>
                <p>{cakeitem.descripion}</p>
                <div className="cakePrice">
                    <h4>Price <span className="pricebg">{cakeitem.price}</span></h4>
                    <h4><span className="ratebg">{cakeitem.rating}</span></h4>
                </div>
            </div>   
        </div>
        
        </>
    )
}
export default Product;