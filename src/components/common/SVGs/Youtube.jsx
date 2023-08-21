import React from 'react'

const Youtube = ({height, width}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={height} width={width} viewBox="0 0 16 16" id="youtube">
            <g fillRule="evenodd" clipRule="evenodd">
                <path fill="#F44336" d="M15.32 4.06c-.434-.772-.905-.914-1.864-.968C12.498 3.027 10.089 3 8.002 3c-2.091 0-4.501.027-5.458.091-.957.055-1.429.196-1.867.969C.23 4.831 0 6.159 0 8.497v.008c0 2.328.23 3.666.677 4.429.438.772.909.912 1.866.977.958.056 3.368.089 5.459.089 2.087 0 4.496-.033 5.455-.088.959-.065 1.43-.205 1.864-.977.451-.763.679-2.101.679-4.429v-.008c0-2.339-.228-3.667-.68-4.438z" />
                <path fill="#FAFAFA" d="M6 11.5v-6l5 3z" />
            </g>
        </svg>
    )
}

export default Youtube