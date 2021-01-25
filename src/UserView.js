import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//import { Login } from './Login';

class UserView extends React.Component {
  constructor() {
    super();

    this.state = {
      FavoriteMovies: [],
      user: null
    };
  }

  componentDidMount() {
    let accessToken = localStorage.getItem('token');
    if (accessToken !== null) {
      this.setState({
        user: localStorage.getItem('user')
      });
      this.getFavorites(accessToken);
    }
  }

  getFavorites(token) {
    axios.get(`https://movie-api11.herokuapp.com/users/${username}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(response => {
        this.setState({
          FavoriteMovies: response.data
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  onLoggedIn(authData) {
    this.setState({
      user: authData.user.Username
    });

    localStorage.setItem('token', authData.token);
    localStorage.setItem('user', authData.user.Username);
    this.getFavorites(authData.token);
  }

  render() {
    const { FavoriteMovies, user } = this.state;

    return (
      <div>
        <Router>
          <Route
            exact path="/"
            render={() => {
              if (!user)
                return (
                  <Login onLoggedIn={user => this.onLoggedIn(user)} />);
              return (
                <div>
                  {FavoriteMovies.map}
                </div>
              )
            }} />
        </Router>
      </div>
    )
  }
}

export default UserView
