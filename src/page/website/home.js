import { Image, View } from "react-native";
import IndexPage from "../../component/website";
import ImacPage from "../../component/website/imac";
import IndexProPage from "../../component/website/indexPro";

const Home = (props) => {
  console.log(props)
  return (
    <>
      <div className="card-body">
        <div className=" pricing-header mb-2">
          <View>
            <Image
              source={{
                uri:
                  "https://www.apple.com/v/home/ab/images/heroes/iphone-12/iphone_12_updated__jepm2xpxncuy_large.jpg"
              }}
              style={{ width: "100%", height: null, aspectRatio: "1505/624" }}
            />
            <View style={{position: "absolute", left: "500px"}}>
              <IndexPage />
            </View>
          </View>
        </div>
        <div className="pricing-header mb-2">
          <View>
            <Image
              source={{
                uri:
                  "https://www.apple.com/v/home/ab/images/heroes/iphone-12-pro/iphone_12_pro_us__e5oyysg4k0ya_large.jpg"
              }}
              style={{ width: "100%", height: null, aspectRatio: "1505/624" }}
            />
            <View style={{position: "absolute", left: "500px"}}>
              <IndexProPage />
            </View>
          </View>        
        </div>
        <div className="pricing-header mb-2">
          <View>
            <Image
              source={{
                uri:
                  "https://www.apple.com/v/home/ab/images/heroes/ipad-pro/hero_ipad_pro_non_avail__fcrsmhs4b7ma_large.jpg"
              }}
              style={{ width: "100%", height: null, aspectRatio: "1505/624" }}
            />
            <View style={{position: "absolute", left: "500px"}}>
              <ImacPage />
            </View>
          </View>        
        </div>
      </div>
    </>
  );
};
export default Home;
