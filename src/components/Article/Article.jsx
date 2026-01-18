import { useParams, useNavigate } from 'react-router-dom'
import style from './Article.module.css'

const articles = {
        1: {
            title: 'Article about dogs',
            text: 'Dogs are very loyal animals.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos vero perferendis quam mollitia. Accusamus aperiam rem molestias impedit quasi, reiciendis ratione distinctio sequi, incidunt vitae enim consequatur iusto quis harum repellat! Molestias omnis enim eum ipsum, laudantium sequi! Repudiandae doloribus non molestias eos porro dolorem vero provident! Non, eos?'
        },
        2: {
            title: 'Article about cats',
            text: 'Cats love independence.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos vero perferendis quam mollitia. Accusamus aperiam rem molestias.'
        },
        3: {
            title: 'Article about cows',
            text: 'Cows give us milk. Lorem Molestias omnis enim eum ipsum, laudantium sequi! Repudiandae doloribus non molestias eos porro dolorem vero provident! Non, eos?'
        },
        4: {
            title: 'Article about goats',
            text: 'Goats are very curious. lorem Aliquid dignissimos vero perferendis quam mollitia. Accusamus aperiam rem molestias.' 
        },
        5: {
            title: 'Article about frogs',
            text: 'Frogs live near water. Lorem Accusamus aperiam rem molestias impedit quasi, reiciendis ratione distinctio sequi, incidunt vitae enim consequatur iusto quis harum repellat! Molestias omnis enim eum ipsum, laudantium sequi! Repudiandae doloribus non molestias eos porro dolorem vero provident! Non, eos?'
        }
    }

  function Article() {

  const { id } = useParams()
  const navigate = useNavigate()
  const article = articles[id]

  if(!article){
    return(
        <h2>Article not found</h2>
    )
  }

  return (
    <div className={style.articleContent}>
      <h4>Article ID: {id}</h4>
      <h4>{article.title}</h4>
      <p>{article.text}</p>

      <button className={style.btn} onClick={() => navigate('/listOfArticles')}>
        Back to articles
      </button>
    </div>
  )
}

export default Article



