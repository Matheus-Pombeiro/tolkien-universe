import { Component } from 'react';    // Import 'Component' from react

// Component imports
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

// Main container 'App'
class App extends Component {
  // Create the state that contains the arrays that contain the json obejects
  state = {
    books: [],
    movies: [],
    games: [],
    series: []
  };

  // Receives the books from the books json object
  componentDidMount() {
    // Books json
    fetch("/objectsJson/books.json")
    .then(response => response.json())
    .then(books => this.setState({ books }))
    .catch(function(error) {
      console.log("Request error");
    })
    .finally(function() {
      console.log("Always return");
    });

    // Movies json
    fetch("/objectsJson/movies.json")
    .then(response => response.json())
    .then(movies => this.setState({ movies }))
    .catch(function(error) {
      console.log("Request error");
    })
    .finally(function() {
      console.log("Always return");
    });

    // Games json
    fetch("/objectsJson/games.json")
    .then(response => response.json())
    .then(games => this.setState({ games }))
    .catch(function(error) {
      console.log("Request error");
    })
    .finally(function() {
      console.log("Return always");
    });

    // Series json
    fetch("/objectsJson/series.json")
    .then(response => response.json())
    .then(series => this.setState({ series }))
    .catch(function(error) {
      console.log("Request error");
    })
    .finally(function() {
      console.log("Return always");
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
          games = { this.state.games }
          series = { this.state.series }
        />
        <Footer />
      </div>
    );
  }
}

export default App;