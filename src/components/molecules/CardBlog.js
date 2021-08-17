import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ImgBlog } from '../atoms/ImgBlog';
import { Title } from '../atoms/Tittle';
import { Parrafo } from '../atoms/Parrafo';
import { colores } from '../../const/colores';

export const CardBlog = () => {
  return (
      <ContenedorCard to="#">
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

const ContenedorCard = styled(Link)`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  border-radius: 6px;
  text-decoration: none;
  transition: 0.4s;

  transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg);
  transform-style: preserve-3d;

  &:hover {
    transform: translate3d(0px, 0px, 0px) scale3d(1.02, 1.02, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg);
    transform-style: preserve-3d;
    border-radius: 16px;
    //background-color: #fff;
    box-shadow: 0 0 72px 36px rgba(0, 0, 0, .08);
  }

`;

const ContenedorDescription = styled.div`
  display: flex;
  padding: 10px;
  flex-wrap: wrap;
  margin-top: 10px;

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