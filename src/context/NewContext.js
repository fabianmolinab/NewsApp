import React, { createContext, useEffect, useState } from 'react';
import { getAPI } from '../helpers/getAPI';

export const NewContext = createContext(null);

export const NewContextProvider = ( props ) => {

  const [news, setNews] = useState();

  useEffect(() => {
    getAPI().then(( data ) => {
      setNews(data.articles);
      console.log(data.articles);
    }).catch(( error ) => console.log(error));
  }, []);

  return (
      <NewContext.Provider value{ {news} }>
        { props.children }
      </NewContext.Provider>
  );
};