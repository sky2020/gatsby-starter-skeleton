import PropTypes from 'prop-types'
import { mapIndexed } from 'ramda-adjunct'
import React from 'react'
import styled from 'styled-components'
import spaceChildrenV from '../../../../styles/mixins/spaceChildrenV'
import uiList from '../../../../styles/mixins/uiList'
import ArticlesListItem from './ArticlesListItem'

const renderListItems = mapIndexed((article, key) => (
  <li key={key}>
    <ArticlesListItem article={article} />
  </li>
))

const Layout = styled.ul`
  ${uiList};
  ${spaceChildrenV(['1ru'])};
`

const ArticlesList = ({ articles }) => (
  <Layout>{renderListItems(articles)}</Layout>
)

ArticlesList.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  articles: PropTypes.array.isRequired,
}

export default ArticlesList