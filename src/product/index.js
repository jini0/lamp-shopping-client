import React from 'react';
import './product.scss';

const ProductPage = () => {
    return (
        <div className='inner'>
            <div id="image-box">
                <img src="images/products/product1.jpg" alt="" />
            </div>
            <div id="profile-box">
                <ul>
                    <li>
                        <div>
                            <img src="images/icons/avatar.png" alt=""/>
                            <span>그린</span>
                        </div>
                    </li>
                    <li>
                        제품명 새로운 조명
                    </li>
                    <li>
                        가격 50,000원
                    </li>
                    <li>등록일 2022년 6월 2일</li>
                    <li>상품설명 </li>
                </ul>
            </div>
        </div>
    );
};

export default ProductPage;