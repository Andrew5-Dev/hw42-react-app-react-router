import Menu from './Menu.tsx'

const Header = () => {
    return (
        <div className="container d-flex flex-wrap py-3 mb-4 border-bottom">
            <h1 className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">Header</h1>
            <Menu/>
        </div>

    )
}

export default Header