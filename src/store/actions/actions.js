import axios from 'axios';
export const loading = () => {
  return {
    type: "LOADING"
  };
};

export const loadData = (id) => {
  return dispatch => {

    var url;
    if (id != undefined) {

      url = `https://swapi.co/api/planets/${id}`;
    }

    axios.get(url)
      .then(function (response) {
        console.log("API RESPONSE ::: ", response)
        dispatch({
          type: 'LOAD_DATA',
          value: response.data
        });
      })
      .catch(function (error) {
        dispatch({
          type: 'LOAD_DATA_ERROR',
          value: 'Error'
        });
      });
  };

}




