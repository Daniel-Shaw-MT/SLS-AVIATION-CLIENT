import people from '../assets/svg/030-people.svg'
import help from '../assets/svg/048-question.svg'
import { Link } from 'react-router-dom'
const Header = () => {

   
    return (
        <header>
            <div className='main-container'>
                <h1 className='title'>Login or Register</h1>
                <ul>
                    <li>
                        <Link to="/contact">
                        <button  className='main-button'><img className='menu-icon' src={people} alt='people'></img></button>
                        </Link>
                        <Link to="/help">
                            <button to="/help" className='main-button'><img className='menu-icon' src={help} alt='help'></img></button>
                        </Link>
                    </li>
                </ul>
            </div>
        </header>

    )
}

export default Header
