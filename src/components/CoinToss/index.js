// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    heads: 0,
    tails: 0,
    isHead: true,
  }

  tossCoin = () => {
    const toss = Math.floor(Math.random() * 2)
    console.log(toss)
    if (toss === 0) {
      this.setState(prev => ({
        heads: prev.heads + 1,
        isHead: true,
      }))
    } else if (toss === 1) {
      this.setState(prev => ({
        tails: prev.tails + 1,
        isHead: false,
      }))
    }
  }

  render() {
    const {heads, tails, isHead} = this.state
    const imgUrl = isHead
      ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

    return (
      <div className="main-container">
        <div className="container">
          <h1 className="title">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img className="image" src={imgUrl} alt="toss result" />
          <button type="button" className="btn" onClick={this.tossCoin}>
            Toss Coin
          </button>
          <div className="result-container">
            <p className="result">Total: {heads + tails}</p>
            <p className="result">Heads: {heads}</p>
            <p className="result">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
