import React from 'react';
import {useEffect,useState} from 'react';

function About(){
    let [users, setUsers] = useState([])

    //make api call
    useEffect(() => {
        fetch('https://reqres.in/api/unknown')
            .then(res => res.json())
            .then(apidata => setUsers(apidata.data))
            .catch(err => console.log(err))

    }, [])
 console.log(users)
    return (
        <div className='text-center container'>
        <p className="display-2 text-secondary">Users data</p>
        {/* table */}
        <table className="table table-bordered table-hover bg-success text-light">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Year</th>
                    <th>Color</th>
                    <th>Pantone_value</th>

                </tr>
            </thead>

            <tbody>
                {
                    users.map(userObj=><tr key={userObj.id}>
                            <td>{userObj.id}</td>
                            <td>{userObj.name}</td>
                            <td>{userObj.year}</td>
                            <td>{userObj.color}</td>
                            <td>{userObj.pantone_value}</td>
                        </tr>)
                }
            </tbody>


        </table>

    </div>
)
}

export default About