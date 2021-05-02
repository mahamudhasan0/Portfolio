import React from 'react'
import Typed from 'react-typed'
import './ColorText.css'


function ColorText() {
    return (
        <div className='colorWrapper'>
            <h1 className='hello'>
                Hello,<span className='iam'>I'm</span>
            </h1>
       
            <div className='text-container'>
                <h1 className='bachelor'>Mahamud Hasan</h1>
            </div>

            <div>
                <Typed
                    strings={[

                        '<strong>You Can Call Me</strong> Engineer',
                        '<strong>You Can Call Me</strong> Developer',
                        '<strong>You Can Call Me</strong> Full Stack Developer',
                        ]}
                    typeSpeed={125}
                    backSpeed={125}
                    loop
                    className='TyperText'
                />
            </div>
            
                  <a href="https://drive.google.com/file/d/1IT_po0iK_SJ4zUY296Ai8qx0l7-LgbF9/view?usp=sharing" className='btn'>Download Cv</a>
           
        </div>
    )
}

export default ColorText
