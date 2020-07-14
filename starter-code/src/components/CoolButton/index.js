import React from 'react'


export default function CoolButton({ children, className = '', ...others }) {
    const classesExtra = Object.keys(others).join(' ')
    console.log(className)
    return (
        <>
            <button className={`button ${className} ${classesExtra} `}  > {children}</button>
        </>
    )
}
