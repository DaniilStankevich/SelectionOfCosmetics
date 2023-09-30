import './scss/app.scss';
import { Qwis } from './pages/Qwis';
import { Products } from './pages/Products';
import { Routes , Route, useSearchParams, useParams, useLocation} from 'react-router-dom';
import Header from './components/header/Header';


function App() {




const location = useLocation();


// Фун-ция по формированию заголовков на основе параметров в строке запроса
const headerValues = (params) => {


// Можно автоматически добавлять соответсвующе заголовки 
// на основании той страницы, на которой мы находимся 
  switch (params) {

    case '/':
      return {mainTitle:"Онлайн-подбор средств для лица", 
             subTitle:"Пройдите короткий тест и получите список наиболее подходящих для вас косметических продуктов"};

    case '/products': 
      return {mainTitle:"Результат", 
             subTitle:"Мы подобрали для вас наиболее подходящие средства"};
  
    default:
     return  {mainTitle:"Добро пожаловать на наш сайт", 
              subTitle:"Здесь вы можете подобрать средство для вашей кожи"};;
  }

}

// Присваеваем полученный объект переменной
const titles = headerValues(location.pathname)


  return (


    <div className="wrapper">

      <div className='header'> 
            <Header mainTitle={titles.mainTitle} subTitle={titles.subTitle}  /> 
      </div>

      <Routes>
            <Route  path="/" element={<Qwis />}  />
            <Route  path="/products" element={<Products />}  />
      </Routes>

  </div>
)}

export default App;


