import React from 'react';
import '../css/blog.scss';

function Blog() {

    return (
      <div className="blog flex-row">
        <div className='blog-item'>
            <img className='bg-img' src='https://cdn.logojoy.com/wp-content/uploads/20200814102904/AdobeStock_218976523-min-1536x1086.jpeg' alt='' />
            <div className="content">
                <div className="content-div">
                    <div className='flex-col' style={{ gap: 36 }}>
                        <span style={{ color: '#aaa', fontWeight: 500, fontSize: 16}}>MARCH 27, 2024</span>
                        <span style={{ fontWeight: 500, fontSize: 32}}>HOW TO IMPROVE YOUR DESIGN ?</span>
                        <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex-col'>
            <div className='blog-item'>
                <img className='bg-img' src='https://www.ied.edu/_default_upload_bucket/1081/image-thumb__1081__scaleByWidth1000/1600x952px_Le%20scuole_Design.jpg' alt='' />
                <div className="content">
                    <div className="content-div">
                        <div className='flex-col' style={{ gap: 36 }}>
                            <span style={{ color: '#aaa', fontWeight: 500, fontSize: 16}}>MARCH 27, 2024</span>
                            <span style={{ fontWeight: 500, fontSize: 32}}>HOW TO IMPROVE YOUR DESIGN ?</span>
                            <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex-col resource'>
                <span className='title' style={{ fontWeight: 500, fontSize: 32}}>KILALA RESOURCES</span>
                <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                <button>ALL ARTICLES</button>
            </div>
        </div>
        
        
      </div>
    );
  }
  
  export default Blog;