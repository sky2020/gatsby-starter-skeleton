import React from 'react'
import styled from 'styled-components'
import ArticleList from './ArticleList'
import nodesFrom from '../../../data/nodesFrom'
import api from '../../../styles/api'
import flexVertical from '../../../styles/mixins/flexVertical'
import spaceChildrenV from '../../../styles/mixins/spaceChildrenV'
import ArticlesNav from './ArticlesNav'

const ArticlesInfo = styled.div`
  text-align: center;
`

const Header = styled.header`
  ${api({
    marginBottom: '1ru',
  })};

  ${ArticlesInfo} {
    ${api({
      marginTop: '-1.5ru',
    })};
  }
`

const Layout = styled.div`
  ${flexVertical};
  ${spaceChildrenV('1ru')};
`

const Articles = context => {
  const {
    items,
    itemsCount,
    fromItemIndex,
    toItemIndex,
    previousPath,
    nextPath,
  } = context.context

  return (
    <Layout>
      <Header>
        <ArticlesNav previousPath={previousPath} nextPath={nextPath} />
        <ArticlesInfo>
          {fromItemIndex}–{toItemIndex} of {itemsCount}{' '}
        </ArticlesInfo>
      </Header>
      <ArticleList articles={nodesFrom(items)} />
    </Layout>
  )
}

export default Articles