import React , {Component} from 'react';

class ListRender extends Component{
    constructor(props){
        super(props);
        this.state = {
            employees : [
                {
                    id : 1,
                    name : 'John',
                    age : 40,
                    designation : 'Manager'
                },
                {
                    id : 2,
                    name : 'Wilson',
                    age : 45,
                    designation : 'Sr.Manager'
                },
                {
                    id : 3,
                    name : 'Rajan',
                    age : 25,
                    designation : 'Software Engineer'
                },
                {
                    id : 4,
                    name : 'Mahesh',
                    age : 30,
                    designation : 'Tech Lead'
                }
            ]
        };
    }

    render() {
        let employeeList = this.state.employees.map((employee) => (
            <tr>
               <td>{employee.id}</td>
               <td>{employee.name}</td>
               <td>{employee.age}</td>
               <td>{employee.designation}</td>
            </tr>
        ));
        return (
            <div>
                <table className='table table-hover text-center'>
                    <thead className='bg-dark text-white'>
                        <tr>
                            <th>EMP ID</th>
                            <th>NAME</th>
                            <th>AGE</th>
                            <th>DESIGNATION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employeeList}
                    </tbody>
                </table>
            </div>
        );
    }
}
export  default ListRender;