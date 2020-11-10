import './App.css';
import { Switch, Route } from 'react-router-dom'

// Components
import Header from './components/header/header.component'

// Pages
import ProductPage from './pages/product-details/product-details.component'

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={ProductPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
