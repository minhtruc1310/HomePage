import React from 'react';
import '../css/footer.scss';

function FormComponent() {
    return (
        <div className='flex-col' style={{ gap: 16 }}>
          <input placeholder='Name ABC'/>
          <input placeholder='example@gmail.com'/>
          <textarea></textarea>
          <button>SUBMIT</button>
        </div>
    )
}

function Footer() {

    return (
      <div className="footer flex-row">
        <div className='left-container flex-col'>
            <img src='https://kilala.vn/images/10th-anni-logo-web-01-01.svg' alt='' />
            <div className='flex-row' style={{ gap: 128 }}>
                <div className='flex-col' style={{ gap: 16, width: '50%' }}>
                    <span className='title'>KILALA COMMUNICATION</span>
                    <span>Tầng 3, Tòa nhà Copac Square, 12 Tôn Đản, Phường 13, Quận 4, TP.HCM, VN</span>
                    <span>(+84) 902 767 595</span>
                    <span>test-frontend@dev.kilala</span>
                </div>
                <div className='flex-col' style={{ gap: 8 }}>
                    <span className='title'>RELATES LINK</span>
                    <span>kilala.vn</span>
                    <span>biz.feeljapan.vn</span>
                    <span>www.shopkilala.com</span>
                    <span>awards.kilala.vn</span>
                    <span>japanguide.kilala.vn</span>
                </div>
            </div>
        </div>
        <div className='right-container'>
            <FormComponent/>
        </div>
      </div>
    );
  }
  
  export default Footer;