import { Component } from 'react';    // Import 'Component' from react

// Component imports
import Header from './components/Header';
import Main from './components/Main';

// Main container 'App'
class App extends Component {
  // Create the state that contains the arrays that contain the json obejects
  state = {
    books: [],
    movies: []
  };

  // Receives the books from the books json object
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

    fetch("/objectsJson/movies.json")
    .then(response => response.json())
    .then(movies => this.setState({ movies }))
    .catch(function(error) {
      console.log("Request error");
    })
    .finally(function() {
      console.log("Always return");
    });
  }; 

  // Main JSX
  render() {
    return (
      <div className="App h-full max-w-fit bg-stone-100 dark:bg-stone-400">
        <Header />
        <Main 
          books = { this.state.books }
          movies = { this.state.movies }
        />
      </div>
    );
  }
}

export default App;