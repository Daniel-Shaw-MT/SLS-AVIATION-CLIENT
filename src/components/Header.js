import people from '../assets/svg/030-people.svg'
import gear from '../assets/svg/007-gear.svg'
import help from '../assets/svg/048-question.svg'
const Header = () => {

   
    return (
        <header>
            <div className='main-container'>
                <h1 className='title'>Login or signup</h1>
                <ul>
                    <li>
                        <button className='main-button'><img className='menu-icon' src={people} alt='people'></img></button>
                        <button className='main-button'><img className='menu-icon' src={help} alt='people'></img></button>
                        <button className='main-button'><img className='menu-icon' src={gear} alt='settings'></img></button>

                    </li>
                </ul>
            </div>
        </header>

    )
}

export default Header
