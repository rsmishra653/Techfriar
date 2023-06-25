import { useState } from 'react'
import Menu from '../components/Menu/Menu'

const Navbar = () => {
    const [isVisible, setIsVisible] = useState(false)
    return (
        <>
            <div
                className={
                    !isVisible
                        ? 'navbar-wrapper'
                        : 'navbar-wrapper mobile-navbar'
                }
            >
                <div className="profile">
                    <div className="profile-avatar"></div>
                </div>
                <Menu />
            </div>
            <div
                onClick={() => setIsVisible(!isVisible)}
                className="mobile-menu"
            ></div>
        </>
    )
}

export default Navbar
