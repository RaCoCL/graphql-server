import React, { Component } from 'react'
import styles from './App.css';

class Merchant extends Component {
  render() {
    return (
        <div>
          <h1 className={styles.merchantname}>{this.props.merchant.name}</h1>
          <br/>
          <a href={this.props.merchant.url}>
          <img src={this.props.merchant.imageurl300} alt="Merchant URL" />
          </a>
        </div>
    )
  }
}

export default Merchant
