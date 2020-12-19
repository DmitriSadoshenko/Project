import './App.css';
import Nav from './Components/Nav/Nav.jsx'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Footer from './Components/Footer';
import Main from './Components/Main';
import Family from './Components/Nav/Portfolio/Family';
import Family1 from './Components/Nav/Portfolio/Family/Family1';
import Family2 from './Components/Nav/Portfolio/Family/Family2';
import Family3 from './Components/Nav/Portfolio/Family/Family3';
import Lovestory from './Components/Nav/Portfolio/Lovestory';
import Lovestory1 from './Components/Nav/Portfolio/Lovestory/Lovestory1';
import Lovestory2 from './Components/Nav/Portfolio/Lovestory/Lovestory2';
import Lovestory3 from './Components/Nav/Portfolio/Lovestory/Lovestory3';
import Portrait from './Components/Nav/Portfolio/Portrait';
import Portrait1 from './Components/Nav/Portfolio/Portrait/Portrait1';
import Portrait2 from './Components/Nav/Portfolio/Portrait/Portrait2';
import Price from './Components/Nav/Price';
import Contacts from './Components/Contacts';
import About_me from './Components/About_me';


function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/family' component={Family} />
        <Route path='/family_foto_1' component={Family1} />
        <Route path='/family_foto_2' component={Family2} />
        <Route path='/family_foto_3' component={Family3} />
        <Route path='/lovestory' component={Lovestory} />
        <Route path='/lovestory_foto_1' component={Lovestory1} />
        <Route path='/lovestory_foto_2' component={Lovestory2} />
        <Route path='/lovestory_foto_3' component={Lovestory3} />
        <Route path='/portrait' component={Portrait} />
        <Route path='/portrait_foto_1' component={Portrait1} />
        <Route path='/portrait_foto_2' component={Portrait2} />
        <Route path='/price' component={Price} />
        <Route path='/contacts' component={Contacts} />
        <Route path='/about_me' component={About_me} />
      </Switch>
      <Footer />
    </BrowserRouter>
    

    
  );
}

export default App;
