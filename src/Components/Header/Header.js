import { Nav, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import './Header.css'
const Header = () => {
    const { logOut, user } = useAuth()
    return (
        <nav className="navbar navbar-expand-lg navbar-light sticky-top" >
            <div className="container-fluid">
                <Nav.Link className="navbar-brand text-dark" href="#"> TOUR ONE </Nav.Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"> </span>
                </button>
                <div className="collapse navbar-collapse  justify-content-end" id="navbarNav">
                    <Nav.Link className="text-dark" as={Link} to="/home"><h6>Home</h6></Nav.Link >
                    <Nav.Link className="text-dark" as={Link} to="/manageOrder"><h6>Manage All Orders</h6></Nav.Link >

                    {user.email ?
                        <div className='logout-control'>

                            <Nav.Link className="text-dark" as={Link} to="/myOrder"><h6>My Order</h6></Nav.Link >
                            <Nav.Link className="text-dark" as={Link} to="/addService"><h6  >Add Service</h6></Nav.Link >
                            <h6 className='text-danger' onClick={logOut} >LogOut</h6>
                        </div>
                        : <Nav.Link className="text-dark" as={Link} to="/login"><h6  >Login</h6></Nav.Link >}
                    <Nav.Link className="text-dark" as={Link} to="/register"><h6  >Sign Up</h6></Nav.Link >
                    {user.displayName === null ? <Nav.Link>No Name</Nav.Link> : <h5>{user.displayName}</h5>}
                </div>
            </div>
        </nav>
    );
};

export default Header;