import React from 'react'
import styled from 'styled-components'
import api from '../../../styles/api'
import banner from '../../../styles/mixins/banner'
import flexHorizontal from '../../../styles/mixins/flexHorizontal'
import linkProps from '../../../styles/mixins/linkProps'
import spaceChildrenH from '../../../styles/mixins/spaceChildrenH'
import uiList from '../../../styles/mixins/uiList'
import Button from '../../../shared/Button'
import config from '../../../../config'

const SiteNavLink = styled(Button).attrs({
  activeClassName: 'isActive',
})`
  ${linkProps('c:white', 'c:highlight')};
  letter-spacing: 0.5px;

  &.isActive {
    ${api({
      color: 'c:highlight',
    })};
  }
`

const Layout = styled.nav`
  ${flexHorizontal};
  ${uiList};
  ${spaceChildrenH('1ru')};
  ${banner('bottom')}
  ${api({
    position: 'relative',
    backgroundColor: 'c:black',
    padding: '0.75ru 1ru',
    color: 'c:white',
  })};

  ${SiteNavLink} {
    z-index: 1;
  }}
`

const SiteNav = () => (
  <Layout>
    <SiteNavLink to="/" exact>
      Home
    </SiteNavLink>
    <SiteNavLink to={`/${config.structure.articles.path}`}>
      {config.structure.articles.name}
    </SiteNavLink>
    <SiteNavLink to={`/${config.structure.projects.path}`}>
      {config.structure.projects.name}
    </SiteNavLink>
    <SiteNavLink to={`/${config.structure.tags.path}`}>
      {config.structure.tags.name}
    </SiteNavLink>
    <SiteNavLink to="/about">About</SiteNavLink>
  </Layout>
)

export default SiteNav
