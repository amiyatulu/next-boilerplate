import React, { Component } from 'react';
import Nav from './Nav';
import Script from './Script';
import Meta from './Meta';
import "./Style.css"



export default class Page extends Component {
  render() {
    return (
      <div>
          <Meta/>
          <Nav />
        {this.props.children}
        <Script/>
      </div>
    )
  }
}
