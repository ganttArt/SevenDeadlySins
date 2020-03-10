import React, { Component } from 'react';
import Quote from './Quote'
import Sins from './Sins'

class QuoteState extends Component {
    constructor(props) {
        super(props)
        this.handleStateChange = this.handleStateChange.bind(this)
        this.state = { sin: 'Gluttony'}
    }

    // var random_number = 0
    // const sins_quote_library = {'gluttony': ['There is no love sincerer than the love of food.',
    //                                          "Everything in this room is edible. Even I'm edible. But, that would be called canibalism. It is looked down upon in most societies.",
    //                                          'Curiosity is gluttony. To see is to devour.'],
    //                             'lust': ['The human body is the best work of art.',
    //                                      'The more we are filled with thoughts of lust the less we find true romantic love.',
    //                                      'Lust is the difference between loving someone and being in love with someone.'],
    //                             'greed': ["Greed is the lack of confidence of one's own ability to create.",
    //                                       "He who is not contented with what he has, would not be contented with what he would like to have.",
    //                                       "Growth for the sake of growth is the ideology of the cancer cell."],
    //                             'pride': ["The devil wipes his breech with poor folks' pride.",
    //                                       "A proud man is always looking down on things and people; and, of course, as long as you are looking down, you cannot see something that is above you",
    //                                       "The proud person always wants to do the right thing, the great thing. But because he wants to do it in his own strength, he is fighting not with man, but with God."],
    //                             'sloth': ["In doing nothing men learn to do evil.",
    //                                       "Even a foolish old woman like me knows that lazy people don't think for themselves; they only think about themselves.",
    //                                       "The Devil often finds work for them who find none for themselves."],
    //                             'wrath': ["Hate is the wrath of the weak.",
    //                                       "A gentle answer turns away wrath, but a harsh word stirs up anger.",
    //                                       "I told my wrath, my wrath did end. I was angry with my foe: I told it not, my wrath did grow."],
    //                             'envy': ["Envy is the art of counting the other fellow's blessings instead of your own.",
    //                                      "Envy is a littleness of soul, which cannot see beyond a certain point, and if it does not occupy the whole space, feels itself excluded.",
    //                                      "It is in the character of very few men to honor without envy a friend who has prospered."]}

    handleStateChange(value){
        this.setState({
            sin: value
        })
    }

    // might not even need a render, we'll see later.
    // it might not even need to be in index.js
    render() {
        return (
            <div>
                <Sins dataFromParent={this.state.sin} handleStateChange={this.handleStateChange}/>
                <br/>
                <br/>
                <Quote dataFromParent={this.state.sin}/>
            </div>
        )
    }
}

export default QuoteState; 