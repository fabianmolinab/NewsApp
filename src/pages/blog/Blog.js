import React from 'react';
import { ImgBlog } from '../../components/atoms/ImgBlog';
import styled from 'styled-components';

export const Blog = () => {

  return (
      <>
        <ContenedorGlobal>

          <h2>Blog</h2>
          <div>
            <ImgBlog
                src="https://images.pexels.com/photos/5077065/pexels-photo-5077065.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
            />

            <div>
              <sub>5 min de lectura</sub>

              <tittle>
                Lorem ipsum dolor sit amet, consectetur.
              </tittle>
              <meta name="description"
                    content="Chica se retira de los juegos olimpicos"
              />
              <div>
                <icon/>
                <icon/>
              </div>
            </div>
          </div>
        </ContenedorGlobal>
      </>
  );
};

const ContenedorGlobal = styled.div`
  //margin-top: 20px;
  padding: 20px;
`;

