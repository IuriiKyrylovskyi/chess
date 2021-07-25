import axios from 'axios';
import { baseUrl } from '../api/baseUrl';

export const fetchProjectsData = () => {
  return dispatch => {
    const fetchData = () =>
      axios(`${baseUrl}/projects`, {
        // params: {
        //   projects: projects,
        // },
      })
        .then(response => {
          console.log(response.data);
          return response.data;
        })
        .catch(error => {
          console.error('Error fetching data: ', error);
          // setError(error);
        })
        .finally(() => {
          // setLoading(false);
        });

    return fetchData;
  };
};
