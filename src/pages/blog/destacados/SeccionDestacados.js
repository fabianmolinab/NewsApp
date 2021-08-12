import React from 'react';
import styled from 'styled-components';
import { fonts } from '../../../const/fonts';

export const SeccionDestacados = () => {
  return (
      <>
        <H2>Hola Mundo</H2>
        <Parrafo>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
          autem
          dolorem et eum fugit harum maiores optio quam repellendus unde. Ab
          accusamus alias amet animi, aperiam consectetur consequuntur culpa cum
          dolorem earum eius fugiat hic impedit magnam minus odit porro
          possimus,
          quisquam saepe ullam vitae voluptate voluptatibus. Ab architecto
          asperiores, at, earum eum exercitationem harum laudantium modi natus
          nostrum perferendis provident quidem quo recusandae rem rerum, saepe
          ut?
          Aliquam cumque, deleniti, eligendi esse ex excepturi hic id in
          incidunt
          ipsa molestias neque nesciunt non officiis perferendis quod saepe
          suscipit. Accusamus accusantium adipisci aut blanditiis consequuntur
          corporis cumque deserunt dolore doloremque eaque earum et expedita
          facilis hic id ipsa ipsum itaque molestias nam odio quae quia quis
          repellendus saepe sint tenetur unde vero, voluptate voluptatem
          voluptatum. Ab beatae commodi cupiditate dignissimos doloremque ea et
          exercitationem, facilis hic id incidunt labore magni minus, mollitia
          nisi odit possimus praesentium provident quae quam quia quisquam quo
          sint sit temporibus veritatis voluptas voluptate? Animi corporis
          debitis
          delectus dolorem doloribus eaque eos est, exercitationem fugit impedit
          modi nemo nisi nostrum pariatur praesentium provident quasi rerum,
          ullam, voluptate voluptates. Alias architecto, consectetur dolorum
          enim
          incidunt iusto neque non recusandae rerum ut. Corporis cumque eaque
          natus quae quis.</Parrafo>
      </>
  );
};

const H2 = styled.h2`
  font-family: ${ fonts.regular };
  margin: 20px 0 0 10px;
  font-height: 500;
`;
const Parrafo = styled.p`
  font-family: ${ fonts.display };
  padding: 15px;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: -0.003em;
  text-rendering: optimizeLegibility;

`;