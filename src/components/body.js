import React,{ Component } from 'react';


class BodyArea extends Component {
    constructor(props) {
        super(props);
        this.state = { term: '' }
    }

    render() {
        return <section id={"content"}>
            <input
                value={this.state.term}
                onChange={ (e) => { this.setState({term: e.target.value }) }
                }/>
            <b> { this.state.term } </b>
        </section>;
    }
}

export default BodyArea;