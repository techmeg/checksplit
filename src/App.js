// import logo from './logo.svg';
import "./App.css";
import ButtonGroup from "./components/ButtonGroup/ButtonGroup";
import { Switch, Route, Redirect } from "react-router-dom";
import Even from "./pages/Even";
import Driver from "./pages/Driver";
import Kids from "./pages/Kids";

function App() {
  return (
    <div className='app mobile-width'>
      <Switch>
        <Route exact path='/'>
          <header id='header'>
            <h1 className='header-home rise'>
              <span className='fade-out'>Split the</span>
              <span> Check</span>
              <span className='fade-in'>/ Split</span>
            </h1>
          </header>
          <main className='container flow add-last'>
            <h2 className='text'>Out for a meal with a big party?</h2>
            <p>
              Want to split the check but arithmatic was never your strong suit?
            </p>
            <p>
              Here are some options for tailoring your tallies. Just drop in
              your check details and let the app do the math.
            </p>

            <ButtonGroup />

            <div className='text align-left'>
              <strong>Note:</strong>
              <ul className='bulleted'>
                <li>you are among friends and not calculating to the penny.</li>
                <li>suggested split will be in whole dollar amounts.</li>
              </ul>
            </div>
            <br />
          </main>
        </Route>
        <Route path='/even'>
          <Even />
        </Route>
        <Route path='/driver'>
          <Driver />
        </Route>
        <Route path='/kids'>
          <Kids />
        </Route>
        <Route path='*' render={() => <Redirect to={"/"} />} />
      </Switch>
    </div>
  );
}

export default App;
