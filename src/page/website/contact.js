import { Image, View } from "react-native"
import { Link, NavLink } from "react-router-dom"

const ContactPage = () => {
    return(
        <div className="main text-center" data-env="live" data-edit-mode="false" role="main">
            <section className="as-columns  as-columns--1up  as-banner as-banner--top as-banner-content--left ">
                <div className="row">
                    <div className="column large-12 medium-12 small-12">
                        <div className="as-banner-cont">
                            <div className="as-banner-image as-banner-image--top">
                                <View>
                                    <Image
                                        source={{
                                            uri:
                                            "https://support.apple.com/content/dam/edam/applecare/images/en_US/psp/contact-us-psp-banner-hero.image.large_2x.jpeg"
                                        }}
                                        style={{ width: "100%", height: null, aspectRatio: "3600/1080" }}
                                    />
                                    <View style={{position: "absolute", left: "300px", top: "100px"}}>
                                        <div className="as-banner-content">
                                            <div className="pageTitle as-left ">
                                                <h1 className="pageTitle-heading">Contact Apple </h1>
                                                <h1 className="pageTitle-heading">Support</h1>
                                            </div>
                                        </div>
                                    </View>
                                </View>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="sectionTitle text-center" style={{marginTop: "40px"}}>
                <h2 className="sectionTitle-heading     ">Helpful topics</h2>
            </div>
            <div className="promo as-center "> 
                <div className="u-layout u-layoutTable u-layout--3up row mx-auto"  style={{width: "980px", marginTop: "60px", marginBottom: "50px"}}>
                    <Link className="promo-item u-layoutTable-item col-sm"  style={{width: "200px", margin: "0 auto", display: "block", borderRight: "1px solid #dedede "}}>
                        <Image
                            source={{
                                uri:
                                "https://support.apple.com/content/dam/edam/applecare/images/en_US/psp/promo-icon-ios_x2.png"
                            }}
                            style={{ width: "50px", height: "50px", left: "130px", bottom: "10px"}} 
                        />
                        
                        <div className="promo-link">
                            <span className="promo-text text-center">Update or restore iOS</span>
                        </div>
                    </Link>                 
                    <Link className="promo-item u-layoutTable-item col-sm"  style={{width: "200px", borderRight: "1px solid #dedede "}}>
                        <Image
                            source={{
                                uri:
                                "https://support.apple.com/content/dam/edam/applecare/images/en_US/appletv/promo-icon-subscriptions-billing_2x.png"
                            }}
                            style={{ width: "50px", height: "50px", left: "130px", bottom: "10px"}}
                        />                        
                        <div className="promo-link">
                            <span className="promo-text text-center">Subscriptions and purchases</span>
                        </div>
                    </Link>
                    <Link className="promo-item u-layoutTable-item col-sm"  style={{width: "200px"}}>
                        <Image
                            source={{
                                uri:
                                "https://support.apple.com/content/dam/edam/applecare/images/en_US/promo_icons/promo-icon-password_2x.png"
                            }}
                            style={{ width: "50px", height: "50px", left: "133px", bottom: "10px"}}
                        />                         <div className="promo-link">
                            <span className="promo-text text-center">Forgot Apple ID password</span>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="divider divider--fullwidth">
                <hr aria-hidden="true" />
            </div>
            <div className="sectionTitle " style={{marginTop: "70px"}}>
                <h2 className="sectionTitle-heading display-6 fw-normal text-center">We're here to help</h2>
                <p className="sectionTitle-intro text-center">Choose a product and we'll guide you to the best solution.</p></div>
                <div className="as-imagegrid " style={{marginTop: "50px", marginLeft: "300px", marginBottom: "80px"}}>       
                    <div className=" as-imagegrid--6up row mx-auto text-center">
                        <div className="row mx-auto">
                            <div className="as-imagegrid-item column large-2 medium-4 small-6" style={{width: "146px", height: "109px"}}>
                                <a data-analytics-event="link.component_click">
                                    <div className="as-imagegrid-img-cont">
                                        <Image
                                            source={{
                                                uri:
                                                "https://support.apple.com/content/dam/edam/applecare/images/en_US/homepage/homepage_productnav_iphone_2x.png"
                                            }}
                                            style={{ width: "100px", height: "100px", left: "14px", bottom: "10px"}}
                                        />  
                                    </div>
                                    <span className="as-imagegrid-item-title">iPhone</span>
                                </a>
                            </div>
                            <div className="as-imagegrid-item column large-2 medium-4 small-6" style={{width: "186px", height: "109px"}}>
                                <a data-analytics-event="link.component_click">
                                    <div className="as-imagegrid-img-cont">
                                        <Image
                                            source={{
                                                uri:
                                                "https://support.apple.com/content/dam/edam/applecare/images/en_US/mac/product-nav-icon-mac_2x.png"
                                            }}
                                            style={{ width: "100px", height: "100px", left: "30px", bottom: "10px"}}
                                        />                                      
                                        </div>
                                    <span className="as-imagegrid-item-title">Mac Notebooks</span>
                                </a>
                            </div>
                            <div className="as-imagegrid-item column large-2 medium-4 small-6" style={{width: "146px", height: "109px"}}>
                                <a data-analytics-event="link.component_click">
                                    <div className="as-imagegrid-img-cont">
                                        <Image
                                            source={{
                                                uri:
                                                "https://support.apple.com/content/dam/edam/applecare/images/en_US/homepage/homepage_productnav_ipad_2x.png"
                                            }}
                                            style={{ width: "100px", height: "100px", left: "12px", bottom: "10px"}}
                                        />                                      
                                    </div>
                                    <span className="as-imagegrid-item-title">iPad</span>
                                </a>
                            </div>
                            <div className="as-imagegrid-item column large-2 medium-4 small-6" style={{width: "146px", height: "109px"}}>
                                <a data-analytics-event="link.component_click">
                                    <div className="as-imagegrid-img-cont">
                                        <Image
                                            source={{
                                                uri:
                                                "https://support.apple.com/content/dam/edam/applecare/images/en_US/homepage/homepage_productnav_apple_watch_2x.png"
                                            }}
                                            style={{ width: "100px", height: "100px", left: "12px", bottom: "10px"}}
                                        />                                      
                                    </div>
                                    <span className="as-imagegrid-item-title">Watch</span>
                                </a>
                            </div>
                            <div className="as-imagegrid-item column large-2 medium-4 small-6" style={{width: "146px", height: "109px"}}>
                                <a data-analytics-event="link.component_click">
                                    <div className="as-imagegrid-img-cont">
                                        <Image
                                            source={{
                                                uri:
                                                "https://support.apple.com/content/dam/edam/applecare/images/en_US/homepage/homepage_productnav_apple-id_2x.png"
                                            }}
                                            style={{ width: "100px", height: "100px", left: "10px", bottom: "10px"}}
                                        />                                      
                                    </div>
                                    <span className="as-imagegrid-item-title">Apple ID</span>
                                </a>
                            </div>
                            <div className="as-imagegrid-item column large-2 medium-4 small-6" style={{width: "146px", height: "109px"}}>
                                <a data-analytics-event="link.component_click">
                                    <div className="as-imagegrid-img-cont">
                                        <Image
                                            source={{
                                                uri:
                                                "https://support.apple.com/content/dam/edam/applecare/images/en_US/mac_apps/homepage_productdrawer_appstore_2x.png"
                                            }}
                                            style={{ width: "100px", height: "100px", left: "8px", bottom: "10px"}}
                                        />                                      
                                    </div>
                                    <span className="as-imagegrid-item-title">App Store</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="as-navLink-wrapper as-navLink--icon" style={{marginBottom: "50px"}}>
                    <div className="as-navLink-inner ">
                    <a className="as-navLink " style={{textDecoration: "none"}}>
                        <span className="as-navlink-text" style={{fontSize: "17px", textDecoration: "none"}}>See more products</span><span className="icon icon-chevronright" aria-hidden="true" />
                    </a>
                    </div>
                </div>
                <div className="divider divider--fullwidth">
                    <hr aria-hidden="true" />
                </div>  
                <div className="contentLink mb-5 mt-5">
                    <div className="u-layout u-layout--2up row">
                        <div className="u-layout-item col-sm ">
                            <div className="contentLink-item">
                                <div className="contentLink-block text-right"  style={{width: "450px", height: "150px", fontSize: "17px", float: "right", textAlign: "left"}}>
                                    <h3 className="contentLink-title mb-3" style={{fontSize: "32px"}}>Support by phone</h3>
                                    <p className="contentLink-copy">You can talk to an Apple Advisor by calling the Apple Support phone number for your country or region.</p>
                                    <a className="contentLink-link" style={{textDecoration: "none"}}>		    
                                        <span className="contentLink-text">Find the number for your location</span>
                                        <span className="icon icon-chevronright" aria-hidden="true" />
                                    </a>		
                                </div>
                            </div>
                        </div>
                        <div className="u-layout-item col-sm">
                            <div className="contentLink-item">
                                <div className="contentLink-block text-right" style={{width: "450px", height: "150px", fontSize: "17px", float: "left", textAlign: "left"}}>
                                    <h3 className="contentLink-title  mb-3" style={{fontSize: "32px"}}>Online order status</h3>
                                    <p className="contentLink-copy">Visit the Order Status page for information about an Apple Online Store order.</p>
                                    <a className="contentLink-link analytics-exitlink" style={{textDecoration: "none"}}>		    
                                        <span className="contentLink-text">Check your order status</span>
                                        <span className="icon icon-chevronright" aria-hidden="true" />
                                    </a>		
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="divider divider--fullwidth">
                    <hr aria-hidden="true" />
                </div>
                <div className="as-ft-section-cont  as-ft-section-cont--border-bot mt-5" style={{marginLeft: "290px"}}>
                    <div className="as-ft-section row">
                        <div className="as-ft-section-item row mx-auto">            
                            <div className=" col-sm"  style={{maxWidth: "450px", height: "210px", fontSize: "22px", textAlign: "left"}}>
                                <h2 className="as-ft-section-heading" style={{fontSize: "40px"}}>Get support anywhere</h2>
                                <p className="as-ft-section-copy as-ft-section-copy--center-medium as-ft-section-copy--center-small">Use the Apple Support app to find answers about your products, talk to an expert, or make a repair reservation.</p>
                                <div className="as-ft-navlink-section ">
                                    <div className="as-ft-navlink as-ft-navlink--centered-medium as-ft-navlink--centered-small">
                                        <a className="contentLink-link analytics-exitlink" style={{textDecoration: "none"}}>
                                            <span className="as-ft-text">Download the Apple Support app</span>
                                            <span className="icon icon-chevronright" aria-hidden="true" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm">
                                <Image 
                                    source={{
                                        uri:
                                        "https://support.apple.com/content/dam/edam/applecare/images/en_US/mac/featured-section-apple-support-app_2x.png"
                                    }}
                                    style={{ width: "400px", height: "209px"}}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="divider divider--fullwidth mt-5">
                    <hr aria-hidden="true" />
                </div> 
                <div className="sectionTitle mt-5">
                    <h3 className="sectionTitle-heading" style={{fontSize: "40px"}}>More topics</h3>
                </div>
                <div className="as-navLink-wrapper as-navLink--icon">
                    <div className="as-navLink-inner pb-2 pt-2">
                        <a className="as-navLink" style={{textDecoration: "none" , fontSize: "17px"}}>
                            <span className="as-navlink-text">Mobile carriers</span>
                            <span className="icon icon-chevronright" aria-hidden="true" />
                        </a>
                    </div>
                </div>
                <div className="as-navLink-wrapper as-navLink--icon">
                    <div className="as-navLink-inner pb-2">
                        <a className="as-navLink " style={{textDecoration: "none" , fontSize: "17px"}}>
                            <span className="as-navlink-text">Service and Support coverage</span><span className="icon icon-chevronright" aria-hidden="true" />
                        </a>
                    </div>
                </div>
                <div className="as-navLink-wrapper as-navLink--icon">
                    <div className="as-navLink-inner pb-2">
                        <a className="as-navLink " style={{textDecoration: "none" , fontSize: "17px"}}>
                            <span className="as-navlink-text">Lost or stolen iPhone, iPad, or iPod&nbsp;touch</span><span className="icon icon-chevronright" aria-hidden="true" />
                        </a>
                    </div>
                </div>
                <div className="as-navLink-wrapper as-navLink--icon">
                    <div className="as-navLink-inner pb-2">
                        <a className="as-navLink " style={{textDecoration: "none" , fontSize: "17px"}}>
                            <span className="as-navlink-text">Lost or stolen Mac</span><span className="icon icon-chevronright" aria-hidden="true" />
                        </a>
                    </div>
                </div>
            
            </div>
        

    )
}
export default ContactPage