const Menu = () => {
    return (
        <>
            <div className="top-menu">
                <ul className="list-top">
                    <li>
                        <img src="src/assets/icons/menu.png" alt="" />
                    </li>
                    <li>
                        <img src="src/assets/icons/calendar.png" alt="" />
                    </li>
                    <li>
                        <img
                            src="src/assets/icons/calendar-outline.png"
                            alt=""
                        />
                    </li>
                    <li>
                        <img src="src/assets/icons/add.png" alt="" />
                    </li>
                    <li className="active">
                        <img src="src/assets/icons/users.png" alt="" />
                    </li>
                    <li>
                        <img src="src/assets/icons/building-line.png" alt="" />
                    </li>
                </ul>
            </div>
            <div className="bottom-menu">
                <ul className="list-bottom">
                    <li>
                        <img src="src/assets/icons/notification.png" alt="" />
                    </li>
                    <li>
                        <div className="menu-avatar"></div>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Menu
