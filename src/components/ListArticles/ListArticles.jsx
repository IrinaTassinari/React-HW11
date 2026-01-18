import { NavLink} from 'react-router-dom'
import style from './ListArticles.module.css'
function ListArticles(){
    return(
        <div className={style.articles}>
            <ul className={style.articlesUl}>
                <li> <NavLink to='/articles/1'>Article about the dogs</NavLink></li>
                <li><NavLink to='/articles/2' >Article about the cats</NavLink></li>
                <li><NavLink to='/articles/3' >Article about the cows</NavLink></li>
                <li><NavLink to='/articles/4' >Article about the goats</NavLink></li>
                <li><NavLink to='/articles/5'  >Article about the frogs</NavLink></li>
            </ul>
        </div>
    )
}
export default ListArticles