import React from 'react';

let Employee = (props) => {
    console.log(props);
    return(
        <div>
            <div className="card m-3">
                <div className={`${props.color} card-body text-white`}>
                    <h1>Hello Iam {props.name} Iam Working as a {props.designation}</h1>
                </div>
            </div>
        </div>
    );
};
export default Employee;