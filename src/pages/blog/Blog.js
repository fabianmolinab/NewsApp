import React from 'react';
import styled from 'styled-components';
import { CardBlog } from '../../components/molecules/CardBlog';
import { NewsPage } from '../../context/NewContext';

export const Blog = () => {
  NewsPage();
  //console.log(news);
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
