import React from 'react';
import styled from 'styled-components';
import { ImgBlog } from '../atoms/ImgBlog';
import { Title } from '../atoms/Tittle';
import { Icon } from '../atoms/Icon';
import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons';

export const CardBlog = () => {
  return (
      <ContenedorCard>
        <ImgBlog
            src="https://images.pexels.com/photos/5077065/pexels-photo-5077065.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
        />
        <ContenedorDescription>
          <sub>5 min de lectura</sub>


          <Title
              content="Lorem ipsum dolor sit amet, consectetur."
          />
          <div>
            <Icon icon={ faComment } desc="360"/>
            <Icon icon={ faHeart } desc="1" heart/>
          </div>
        </ContenedorDescription>
      </ContenedorCard>
  );
};

const ContenedorCard = styled.div`
  display: flex;
  margin-top: 20px;
  height: 150px;
`;

const ContenedorDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 10px;
`;