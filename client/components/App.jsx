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
    this.changePage = this.changePage.bind(this)
    this.renderPage = this.renderPage.bind(this)
  }

  changePage(newPage) {
    this.setState({currentPage: newPage})
  }

  renderPage() {
    const {currentPage} = this.state;
    if (currentPage === 'landing-page') {
      return (<LandingPage changePage={this.changePage} />)
    }
    if (currentPage === 'home-page') {
      return (<HomePage changePage={this.changePage}/>)
    }
    if (currentPage === 'applied-page') {
      return (<AppliedPage changePage={this.changePage}/>)
    }
    if (currentPage === 'response-page') {
      return (<ResponsePage changePage={this.changePage}/>)
    }
    if (currentPage === 'response-saved-page') {
      return (<ResponseSavedPage changePage={this.changePage}/>)
    }
  }

  render() {
    return (
      <div>
        {
          this.renderPage()
        }
      </div>
    )
  }
}

export default App;
