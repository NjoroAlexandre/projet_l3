import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <Link to="/arrivees">Arrivées</Link>
            <Link to="/courriers">Courriers</Link>
            <Link to="/departs">Départs</Link>
        </nav>
    );
};

export default Navbar;
