import React from 'react';
import {useState,useEffect} from 'react';
function Contactus(){
    let [users, setUsers] = useState([])

    //make api call
    useEffect(() => {
        fetch('https://reqres.in/api/users?page=2')
            .then(res => res.json())
            .then(apidata => setUsers(apidata.data))
            .catch(err => console.log(err))

    }, [])


    return (
        <div className='text-center container'>
            <p className="display-2 text-secondary">Technician data</p>
            {/* table */}
            <table className="table table-bordered table-hover text-success table-sm">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Email</th>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>Profile</th>

                    </tr>
                </thead>

                <tbody>
                    {
                        users.map(userObj=><tr key={userObj.id}>
                                <td>{userObj.id}</td>
                                <td>{userObj.email}</td>
                                <td>{userObj.first_name}</td>
                                <td>{userObj.last_name}</td>
                                <td>
                                    <img src={userObj.avatar} alt="" />
                                </td>
                        </tr>)
                    }
                </tbody>


            </table>

        </div>
    )
}

export default Contactus