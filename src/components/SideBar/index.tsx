import React from 'react';
import StickyBox from 'react-sticky-box'

import List from '../List'
import FollowSuggestion from '../FollowSuggestion'
import News from '../News'

import { Container, SearchWrapper, SearchInput, SearchIcon, Body } from './styles';

const SideBar: React.FC = () => {
  return (
      <Container>
          <SearchWrapper>
              <SearchInput placeholder="Buscar no Twitter" />
              <SearchIcon />
          </SearchWrapper>
          <StickyBox>
            <Body>
                    <List
                        title="Who to follow"
                        elements={[
                            <FollowSuggestion
                                name="Luiz Batanero"
                                nickname="@luizbatanero"
                            />,
                            <FollowSuggestion
                                name="Luke Morales"
                                nickname="@lukemorales"
                            />,
                            <FollowSuggestion
                                name="Luke Morales"
                                nickname="@lukemorales"
                            />,
                            <FollowSuggestion
                                name="Camila Magalhães"
                                nickname="@camilaamgl"
                            />
                        ]}
                    />
                    <List
                        title="What's happening"
                        elements={[<News />, <News />, <News />]}
                    />
            </Body>
          </StickyBox>
      </Container>
  );
}

export default SideBar;