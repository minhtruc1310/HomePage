import React, { useState } from 'react';
import '../css/header.scss';

function Category({selected, select}) {
    const category = ['HOME', 'ABOUT US', 'FEATURE WORK', 'REFERENCE', 'BLOG']

    function selectCategory(item) {
        select(item)
    }

    return (
        <div className='flex-row category'>
            {category.map((item, index) => {
                return (
                    <div onClick={() => selectCategory(item)} key={index} className={'item ' + (selected === item ? 'active' : '')}>
                        {item}
                    </div>
                )
            })}
        </div>
    )
}

function Header() {
    const [selectCategory, setSelectCategory] = useState('HOME');

    function handleCategory(item) {
        setSelectCategory(item);
    }

    return (
      <div className="header flex-row">
        <img src='https://kilala.vn/images/10th-anni-logo-web-01-01.svg' alt='' />
        <Category selected={selectCategory} select={handleCategory}/>
      </div>
    );
  }
  
  export default Header;