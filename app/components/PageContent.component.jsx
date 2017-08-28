import React from 'react';

export default class PageContent extends React.Component {  
  render() {
    return (
      <article className="c-page-content">
        { this.props.name }
      </article>
    )
  }
}