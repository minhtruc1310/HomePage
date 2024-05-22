import React, { useState } from 'react';
import '../css/about.scss';

function ItemComponent() {
    const list = [
        {
            title: 'BRANDING',
            body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
        },
        {
            title: 'WEB DESIGN',
            body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
        },
        {
            title: 'WEB DEVELOPMENT',
            body: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32."
        },
        {
            title: 'ONLINE MARKETING',
            body: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32."
        },
    ];

    return (
        <div className='flex-row list_2'>
            {list.map((item, index) => {
                return (
                    <div key={index} className='item flex-col'>
                        <span className='title'>{item.title}</span>
                        <span>{item.body}</span>
                    </div>
                )
            })}
        </div>
    )
}

function AboutCategory({selected, select}) {
    const category = ['SERVICES', 'ABOUT CESIS', 'PURCHASE NOW'];

    function selectCategory(item) {
        select(item)
    }

    return (
        <div className='flex-row list_1'>
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

function About() {
    const [selectCategory, setSelectCategory] = useState('SERVICES');

    function handleCategory(item) {
        setSelectCategory(item);
    }

    return (
      <div className="about flex-col">
        <div className='top-container flex-col'>
            <span className='title'>- ABOUT US -</span>
            <span className='describe'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
            the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to 
            make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
            essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>
        </div>
        <div className='bottom-container flex-col'>
            <AboutCategory selected={selectCategory} select={handleCategory}/>
            <ItemComponent/>
        </div>
        
        
      </div>
    );
  }
  
  export default About;