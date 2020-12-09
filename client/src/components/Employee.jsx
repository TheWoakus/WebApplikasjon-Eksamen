import React from 'react';

class Employee extends React.Component {
  render() {
    const employees = this.props.employeeList;

    return (
      <>
        {employees.map((employee, index) => (
          <section key={index}>
            <img className="employee_picture" src="" alt="" />
            <p className="employee_name">
              {employee.first} {employee.last}
            </p>
            <p className="employee_position">{employee.position}</p>
          </section>
        ))}
      </>
    );
  }
}

export default Employee;
