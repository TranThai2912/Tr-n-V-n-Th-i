
import React from "react";
import Footer from "../component/website/footer";
import Header from "../component/website/header";
const Websitelayout = (props) => {
    return (
        <div>
            <Header />
            <main>               
                {props.children}              
            </main>
            <Footer />
        </div>
    )
}
export default Websitelayout