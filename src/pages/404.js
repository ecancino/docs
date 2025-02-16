import { defaultTheme as theme } from '@prisma/lens/dist/web'
import * as React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'

const NotFoundWrapper = styled.div`
  font-family: 'Inter';
  margin-top: 200px;
  padding: ${theme.space[40]};
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-weight: bold;
    font-size: revert;
    margin: revert;
  }
`

const NotFoundPage = () => (
  <Layout>
    <NotFoundWrapper>
      <h1>404 | NOT FOUND</h1>
      You just hit a route that doesn&#39;t exist!
    </NotFoundWrapper>
  </Layout>
)

export default NotFoundPage
