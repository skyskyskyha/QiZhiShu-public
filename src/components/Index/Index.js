import React from 'react';
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import img1 from "../../assets/img/image-Example-1.png"
import img2 from "../../assets/img/image-Example-2.png"
import '../../assets/style/IndexPage.scss'

const Index = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoPlay: true,
    };

    let imgArray = [img1,img2,img1,img2,img1,img2];

    return (
        <div>
            <div style={{width:"1800px"}}>
            <Slider {...settings}>
                {
                    imgArray.map((item, id)=>
                        <div className={"index-img-wrapper"}>
                            <img src={imgArray[id]}/>
                        </div>
                    )
                }
            </Slider>
            </div>
        </div>
    );
}

export default Index;
