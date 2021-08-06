import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import productAPI from "../../api/productAPI";
import '../../css/detail.css'
const DetailProduct = (props) => {
    const {id} = useParams();
    const [product, setProduct] = useState('');
    useEffect(() => {
        const showProduct = async() => {
            try {
                const {data} = await productAPI.get(id)
                console.log(data)
                setProduct(data)
            } catch (error) {
                console.log(error);
              }
        }
        showProduct()
    }, [])
    
    return (
        <>
            <div className="mx-auto" style={{maxWidth: "1200px"}}>
                <div className="mx-auto">
                <h2 className="pt-4 pb-4">Detail Product</h2>
                    <div className="iphone">
                        <div className="details">
                            <img src={product.src} alt=""/>
                            <div className="box">
                                <div className="row">
                                    <h2>{product.name}</h2>
                                    <span>${product.price}</span>
                                </div>
                                <p>{product.desciption}</p>
                                <Link to="" className="cart">
                                    Add to cart
                                </Link>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </>
    );
};
export default DetailProduct;
