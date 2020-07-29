import React from 'react';

import { Container, Banner, Avatar, ProfileData, LocationIcon, CakeIcon, Followage, EditButton } from './styles';
import Feed from '../Feed'

const ProfilePage: React.FC = () => {
  return (
      <Container>
          <Banner>
              <Avatar />
          </Banner>

          <ProfileData>
            <EditButton outlined>Editar perfil</EditButton>

            <h1>Luiz Fernando Santos Silva</h1>
            <h2>@ssluizf</h2>

            <p>
                Web Developer
            </p>

            <ul>
                <li>
                    <LocationIcon />
                    São Paulo, Brasil
                </li>
                <li>
                    <CakeIcon />
                    Born June 21, 2001
                </li>
            </ul>

            <Followage>
                <span>
                    <strong>58</strong> Following
                </span>
                <span>
                    <strong>3</strong> Followers
                </span>
            </Followage>
          </ProfileData>

          <Feed />
      </Container>
  );
}

export default ProfilePage;