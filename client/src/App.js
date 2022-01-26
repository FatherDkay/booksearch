// import React from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


// function App() {
//   return (
//     <Router>
//       <>
//         <Navbar />
//         <Switch>
//           <Route exact path='/' component={SearchBooks} />
//           <Route exact path='/saved' component={SavedBooks} />
//           <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
//         </Switch>
//       </>
//     </Router>
//   );
// }

// export default App;

import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';
import Navbar from './components/Navbar';

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

// import Header from './components/Header';
// import Footer from './components/Footer';

// import Home from './pages/Home';
// import Login from './pages/Login';
// import NoMatch from './pages/NoMatch';
// import SingleThought from './pages/SingleThought';
// import Profile from './pages/Profile';
// import Signup from './pages/Signup';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>

          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={SearchBooks} />
              <Route exact path="/saved" component={SavedBooks} />
              {/* <Route component={NoMatch} /> */}
            </Switch>
          </div>
          {/* <Footer /> */}
      </Router>
    </ApolloProvider>
  );
}

export default App;