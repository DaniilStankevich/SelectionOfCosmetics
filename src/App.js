import './scss/app.scss';
import { Button } from './components/Button';
import { Qwis } from './pages/Qwis';

function App() {



  return (

  

    <div className="wrapper">

    <div className="content"> 

     

      <div className='header'>  
        <h1>Онлайн-подбор средств для лица</h1>
        <h2>Пройдите короткий тест и получите список наиболее
          подходящих для вас косметических продуктов</h2>
      </div>


        {/* Страница с квизом*/}
       <Qwis />

    </div>

  </div>



)}

export default App;


