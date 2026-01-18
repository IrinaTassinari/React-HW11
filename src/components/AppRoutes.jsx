import {Routes, Route} from 'react-router-dom'
import MainPage from './MainPage/MainPage'
import ListArticles from './ListArticles/ListArticles'
import Article from './Article/Article'

function AppRoutes(){
    return(
        <div>
            <Routes>
                <Route path='/' element={<MainPage/>}/>
                <Route path='/listOfArticles' element={<ListArticles/>}/>
                <Route path='/articles/:id' element={<Article />} />
            </Routes>
        </div>
    )
}
export default AppRoutes