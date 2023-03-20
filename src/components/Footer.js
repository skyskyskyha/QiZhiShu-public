import React from 'react';
import '../assets/style/Footer.scss'
import {useLocation} from "react-router-dom";

const Footer = () => {
        let footer;
        if (useLocation().pathname === "/"){
            console.log("这是首页")
            footer=document.getElementById("footer");
            if (footer != null) {
                footer.style["marginTop"] = "2500px";
            }
        }
        else {
            footer=document.getElementById("footer");
            if (footer != null)
                footer.style["marginTop"] = "100px";
        }
        return (
            <div id="footer">
                <div className="fInner" >
                    <div className="ttl"><span>启智树</span> 编程</div>
                    <div className="inner clearfix">
                        <div className="img"><img src={[require("../assets/img/f_img.png")]} width="136" alt=""/></div>
                        <div className="rBox">
                            <p className="txt">联系邮箱：1517881330@qq.com &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                QQ：1517881330 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;联系地址：江苏省常州市新北区保纳商业广场2幢1120号
                            </p>
                            <p className="copy">
                                ©2020 启智树 版权所有
                                <a href="https://beian.miit.gov.cn/" target="_blank">苏ICP备20030061号</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


export default Footer;
