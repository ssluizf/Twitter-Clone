import React from 'react';

import { Container, Retweeted, RocketseatIcon, Body, Avatar, Content, Header, Dot, Description, ImageContent, Icons, Status, CommentIcon, RetweetIcon, LikeIcon } from './styles';

const Tweet: React.FC = () => {
  return (
      <Container>
          <Retweeted>
              <RocketseatIcon />
              You retweeted
          </Retweeted>

          <Body>
              <Avatar />
              <Content>
                  <Header>
                      <strong>Rocketseat</strong>
                      <span>@rocketseat</span>
                      <Dot />
                      <time>29 de jul</time>
                  </Header>

                  <Description>Foguete não tem ré 🚀</Description>

                  <ImageContent />

                  <Icons>
                      <Status>
                          <CommentIcon />
                          111
                      </Status>
                      <Status>
                          <RetweetIcon />
                          42
                      </Status>
                      <Status>
                          <LikeIcon />
                          999
                      </Status>
                  </Icons>
              </Content>
          </Body>
      </Container>
  );
}

export default Tweet;