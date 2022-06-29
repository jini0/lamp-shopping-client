import React from 'react';
import './index.scss';

const MainPage = () => {
    return (
        <div>
            <div id="main">
                <div id="banner">
                    {/* react는 img에 alt 속성이 없으면 계속 노란줄 뜸 */}
                    <img src="images/banners/banner1.png" alt="" />
                </div>
                <div id="product-list" className='inner'>
                    <h2>그린조명 최신상품</h2>
                    <div id="product-items">
                        {/* map으로 돌려서 8개항목 넣어줄거라 하나만 뼈대 만들어줘도 됨! */}
                        {/* ul로 안묶더라도 묶어주고 싶어서! */}
                        <div className="product-card">
                            <div className='product-img'>
                                <img src="images/products/product1.jpg" alt="" /> 
                            </div>
                            <div className='product-contents'>
                                <span className='product-name'>제품명</span>
                                <span className='product-price'>가격</span>
                                <div className='product-seller'>
                                    <img src="images/icons/avatar.png" alt="" />아무나
                                </div>
                            </div>
                        </div>
                        <div className="product-card">
                            <div className='product-img'>
                                <img src="images/products/product1.jpg" alt="" /> 
                            </div>
                            <div className='product-contents'>
                                <span className='product-name'>제품명</span>
                                <span className='product-price'>가격</span>
                                <div className='product-seller'>
                                    <img src="images/icons/avatar.png" alt="" />아무나
                                </div>
                            </div>
                        </div>
                        <div className="product-card">
                            <div className='product-img'>
                                <img src="images/products/product1.jpg" alt="" /> 
                            </div>
                            <div className='product-contents'>
                                <span className='product-name'>제품명</span>
                                <span className='product-price'>가격</span>
                                <div className='product-seller'>
                                    <img src="images/icons/avatar.png" alt="" />아무나
                                </div>
                            </div>
                        </div>
                        <div className="product-card">
                            <div className='product-img'>
                                <img src="images/products/product1.jpg" alt="" /> 
                            </div>
                            <div className='product-contents'>
                                <span className='product-name'>제품명</span>
                                <span className='product-price'>가격</span>
                                <div className='product-seller'>
                                    <img src="images/icons/avatar.png" alt="" />아무나
                                </div>
                            </div>
                        </div>
                        <div className="product-card">
                            <div className='product-img'>
                                <img src="images/products/product1.jpg" alt="" /> 
                            </div>
                            <div className='product-contents'>
                                <span className='product-name'>제품명</span>
                                <span className='product-price'>가격</span>
                                <div className='product-seller'>
                                    <img src="images/icons/avatar.png" alt="" />아무나
                                </div>
                            </div>
                        </div>
                        <div className="product-card">
                            <div className='product-img'>
                                <img src="images/products/product1.jpg" alt="" /> 
                            </div>
                            <div className='product-contents'>
                                <span className='product-name'>제품명</span>
                                <span className='product-price'>가격</span>
                                <div className='product-seller'>
                                    <img src="images/icons/avatar.png" alt="" />아무나
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MainPage;