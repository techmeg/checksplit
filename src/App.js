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
            <h1 class='header-home rise'>
              <span class='fade-out'>Split the</span>
              <span> Check</span>
              <span class='fade-in'>/ Split</span>
            </h1>
          </header>
          <main class='container flow add-last'>
            <p className='text'>
              Out for a meal with a big party? Want to split the check but
              arithmatic was never your strong suit? Here are some options for
              tailoring your tallies. Just drop in your check details and let
              the app do the math.
            </p>

            <ButtonGroup />

            <p className='text align-left'>Note: this app assumes:</p>
            <ul>
              <li>you are among friends and not calculating to the penny.</li>
              <li>
                you would prefer the suggested split to be in whole dollar
                amounts.
              </li>
            </ul>
            <p>
              Calculating this way results in a small difference ($1-2 either
              way) in how the shares add up to the tip, due to rounding. If you
              want exact per person totals, ask your server for separate checks.
            </p>
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
