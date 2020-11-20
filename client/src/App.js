import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// Components
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Switch>
          <Route path="/" component={Home} exact />
        </Switch>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
