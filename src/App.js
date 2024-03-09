import { Component } from 'react';

import './App.css';

import Header from './components/Header';
import Main from './components/Main';

class App extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    fetch("/objectsJson/books.json")
    .then(response => response.json())
    .then(books => this.setState({ books }))
    .catch(function(error) {
      console.log("Request error");
    })
    .finally(function() {
      console.log("Always return");
    });
  };

  render() {
    return (
      <div className="App h-dvh w-dvw bg-stone-100 dark:bg-stone-400">
        <Header />
        <Main 
          books = { this.state.books }
        />
      </div>
    );
  }
}

export default App;