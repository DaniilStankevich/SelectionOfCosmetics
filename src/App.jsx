import './scss/app.scss';
import { Qwis } from './pages/Qwis';
import { Products } from './pages/Products';
import { Routes , Route} from 'react-router-dom';

function App() {


  return (


    <div className="wrapper">

    
      <div className='header'>  
        <h1>Онлайн-подбор средств для лица</h1>
        <h2>Пройдите короткий тест и получите список наиболее
          подходящих для вас косметических продуктов</h2>
      </div>

      <Routes>
            <Route  path="/" element={<Qwis />}  />
            <Route  path="/products" element={<Products />}  />
      </Routes>

  </div>
)}

export default App;


