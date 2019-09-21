import React , {Component} from 'react';

class HelloState extends Component{

    constructor(props){
        super(props);
        this.state = {
            message : 'Welcome Mr.Wilson'
        };
    }

    changeMessage = () => {
        this.setState({
            message : 'Good Bye'
        });
    };

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button className='btn btn-primary' onClick={this.changeMessage}>Click Me</button>
            </div>
        );
    }
}
export default HelloState;