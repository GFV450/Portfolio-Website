import React, {Component} from 'react'

export default class Typewriter extends Component {
    constructor() {
        super();
    }

    componentWillMount() {
        let { text } = this.props;

        if (Array.isArray(text)) {
            this.originalString = text.reverse().pop();
        }
        else {
            this.originalString = text;
        }

        this.originalString = this.originalString.split('').reverse();
        this.setState({ text: ' ' });
    }

    componentDidMount() {
        setTimeout(()=>{
            this.type(this.originalString.pop());
        }, this.props.delay);
    }

    type(char) {
        let {
            speed, text
        } = this.props;

        setTimeout(() => {
            this.setState({
                text: this.state.text + char
            });

            if (this.originalString.length) {
                this.type(this.originalString.pop());
            }
            else {
                if (Array.isArray(text) && text.length) {
                    this.originalString = text.pop().split('').reverse();

                    setTimeout(() => {
                        this.setState({text: ''});
                        this.type(this.originalString.pop());
                    }, 1000);
                }
            }
        }, speed);
    }

    render() {
        return <pre className={this.props.typewriterCN}>{this.state.text}</pre>;
    }
}

Typewriter.defaultProps = {
    speed: 80,
    tag: 'p',
    delay: 0
};
