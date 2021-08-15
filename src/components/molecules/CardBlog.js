import React from 'react';
import styled from 'styled-components';
import { ImgBlog } from '../atoms/ImgBlog';
import { Title } from '../atoms/Tittle';
import { Parrafo } from '../atoms/Parrafo';
import { colores } from '../../const/colores';

export const CardBlog = () => {
  return (
      <ContenedorCard>
        <ImgBlog
            src="https://images.unsplash.com/photo-1593642533144-3d62aa4783ec?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        />
        <ContenedorDescription>
          <a>5 min de lectura</a>


          <Title
              content="Lorem ipsum dolor sit amet, consectetur."
          />
          <Parrafo
              contenido="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum error harum officia officiis quam sapiente tempora! Corporis dignissimos sequi ut."
              desc
          />
        </ContenedorDescription>
      </ContenedorCard>
  );
};

const ContenedorCard = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
    //background-color: ${ colores.blanco };
  border-radius: 6px;
`;

const ContenedorDescription = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 15px;

  a {
    background-color: ${ colores.verdeOscuro };
    border-radius: 10px;
    padding: 5px;
    font-weight: 600;
    color: ${ colores.textoNegro }
  }

  p {
    margin-top: 4px;
  }
`;