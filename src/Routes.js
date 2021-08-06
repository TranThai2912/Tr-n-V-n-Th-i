import { BrowserRouter, Switch, Route } from "react-router-dom";
import CateDetail from "./component/admin/cateDetail";
import CategoryPage from "./component/admin/category";
import Adminlayout from "./layouts/adminlayout";
import Websitelayout from "./layouts/websitelayout";
import AddProduct from "./page/admin/addproduct";
import EditProduct from "./page/admin/editproduct";
import ListProductAdmin from "./page/admin/productAdmin";
import ContactPage from "./page/website/contact";
import DetailProduct from "./page/website/DetailProduct";
import Home from "./page/website/home";
import ListProduct from "./page/website/listProduct";
import SigninPage from "./page/website/signin";
import SignupPage from "./page/website/signup";
const Routes = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/admin/:path?/:path?/:path?">
          <Adminlayout>
            <Switch>
              <Route exact path="/admin">
                <ListProductAdmin {...props} />
              </Route>
              <Route exact path="/admin/add">
                <AddProduct {...props} />
              </Route>
              <Route exact path="/admin/products/:id/edit">             
                <EditProduct {...props} />
              </Route>
              <Route exact path="/admin/category">
                <CategoryPage {...props} />
              </Route>
              <Route exact path="/admin/category">
                <CateDetail {...props} />
              </Route>
            </Switch>
          </Adminlayout>
        </Route>

        <Route>
          <Websitelayout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/product">
                <ListProduct {...props}/>
              </Route>
              <Route exact path="/detail/:id">
                <DetailProduct {...props} />
              </Route>
              <Route exact path="/signin"  >
                <SigninPage />
              </Route>
              <Route exact path="/signup"  >
                <SignupPage />
              </Route>
              <Route exact path="/contact" component={ContactPage} />
            </Switch>
          </Websitelayout>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
export default Routes;
