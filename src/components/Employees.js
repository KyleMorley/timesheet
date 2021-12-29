const Employees = ({employee}) => {
    return (
           <ul className='list-group'>
                <li className='list-group-item'>{employee.firstName} {employee.lastName} <span className='text-muted ml-2'>{employee.title}</span></li>
            </ul> 
    )
}

export default Employees
