import React, { useContext } from 'react';
import styled from 'styled-components';
import { CardBlog } from '../../components/molecules/CardBlog';
import { NewContext } from '../../context/NewContext';

export const Blog = () => {
  const newsdata = useContext(NewContext);
  console.log(newsdata);
  return (
      <>
        <ContenedorGlobal>
          <h2>Blog</h2>
          <CardBlog/>
          <CardBlog/>
          <CardBlog/>
          <CardBlog/>
        </ContenedorGlobal>
      </>
  );
};

const ContenedorGlobal = styled.div`
  padding: 10px;
`;
