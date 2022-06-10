import React, {Component} from "react";

function Header(){
    return(
          <div className="header_content">
            <div className="contents">
               <h1 className='logo'>
                  <a href="/"><img src="https://img.cgv.co.kr/R2014/images/common/logo/logoRed.png" alt="CGV" /></a>
                  <span>CULTUREPLEX</span>
               </h1>
 
               <ul className="memberInfo_wrap">
                  <li><img src="https://img.cgv.co.kr/R2014/images/common/ico/loginPassword.png" alt="로그인" /><span>로그인</span></li>
                  <li><img src="https://img.cgv.co.kr/R2014/images/common/ico/loginJoin.png" alt="회원가입" /><span>회원가입</span></li>
                  <li><img src="https://img.cgv.co.kr/R2014/images/common/ico/loginMember.png" alt="MY CGV" /><span>MY CGV</span></li>
                  <li><img src="https://img.cgv.co.kr/R2014/images/common/ico/loginCustomer.png" alt="고객센터" /><span>고객센터</span></li>
               </ul>
            </div>
            <label className="memberInfo_box">
               <div></div>
               <div></div>
               <div></div>
               <ul className="sub_memberInfo_wrap">
                  <li><img src="https://img.cgv.co.kr/R2014/images/common/ico/loginPassword.png" alt="로그인" /><span>로그인</span></li>
                  <li><img src="https://img.cgv.co.kr/R2014/images/common/ico/loginJoin.png" alt="회원가입" /><span>회원가입</span></li>
                  <li><img src="https://img.cgv.co.kr/R2014/images/common/ico/loginMember.png" alt="MY CGV" /><span>MY CGV</span></li>
                  <li><img src="https://img.cgv.co.kr/R2014/images/common/ico/loginCustomer.png" alt="고객센터" /><span>고객센터</span></li>
               </ul>
            </label>
         </div>
    );
 }

 export default Header;