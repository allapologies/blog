import React, {Component, PropTypes} from 'react'
import ReactDOM from 'react-dom'
import {fixtures} from './fixtures'

class Article extends Component{
  constructor() {
    super()
    this.state = {
      isOpen: false
    }
  }
  static propTypes = {
    article : PropTypes.object
  }

  render (){
    return (
      <div className = "list-group">
        {this.getTitle()}
        {this.getBody()}
      </div>
    )
  }

  getBody(){
    const body =(this.state.isOpen) ? this.props.article.body : null

    return (
      <p className="list-group-item-text">
          {body}
      </p>
    )
  }

  getTitle(){
    const {title} = this.props.article

    return (
      <h4 className = "list-group-item-heading" onClick={this.toggleOpen}>
          {title}
      </h4>
    )
  }

  toggleOpen = ()=>{
      this.setState({
        isOpen:!this.state.isOpen
      })
  }
}


class ArticleList extends Component {
  static propTypes = {
    articles: PropTypes.arrayOf(PropTypes.object)
  }

  render(){
    const {articles} = this.props
    const list = articles.map((article) => {
      return (
        <li key = {article.id} className = "list-group-item">
          <Article article = {article}/>
        </li>
      )
    })
    return (
      <div>
        <ul className = "list-group">
          {list}
        </ul>
      </div>
    )
  }
}

ReactDOM.render(<ArticleList articles = {fixtures}/>, document.getElementById('blog'))