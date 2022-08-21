import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './components/Home/Home'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import MovieDetail from './components/MovieDetail/MovieDetail'
import pageNotFound from './components/pageNotFound/pageNotFound'
import './App.scss';

function App() {
  return (
    <div className="App">
     <Router>
      <Header></Header>
      <Routes></Routes>
      <Route path="/" component={Home} />
      <Route path = "/movie/:imdbID" component={MovieDetail} />
      <Route component= {pageNotFound}/>
      <Routes/>
      <Footer />
     </Router>
    </div>
  );
}

export default App;
