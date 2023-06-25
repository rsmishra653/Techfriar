const Header = () => {
    return (
        <div className="header-container">
            {/* Logo */}
            <div className="logo">
                <h4>People</h4>
                <button></button>
            </div>

            {/* Filter section */}
            <div className="filter-container">
                <div className="filter-input">
                    <form>
                        <input type="text" placeholder="Search" />
                    </form>
                </div>
                <div className="filter-button">
                    <button type="button">
                        <img
                            src="src/assets/icons/filter.svg"
                            alt="filter icon"
                        />
                        Filter
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header
