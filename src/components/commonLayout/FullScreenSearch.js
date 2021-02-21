import React from 'react'

export default function FullScreenSearch() {
    return (
    <div className="search-popup" id="search-popup">
        <form action="index.html" className="search-form">
            <div className="form-group">
                <input type="text" className="form-control" placeholder="Search....." />
            </div>
            <button type="submit" className="submit-btn"><i className="fa fa-search" /></button>
        </form>
    </div>
    )
}
