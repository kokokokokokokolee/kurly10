import React from 'react';
import './sass/section4.scss'
import axios from 'axios';

export default function Section4Coponent({currentViewProduct}) {


    // const {슬라이드, n} = state;
    const [state, setState] = React.useState({
        슬라이드 : [],
        n : 0
    })

    
    React.useEffect(()=>{
        axios({
            url:'./data/section4.json',
            method:'GET'
        })
        .then((res)=>{
            setState({
                ...state,
                슬라이드: res.data.슬라이드,
                n:  res.data.슬라이드.length
            })
        })
        .catch(()=>{

        })
    })


    const onClickViewProduct=(e, item, imgPath)=>{
        e.preventDefault();       
        currentViewProduct(item, imgPath);
    }


    return (
        <section id='section4'>
            <div className="slide-container">
                    <div className="content">
                        <ul className="slide-wrap">
                            <li className="slide slide1">
                                    <div className="gap">
                                        <h2>
                                        더 강력해진 뷰티 특가<br />🎉
                                        </h2>
                                        <p>
                                        뷰티컬리페스타 한정 혜택
                                        </p>
                                        <h3>
                                        망설이면 늦어요!
                                        </h3>
                                        
                                    </div>
                            </li>
                          
                            {
                       state.슬라이드.map((item, idx)=>{
                        return(
                        <li onClick={(e)=>onClickViewProduct(e, item, './img/intro/section4/')} className={`slide slide${idx+2}`} key={item.번호}>
                                <div className="gap">
                                    <div className="img-box">
                                        <img src={`./img/intro/section4/${item.이미지}`} alt="" />
                                        <span><img src={"./img/intro/icon_cart_circle_purple.svg"} alt="" /></span>
                                    </div>
                                    <div className="caption">
                                        <h3>{item.상품명}</h3>
                                        <h4>
                                            <strong>{Math.round(item.할인율*100)}%</strong> {/* 매스.라운드==반올림 */}
                                            <em>{Math.round(item.정가*(1-item.할인율)).toLocaleString('ko'-'KO')}원</em><br />{/* //로칼스트링 콤마 */}
                                            <span>{item.정가.toLocaleString('ko'-'KO')}원</span>
                                        </h4> {/* 바인딩 할 거라 {}로 묶음 */}
                                        <p>
                                            <img src="./img/intro/icon_write.svg" alt="" />
                                            <span>후기{item.후기}</span>
                                        </p>
                                    </div>
                                </div>
                        </li>

                            )
                        })
                    }
                            
                        </ul>
                    </div>
                </div>
        </section>
    );
};

