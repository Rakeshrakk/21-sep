import React , {Component} from 'react';

class Student extends  Component{
    render() {
        return(
            <div>
                <div className="card m-3">
                    <div className="card-body bg-primary text-white">
                        <h1>Myself {this.props.name} , Iam Studying {this.props.course}</h1>
                    </div>
                </div>
            </div>
        );
    }
}
export default Student;