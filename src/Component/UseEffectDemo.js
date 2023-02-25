import React,{useState, useEffect} from 'react';


export default function useEffectDemo() {
    let[setValue,updateValue]=useState('HOME')
    useEffect((()=>{console.log(setValue)}),[setValue])

    return (
        <React.Fragment>
            <button onClick={()=>{updateValue('HOME')}} >HOME</button>
            <button  onClick={()=>{updateValue('PRODUCT')}}>PRODUCT</button>
            <button onClick={()=>{updateValue('ABOUT')}} >ABOUT</button>
            <h3>{setValue}</h3>
        </React.Fragment>
    )
}
