import React from 'react'
import classes from './IconDesigns.module.css'


const DesignIcon = ({ onClick, selected }) => {
    const style = {border: "none", background: "#ddd"}

    return (
        <div className={classes.main} onClick={onClick} style={selected ? style : {}}>
            <svg viewBox="0 0 32 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.8785 16.7848V0.0458984L31.2523 19.9086L22.3364 30.7429H8.9627L0.046875 19.9086L13.4206 0.0458984V16.7848C12.5707 17.1823 11.9065 17.7958 11.531 18.5303C11.1554 19.2648 11.0896 20.0791 11.3436 20.8471C11.5975 21.615 12.1572 22.2935 12.9358 22.7775C13.7143 23.2614 14.6682 23.5238 15.6496 23.5238C16.6309 23.5238 17.5848 23.2614 18.3634 22.7775C19.1419 22.2935 19.7016 21.615 19.9556 20.8471C20.2096 20.0791 20.1437 19.2648 19.7681 18.5303C19.3926 17.7958 18.7284 17.1823 17.8785 16.7848ZM6.73374 32.5486H24.5654V36.16H6.73374V32.5486Z" fill="#4A90F4" />
            </svg>

        </div>
    )
}

export default DesignIcon