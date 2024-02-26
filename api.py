import React, { useEffect } from 'react';
import axios from 'axios';

const SearchCaregivers = () => {
    useEffect(() => {
        axios.get('/api/caregivers')
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error('Error fetching caregivers:', error);
            });
    }, []);

    return (
        <div>
            {/* Search caregivers component */}
        </div>
    );
}

export default SearchCaregivers;
