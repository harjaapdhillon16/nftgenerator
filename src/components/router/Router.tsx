import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { uauth } from '~/config/unstoppableDomain';
import IndexScreen from '../screens/Index';
import LoggedIn from '../screens/LoggedIn';
import CallBack from '../screens/Callback';

export const Router = () => {
  const [profile, setProfile] = useState<any>(null);

  const fetchUser = () => {
    uauth.user().then((data) => {
      if (data) {
        setProfile(data);
      } else {
        setProfile(false);
      }
    });
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <IndexScreen />
          </Route>

          <Route exact path="/callback">
            <CallBack />
          </Route>

          <Route exact path="/loggedIn">
            <LoggedIn />
          </Route>

          {profile ? <Redirect to="/loggedIn" /> : <Redirect to="/" />}
        </Switch>
      </BrowserRouter>
    </>
  );
};
