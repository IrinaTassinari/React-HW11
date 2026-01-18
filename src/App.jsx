import { NavLink} from 'react-router-dom'
import './App.css'
import AppRoutes from './components/AppRoutes'

function App() {

  return (
    <>
      <nav className='navBar'>
        <ul className='list'>
          <li className='itemList'>
            <NavLink to='/' className={({isActive}) => isActive ? 'active_link' : ''}>Main Page</NavLink>
          </li>
           <li className='itemList'>
            <NavLink to='/listOfArticles' className={({isActive}) => isActive ? 'active_link' : ''}>List of Articles</NavLink>
          </li>
        </ul>
      </nav>
      <AppRoutes/>
    </>
  )
}

export default App






