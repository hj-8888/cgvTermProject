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
               <div className="button_bar">
                  <input type="checkbox" id="menuBtn" className="menuBtn"></input>
                  <label htmlFor="menuBtn" className="labelBtn">
                     <div></div>
                     <div></div>
                     <div></div>
                  </label>
                  <section className="memberInfo_box">
                     <ul className="sub_info">
                        <label htmlFor="menuBtn" className="closeBtn">X</label>
                        <li><img src="https://img.cgv.co.kr/R2014/images/common/ico/loginPassword.png" alt="로그인" /><span>로그인</span></li>
                        <li><img src="https://img.cgv.co.kr/R2014/images/common/ico/loginJoin.png" alt="회원가입" /><span>회원가입</span></li>
                        <li><img src="https://img.cgv.co.kr/R2014/images/common/ico/loginMember.png" alt="MY CGV" /><span>MY CGV</span></li>
                        <li><img src="https://img.cgv.co.kr/R2014/images/common/ico/loginCustomer.png" alt="고객센터" /><span>고객센터</span></li>
                     </ul>
                  </section>
               </div>
         </div>
    );
 }

 export default Header;