import React , {Component} from 'react';

class ConditionalRender extends Component{

    constructor(props){
        super(props);
        this.state = {
            isLoggedIn : false
        };
    }

    makeLogin = () => {
        this.setState({
            isLoggedIn : true
        });
    };

    makeLogOut = () => {
        this.setState({
            isLoggedIn : false
        });
    };

    render() {
        if(this.state.isLoggedIn){
            return (
                <div>
                    <h1>Welcome Mr.John</h1>
                    <button className='btn btn-danger' onClick={this.makeLogOut}>LogOut</button>
                </div>
            );
        }
        else{
            return (
                <div>
                    <h1>Welcome Guest</h1>
                    <button className='btn btn-primary' onClick={this.makeLogin}>Login</button>
                </div>
            );
        }

    }
}
export default ConditionalRender;