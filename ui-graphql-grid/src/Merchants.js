import React, { Component } from 'react'
import Merchant from './Merchant'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'


const FEED_QUERY = gql`
{
  merchantByCountryId(countryid:3) {
    merchantid
    name
    url
    imageurl300
  }
}

`;

class Merchants extends Component {
  render() {
    return (
      <Query query={FEED_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>
          if (error) return <div>Error</div>

          const merchantsToRender = data.merchantByCountryId

          return (
            <div display>
              {merchantsToRender.map(merchant => <Merchant key={merchant.merchantid} merchant={merchant} />)}
            </div>
          )
        }}
      </Query>
    )
  }
}

export default Merchants
