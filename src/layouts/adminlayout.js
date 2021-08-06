import React from "react";
import Header from "../component/admin/headeradmin"
import { Nav } from "../component/admin/navadmin"

const Adminlayout = (props) =>{
    return(
        <>
            <div>
                <div>
                    <Header />
                    <div className="container-fluid">
                        <div className="row">
                            <Nav />
                            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                                {props.children}
                            </main>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Adminlayout