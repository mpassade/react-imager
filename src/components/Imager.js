import React, { Component } from 'react'
import './Imager.css'

class Imager extends Component {
    constructor(){
        super()
        this.state={
            currentImg: '/images/' + this.images[0]
        }
    }
    images = [
        'the-chi.png', 'game-of-thrones.png', 'spartacus.png', 'power.png',
        'the-100.png', 'prison-break.png', 'dexter.png', 'ozark.png',
        'sons-of-anarchy.png', 'breaking-bad.png', '24.png', 'you.png'
    ]
    random = () => {
        let num = Math.floor(Math.random()*12)
        this.setState({
            currentImg: '/images/' + this.images[num]
        })
    }
    choose = (e) => {
        this.setState({
            currentImg: e.target.src.slice(21)
        })
    }
    up = () => {
        let num = this.images.indexOf((this.state.currentImg).slice(8))
        this.setState({
            currentImg: num===11 ? '/images/' + this.images[0] : '/images/' + this.images[num+1]
        })
    }
    down = () => {
        let num = this.images.indexOf((this.state.currentImg).slice(8))
        this.setState({
            currentImg: num===0 ? '/images/' + this.images[11] : '/images/' + this.images[num-1]
        })
    }
    render(){
        return (
            <div className="app">
                <h1>Imager</h1>
                <img className='centerImg' src={this.state.currentImg}/>
                <div className='btns'>
                    <button onClick={this.random}>Random</button>
                    <div className='upDwn'>
                        <button onClick={this.down}>&lt;</button>
                        <button onClick={this.up}>&gt;</button>
                    </div>
                </div>
                <div className='gridImgs'>
                    {this.images.map(i => {
                        return (<img src={'/images/' + i} onClick={this.choose}/>)
                    })}
                </div>
                
            </div>
        )
    }
}

export default Imager;
