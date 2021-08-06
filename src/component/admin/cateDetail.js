import { useEffect } from "react";
import { useState } from "react";
import productAPI from "../../api/productAPI";

const CateDetail = (props) => {
    console.log(props)
    const [product, setProduct] = useState('');
    useEffect(() => {
        const showProduct = async(item) => {
            try {
                const {data} = await productAPI.get(item)
                console.log(data)
                setProduct(data)
            } catch (error) {
                console.log(error);
              }
        }
        showProduct()
    }, [])
    return(
        <>
            {/* {product.map((item, index) => (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.desciption}</td>
                </tr>
            ))} */}
        </>
    )
}
export default CateDetail