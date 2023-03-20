import React from 'react';
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../../assets/style/IndexPage.scss'
import 'antd/dist/antd.css'
import img1 from "../../assets/img/image-Example-1.png"
import img2 from "../../assets/img/image-Example-2.png"
import teacher1 from "../../assets/img/teacher1.png"
import teacher2 from "../../assets/img/teacher2.png"
import abilityRaise from "../../assets/img/abilityRaise.png"
import caowenpic from "../../assets/img/caowen.jpg"
import jinbinpic from "../../assets/img/jinbin.jpg"
import chenjunpic from "../../assets/img/chenjun.jpg"
import jiangzhongtianpic from "../../assets/img/jiangzhongtian.jpg"
import {Button, Divider, Typography, Carousel, Space, Popover} from "antd"
import './index.scss'
import $ from 'jquery'
import Footer from "../Footer";

const Index = () => {
    $(function(){
        $('.main .section05 .movie a,.main .section05 .btn a').click(function(){
            $('.cover,.pop').fadeIn();
            console.log("观看视频")
            return false;
        });
        $('.pop .close a').click(function(){
            $('.cover,.pop').fadeOut();
            $('.pop video').trigger('pause');
            return false;
        });
    });
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        adaptiveHeight: true,
    };

    const contentStyle: React.CSSProperties = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };
    const { Title, Paragraph, Text, Link } = Typography;

    const caowen = (
        <section className="specialAdvisor">
            <Title>曹文 / 课程顾问</Title><p>全面引进曹老师独特的教学方法、完善的课程体系</p>
            <blockquote>全国先进工作者、全国模范教师、NOI钻石指导教师</blockquote>
            <p className="txt">1989年毕业于复旦大学数学系，从教30余年，取得教学成绩：<br/>
                ⚬ Topcoder Open世界冠军1人；<br/>
                ⚬ 国际信息学奥林匹克（IOI）金牌4枚、银牌1枚、铜牌1枚；<br/>
                ⚬ 全国信息学奥林匹克竞赛(NOI)金、银、铜牌百余枚；<br/>
                ⚬ 全国信息学奥林匹克联赛（NOIP）一等奖五百余人；<br/>
                ⚬ 保送清华北大60余人；<br/>
                ⚬ 保送双一流（985）名校五百余人；<br/>
                ⚬ 2020年5人入选清华姚班，列全国第一；<br/>
                ⚬ 2021年有六名选手进入江苏省队(全国第一)；<br/>
                ⚬ 图灵奖获得者——美国康奈尔大学终身教授Hopcroft到访中国时，闻名专程来访。
            </p>
        </section>
    );
    const jinbin = (
        <section className="specialAdvisor">
            <Title>金斌 / 赛事顾问</Title>
            <blockquote>NOI2008金牌、TCO和TCHS世界冠军、ACM比赛世界冠军</blockquote>
            <p className="txt">
                NOI2008金牌、NOIP2007、2006全国一等奖同时于2009年先后夺得TCO和TCHS两次世界冠军，成为这两项比赛有史以来第一个双冠王和最年轻的世界冠
                军，TopCoder的首席技术官Mike Lydon称赞金斌在计算机方面的前途是不可限量的。“这个男孩可以完成任何他想做的事。”他如此评价。在2010年去往
                上海交大ACM班后又传来喜讯：由金斌参与的交大ACM队再次获得了2010届ACM比赛世界冠军，获得这一切荣耀之后，他说道：“我的不断进步，完全得益于
                省常中信息学竞赛的优秀团队，得益于曹老师的教导。”
            </p>
        </section>
    )
    const chenjun = (
        <section className="specialAdvisor">
            <Title>陈俊 / 产品顾问</Title>
            <blockquote>清华大学毕业、腾讯总监、打造亿级PV产品</blockquote>
            <p className="txt">
                1993年获江苏省程序设计竞赛高中组第3名，1994年保送入清华大学，入选实验班（特长班），97年获美国大学生数模竞赛特等奖（唯一的中国
                队）。在校期间作为国内第一批研究和应用Linux的爱好者，为Linux内核汉化和Linux中文平台做出了重要贡献，是Linux中文化开拓者之一。
                后作为技术负责人参与创办航天Linux，带领技术团队在嵌入式专用系统、防火墙、安全邮件系统等方面推出了一系列自主创新产品，航天Linux
                和当时国际上第二大Linux厂商TurboLinux合并，并控股。2006-2014年在腾讯多个部门担任总监职位，打造了亿级PV的互联网产品“问问”
                并先后全面负责腾讯搜索广告、效果广告商务平台研发中心。2014年起创业，打造了开创性大数据姓名研究和科学宝宝起名的起名通，多次获得
                人民日报和包括央视、新华社等几乎所有主流媒体的报道。
            </p>
        </section>
    )
    const jiangzhongtian = (
        <section className="specialAdvisor">
            <Title>蒋中天 / 特别顾问</Title>
            <blockquote>NOI2009金牌、IOI2011金牌、美国总统奖科研奖</blockquote>
            <p className="txt">
                NOI2009全国信息学奥林匹克夏令营比赛斩获银牌，NOI2009全国信息学奥林匹克竞赛以总分第 2名的优异成绩获得金牌，并入选国家集训队。
                2011年7月28日荣获第23届国际青少年信息学奥林匹克竞赛（IOI2011）金牌，成为继恽之玮之后常州市第二位荣获国际奥赛金牌的选手。 20
                11年8月，他放弃清华大学的保送资格，远赴美国理工科三强之一的佐治亚理工学院计算机 系继续深造。2012年作为队长带队参加ACM比赛，取
                得历史性突破，近十年来首次获得北美地 区的出线资格，并在波兰华沙举行的第36届ACM/ICPC全球总决赛，为学校争得了荣誉。在校期 间所
                研究的Pallet Packing课题获得美国总统奖科研奖，先后赴Facebook和Google等世界500 强企业实习。大学毕业后进入谷歌工作，目前任
                职于Uber公司从事基于机器学习的卡车货运平 台的研发。
            </p>
        </section>
    )
    let imgArray = [img1,img2,img1,img2,img1,img2];

    return (
        <Typography className="main">
            <section>
                <div style={{width:"1800px"}}>
                    <Slider {...settings}>
                        {
                            imgArray.map((item, id)=>
                                <div className={"index-img-wrapper"}>
                                    <img src={imgArray[id]} alt=""/>
                                </div>
                            )
                        }
                    </Slider>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
            </section>
            <section>
                <Title>面向未来的能力培养</Title>
                <blockquote>人工智能时代，C++程序设计对学生核心能力的培养</blockquote>
                <img src={abilityRaise}/>
                <br/>
                <br/>
                <br/>
                <br/>
            </section>
            <section>
                <Title>启智树师资</Title>
                <blockquote>一线名师，为编程教育保驾护航</blockquote>
                <section>
                    <div style={{width:"1800px"}}>
                        <Slider {...settings}>
                            <div className={"index-img-wrapper"}>
                                <img src={teacher1} style={{width:"1400px", height:"500px"}} alt=""/>
                            </div>
                            <div className={"index-img-wrapper"}>
                                <img src={teacher2} style={{width:"1400px", height:"500px"}} alt=""/>
                            </div>
                        </Slider>
                    </div>
                </section>
                <br/>
                <br/>
                <br/>
                <br/>
            </section>
            <section className="section03">
                <section>
                    <Title>特别顾问</Title>
                    <blockquote>金牌教练、选手、世界冠军特别顾问支持</blockquote>
                </section>
                <Space wrap>
                    <Popover content={caowen}  trigger="hover">
                        <ul className="tabNavi">
                            <li><a><span><img src={caowenpic} alt=""/></span></a></li>
                        </ul>
                    </Popover>
                    <Popover content={jinbin}  trigger="hover">
                        <ul className="tabNavi">
                            <li><a><span><img src={jinbinpic} alt=""/></span></a></li>
                        </ul>
                    </Popover>
                    <Popover content={chenjun}  trigger="hover">
                        <ul className="tabNavi">
                            <li><a><span><img src={chenjunpic} alt=""/></span></a></li>
                        </ul>
                    </Popover>
                    <Popover content={jiangzhongtian}  trigger="hover">
                        <ul className="tabNavi">
                            <li><a><span><img src={jiangzhongtianpic} alt=""/></span></a></li>
                        </ul>
                    </Popover>
                </Space>
            </section>

            <section className="section04">
                <div className="wrap">
                    <div className="inner clearfix">
                        <div className="photoBox">
                            <img className="img01" src={[require("../../assets/img/img16.png")]} alt=""/>
                            <img className="img02" src={[require("../../assets/img/img17.png")]} alt=""/>
                            <img className="img03" src={[require("../../assets/img/img18.png")]} alt=""/>
                            <img className="img04" src={[require("../../assets/img/img19.png")]} alt=""/>
                            <img className="img05" src={[require("../../assets/img/img20.png")]} alt=""/>
                            <img className="img06" src={[require("../../assets/img/img21.png")]} alt=""/>
                        </div>
                        <div className="txtBox">
                            <p className="ttl"><span>为什么选择我们</span>Why did you choose us ?</p>
                            <p className="txt">启智树拥有全国一流的课程体系，阵容强大的师资团队、引领行业的教学方法，精英教育品质。</p>
                            <ul className="clearfix">
                                <li className="li01"><span>20+</span>教学经验</li>
                                <li><span>1000+</span>优秀学员</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section05">
                <div className="wrap">
                    <div className="inner clearfix">
                        <div className="movie"><a href="#"/></div>
                        <div className="txtBox">
                            <p className="ttl"><span>程序设计对未来的影响</span> 未来已来，人工智能时代的程序设计</p>
                            <p className="txt">AI的前世今生，信奥的那些大牛，什么是程序设计?</p>
                            <p className="txt">C++程序设计对学生能力的培养，我们教学特色？<br/>
                                您想知道的一切，都可以从本视频中了解<br/>
                                敬请观看！</p>
                            <div className="btn"><a href="#">观看视频</a></div>
                        </div>
                    </div>
                </div>
            </section>
            <div>
                <div className="cover"/>
                <div className="pop">
                    <div className="close"><a href="#"/></div>
                    <div className="video">
                        <video src="https://vedio.code101.com.cn/58fc0d5ca9a14d0b91905a37ddeab8eb/858c3ac9f3abb7d7c1bd47f6271c4383-hd.mp4" controls/>
                    </div>
                </div>
            </div>
            <Footer/>
        </Typography>
    );
}

export default Index;
