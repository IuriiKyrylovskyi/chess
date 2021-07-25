const baseUrl = 'https://flatomark.com/api/v1/';

export const fetchFlatsList = axios('https://flatomark.com/api/v1/flats', {
    params: {
      project: 1,
    },
  })
    .then(response => {
      console.log(response);
      setData(response);
      buildingsNumbers(data);
      console.log(buildingsNumbers);
      console.log(buildingsNumbers.length); // for [1,2,3,...]
    })
    // .then(data => {
    // })
    .catch(error => {
      console.error('Error fetching data: ', error);
      setError(error);
    })
    .finally(() => {
      setLoading(false);
    });
}, []);
