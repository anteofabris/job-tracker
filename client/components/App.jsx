import React from 'react';
import HomePage from './HomePage.jsx';
import AppliedPage from './AppliedPage.jsx';
import ResponsePage from './ResponsePage.jsx';
import ResponseSavedPage from './ResponseSavedPage.jsx';
import LandingPage from './LandingPage.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentPage: 'landing-page'
    }
  }

  render() {
    return (
      <div>
      </div>
    )
  }
}

export default App;