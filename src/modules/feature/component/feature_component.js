import React from 'react';
import '../css/feature.scss';

function Feature() {

    return (
      <div className="feature flex-row">
        <img className='bg-img' src='https://pianotanbinh.com/wp-content/uploads/2021/11/dan-piano-dien-Yamaha-CLP545-R-1-scaled.jpg' alt='' />
        <div className="content">
            <div className="content-div">
                <img src='https://kilala.vn/data/uploads/2024/220520241723-1716373429-600x500-side-banner-new.jpg' alt='' />
                <div className='flex-col' style={{ gap: 36 }}>
                    <span style={{ color: '#aaa', fontWeight: 500, fontSize: 16}}>FEATURE WORK</span>
                    <span style={{ fontWeight: 500, fontSize: 32}}>KILALA CLASSIC DEMO</span>
                    <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                    <span style={{ color: '#aaa'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                    <div className='flex-col'>
                        <span>KILALA</span>
                        <span style={{ color: '#aaa', width: '80%'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</span>
                    </div>
                    <div className='flex-col'>
                        <span>KILALA</span>
                        <span style={{ color: '#aaa', width: '80%'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</span>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
  
  export default Feature;