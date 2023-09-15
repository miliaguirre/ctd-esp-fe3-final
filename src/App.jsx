import { Route, Routes } from 'react-router-dom'
import Home from './Routes/Home'
import Contact from './Routes/Contact'
import PageNotFound from './Routes/PageNotFound'
import { routes } from './utils/routes'
import Detail from './Routes/Detail'
import LayoutWhite from './Layout/LayoutWhite'
import LayoutBlack from './Layout/LayoutBlack'
import Favs from './Routes/Favs'
import Form from './Components/Form'
import { usecontextGlobal } from './Components/utils/GlobalContext'

function App() {
  // const dentistState = {dentistTheme:true}
  const {dentistState} = usecontextGlobal()
  const change = dentistState.dentistTheme
    return (
        <div className="App">          
            <Routes>
              {change ? 
                (<>
                  <Route path='/' element={<LayoutWhite/>}>
                    <Route path={routes.home} element={<Home/>}/>
                    <Route path={routes.contact} element={<Contact/>}/> 
                    <Route path={routes.detail} element={<Detail/>}/>
                    <Route path={routes.favs} element={<Favs/>}/>
                    <Route path={routes.form} element={<Form/>}/>
                    <Route path={routes.pageNotFound} element={<PageNotFound/>}/>
                  </Route>
                </>)
                  :
                  <Route path='/' element={<LayoutBlack/>}>
                    <Route path={routes.home} element={<Home/>}/>
                    <Route path={routes.contact} element={<Contact/>}/> 
                    <Route path={routes.detail} element={<Detail/>}/>
                    <Route path={routes.favs} element={<Favs/>}/>
                    <Route path={routes.form} element={<Form/>}/>
                    <Route path={routes.pageNotFound} element={<PageNotFound/>}/>
                  </Route>
              }          
            </Routes>        
        </div>
    );
}

export default App;
