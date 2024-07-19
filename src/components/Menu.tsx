import {NavLink} from 'react-router-dom'

const Menu = () => {
    return (
        <nav className="d-flex justify-content-center py-3">
            <div>
                <NavLink to="/" className={({isActive}) => (isActive ? 'activeLink' : 'link')}>
                    Home
                </NavLink>
            </div>
            <div>
                <NavLink to="/about" className={({isActive}) => (isActive ? 'activeLink' : 'link')}>
                    About
                </NavLink>
            </div>
            <div>
                <NavLink to="/contacts" className={({isActive}) => (isActive ? 'activeLink' : 'link')}>
                    Contacts
                </NavLink>
            </div>
        </nav>
    )
}

export default Menu