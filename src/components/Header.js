import Button from './Button'

const Header = () => {
    return (
        <div className='bg-dark'>
            <nav className='container navbar-nav navbar-light d-flex flex-row p-2'>
                <h4 className='navbar-brand text-light'>Workspace</h4>
                <Button text='Logout' className='btn btn-dark text-light header-btn' onClick={ () => window.location.reload() }/>
            </nav>
        </div>
    )
}

export default Header
