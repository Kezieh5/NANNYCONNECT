import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './LandingPage';
import UserAuthentication from './UserAuthentication';
import SearchCaregivers from './SearchCaregivers';
import BookingScheduling from './BookingScheduling';
import UserProfiles from './UserProfiles';
import ReviewsRatings from './ReviewsRatings';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route path="/login" component={UserAuthentication} />
                <Route path="/search" component={SearchCaregivers} />
                <Route path="/booking" component={BookingScheduling} />
                <Route path="/profile" component={UserProfiles} />
                <Route path="/reviews" component={ReviewsRatings} />
            </Switch>
        </Router>
    );
}

export default App;
