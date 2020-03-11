import React, { Component } from 'react';
import Quote from './Quote'
import Sins from './Sins'

class QuoteState extends Component {
    constructor(props) {
        super(props)
        this.handleStateChange = this.handleStateChange.bind(this)
        this.state = { sin: 'Gluttony',
                       quote_number: 0,  
                       quote: "I suppose there are people who can pass up free guacamole, but they're either allergic to avocado or too joyless to live."
                     }
    }

    sins_quote_library = {'Gluttony': ['There is no love sincerer than the love of food.',
                                       "Everything in this room is edible. Even I'm edible. But, that would be called canibalism. It is looked down upon in most societies.",
                                       'Curiosity is gluttony. To see is to devour.'],
                          'Lust': ['The human body is the best work of art.',
                                   'The more we are filled with thoughts of lust the less we find true romantic love.',
                                   'Lust is the difference between loving someone and being in love with someone.'],
                          'Greed': ["Greed is the lack of confidence of one's own ability to create.",
                                    "He who is not contented with what he has, would not be contented with what he would like to have.",
                                    "Growth for the sake of growth is the ideology of the cancer cell."],
                          'Pride': ["The devil wipes his breech with poor folks' pride.",
                                    "A proud man is always looking down on things and people; and, of course, as long as you are looking down, you cannot see something that is above you",
                                    "The proud person always wants to do the right thing, the great thing. But because he wants to do it in his own strength, he is fighting not with man, but with God."],
                          'Sloth': ["In doing nothing men learn to do evil.",
                                    "Even a foolish old woman like me knows that lazy people don't think for themselves; they only think about themselves.",
                                    "The Devil often finds work for them who find none for themselves."],
                          'Wrath': ["Hate is the wrath of the weak.",
                                    "A gentle answer turns away wrath, but a harsh word stirs up anger.",
                                    "I told my wrath, my wrath did end. I was angry with my foe: I told it not, my wrath did grow."],
                          'Envy': ["Envy is the art of counting the other fellow's blessings instead of your own.",
                                   "Envy is a littleness of soul, which cannot see beyond a certain point, and if it does not occupy the whole space, feels itself excluded.",
                                   "It is in the character of very few men to honor without envy a friend who has prospered."]}

    handleStateChange(value){
        var quote_num = this.state.quote_number;
        if (quote_num === 2) {
            quote_num = 0;
        } else {
            quote_num += 1;
        }
        
        this.setState({
            sin: value,
            quote_number: quote_num,
            quote: this.sins_quote_library[value][quote_num]
        })
    }

    render() {
        return (
            <div>
                <Sins handleStateChange={this.handleStateChange}/>
                <br/>
                <br/>
                <Quote sin={this.state.sin} quote={this.state.quote} handleStateChange={this.handleStateChange}/>
            </div>
        )
    }
}

export default QuoteState; 