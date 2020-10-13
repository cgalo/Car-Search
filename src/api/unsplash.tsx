/**
 * Setup a preconfigured instance of the axios client that has default parameters set.
 * This is to shorten the code to get data from the unsplash API
 */

import axios from 'axios';

// Create an axios client with default properties
export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID ' + (process.env.REACT_APP_UNSPLASH_API_KEY)
      }
});