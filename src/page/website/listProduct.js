import { NavLink } from "react-router-dom";


const ListProduct = (props) => {
  return (
    <>     
      <div className="mx-auto" style={{maxWidth: "1400px"}}>
        <div className="mx-auto">
          <h2 className="pt-4 pb-4">Store</h2>
          <div className="iphone row text-center">
              {props.data.map((item) => (
                <div className="card col-sm" style={{ minWidth: '18rem', minHeight: '500px', marginLeft: "15px", marginBottom: "15px" }}>
                  <img style={{maxWidth: "80%", margin: "0 auto", paddingTop: "15px"}} src={item.src} alt=""/>
                  <h5 className="card-title" style={{fontSize: "25px", paddingTop: "15px"}}>{item.name}</h5>
                  <p className="card-text">From ${item.price}</p>
                  <p className="typography-tout tout" style={{fontSize: "17px", fontWeight: "400"}}>{item.desciption}</p>
                  <NavLink to={`/detail/${item.id}`} className="btn btn-primary mx-auto text-center" style={{marginTop: "15px"}}>Detail</NavLink>
                </div>
              ))}
          </div> 
        </div>
      </div>
    </>
  );
};
export default ListProduct;
