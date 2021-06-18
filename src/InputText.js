import "./InputText.css"
import React from 'react';
const InputText = (props) =>{
     const label =React.createRef();
     const inputChangeHandler = (event) =>{
          if(event.target.value !== ''){
               label.current.classList.add('input--label__hover');
          }
          else label.current.classList.remove('input--label__hover');
     }
     return (
          <div className={`input--container ${props.color==='blue' ? 'input--container__blue' : ''}` }>
               <input className={`input--element ${props.color==='blue' ? 'input--element__blue' : ''}` }type='text' placeholder={props.placeholder}  id='cta-name' onChange = {inputChangeHandler}/ >
               <label className ={`input--label `} htmlFor="cta-name" ref={label}>{props.label}</label>
          </div>
     )
}
export default InputText;