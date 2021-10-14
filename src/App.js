// import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav/Nav';
import Header from './components/Header/Header'
import {Switch, Route, Redirect} from 'react-router-dom';
import Even from './pages/Even';
import Driver from './pages/Driver';
import Kids from './pages/Kids';

function App() {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route exact path='/'>
          <main>
            <h1 className="title">Split the Check</h1>
            <p className="text">Out for a meal with a big party? Want to split the check but arithmatic was never your strong suit? Here are some options for tailoring your tallies. Just drop in your check details and let the app do the math.</p>
            
            <Nav />

            <p className="text">Note: this app assumes: </p>
            <ul>
              <li>you are among friends and not calculating to the penny.</li>
              <li>you would prefer the suggested split to be in whole dollar amounts.</li>
            </ul> 
            <p>Calculating this way results in a small difference ($1-2 either way) in how the shares add up to the tip, due to rounding. If you want exact per person totals, ask your server for separate checks.</p>
            <br/>
          </main>
        </Route>
        <Route path='/even' >
          <Even />
        </Route>
        <Route path='/driver' >
          <Driver />
        </Route>
        <Route path='/kids' >
          <Kids />
        </Route>
        <Route path="*" render={() => <Redirect to={"/"} />} />
      </Switch>
    </div>
  );
}

export default App;
