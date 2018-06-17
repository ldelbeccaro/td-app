import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.css'

const Header = () => (
  <div
    style={{
      background: '#eaeaea',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.05rem 1.0875rem',
      }}
    >
      <h3 style={{ margin: 0, display: 'flex', alignItems: 'center' }}>
        <Link
          to="/"
          style={{
            color: '#2f2f2f',
            textDecoration: 'none',
          }}
        >
          td
        </Link>
        <div
          style={{
            background: 'white',
            borderRadius: '50%',
            height: '8px',
            width: '8px',
            margin: '16px'
          }}
        />
        <Link
          to="/calendar"
          style={{
            color: '#2f2f2f',
            textDecoration: 'none',
          }}
        >
          cal
        </Link>
      </h3>
    </div>
  </div>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="td"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.05rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
