import { useEffect} from 'react';

export default function useFetch(data, dispatch){
    useEffect(() => {
      dispatch({ type: 'FETCHING_IMAGES', fetching: true })
      fetch(`https://www.scoopwhoop.com/api/v4/read/all/?offset=${data.page}&limit=10`)
        .then(data => data.json())
        .then(images => {
          dispatch({ type: 'STACK_IMAGES', images })
          dispatch({ type: 'FETCHING_IMAGES', fetching: false })
        })
        .catch(e => {
          dispatch({ type: 'FETCHING_IMAGES', fetching: false })
          return e;
        })
    }, [dispatch, data.page])
  }