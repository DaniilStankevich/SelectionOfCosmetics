import { Routes, Route, useLocation} from 'react-router-dom';
import Qwis from './pages/Qwis';
import Products from './pages/Products';
import Header from './components/header/Header';
import './scss/app.scss';


function App() {

const location = useLocation();

// Фун-ция по формированию заголовков на основании маршрута в строке запроса
const headerValues = (params) => {

// Можно автоматически добавлять соответствующие заголовки 
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
      <div className='subWrapper'> 

      <div className='header'> 
            <Header mainTitle={titles.mainTitle} subTitle={titles.subTitle}  /> 
      </div>

      <Routes>
            <Route  path="/" element={<Qwis />}  />
            <Route  path="/products" element={<Products />}  />
      </Routes>

      </div>
  </div>

)}

export default App;


