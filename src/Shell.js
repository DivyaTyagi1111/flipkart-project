import React from 'react'

export default function Shell() {
    return (
        <div>
            <div className='header'>
                <div className='menu-img'>
                    <img alt="menu" src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjRkZGIiBoZWlnaHQ9IjM2IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIzNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMyAxOGgxOHYtMkgzdjJ6bTAtNWgxOHYtMkgzdjJ6bTAtN3YyaDE4VjZIM3oiLz48L3N2Zz4=" height="20px" width="20px" />
                </div>
            </div>
            <div className='loader'>
                <div className="lds-ring">
                    <div />
                    <div />
                    <div />
                    <div />
                </div>
            </div>
        </div>
    )
}