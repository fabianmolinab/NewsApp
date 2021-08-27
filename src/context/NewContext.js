import React, { useEffect, useState } from 'react';
import { getAPI } from '../helpers/getAPI';

//export const NewContext = createContext();

export const NewsPage = () => {

  const [news, setNews] = useState();

  useEffect(() => {
    getAPI().then(( data ) => {
      setNews(data);
      console.log(data);
    }).catch(( error ) => console.log(error));
  }, []);

  return news;
};