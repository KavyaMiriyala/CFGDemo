import React from 'react'
import {useForm} from 'react-hook-form'
import {useState,useEffect} from 'react';


function Signup() {
    var counter=0
    let [users, setUsersList] = useState([])
    
    const {register, handleSubmit, formState: { errors } } = useForm()
    console.log(errors)

const onsub=(userObj)=>{
    console.log(userObj)
    setUsersList([...users, userObj])
}

function count(){
    counter=counter+1
    console.log(count)
}

    return (
        <div className='mt-2'>
            <p className="display-2 text-primary text-center">Sign Up</p>
            <p className="lead text-center">
                Sign Up for exciting Content
            </p>
        
        <div>
        
             <form className='mb-3 w-50 mx-auto' onSubmit={handleSubmit(onsub)}>
                 <div className='mb-3'>
                     <label htmlFor='Username' >UserName<span className='text-danger'> *</span></label>
                     <input type="text" name="" id="Username" className="form-control" {...register("Username",{minLength:3,maxLength:30,required:true})} ></input>
                     {errors.UserName?.type==='required' && <p className='text-danger'>Username is required</p>}
    
                    {errors.Username?.type === 'required' && <p className='text-danger'>* Username is required</p>}
                   
                    {errors.Username?.type === 'minLength' && <p className='text-danger'>* Minimum length required:3</p>}
                   
                    {errors.Username?.type === 'maxLength' && <p className='text-danger'>* Exceeding limit:30</p>}

                 </div>

              <div className='row'> 
                 <div className='mb-3 col'>
                     <label htmlFor='FirstName' >First Name<span className='text-danger'> *</span></label>
                     <input type="text" name="" id="FirstName" className="form-control" {...register("FirstName")} ></input>
                 </div>

                 <div className='mb-3 col'>
                     <label htmlFor='LastName' >Last Name<span className='text-danger'> *</span></label>
                     <input type="text" name="" id="LastName" className="form-control" {...register("LastName",{ required: true })} ></input>
                 </div>

                 </div>


                 <div className='mb-3 '>
                     <label htmlFor='email'>Email<span className='text-danger'> *</span></label>
                     <input type="email" name="" id="email" className="form-control" {...register("email",{ required: true })} ></input>
                     <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                     {errors.email?.type === 'required' && <p className='text-danger'>* This field is required</p>}
                 </div>
                <div className='row '> 
                 <div className='mb-3 col'>
                     <label htmlFor='password'>Create Password<span className='text-danger'> *</span></label>
                     <input type="password" name="" id="password" className="form-control" {...register("password",{minLength:'8',required:true})}/>
                     {errors.password?.type === 'minLength' && <p className='text-danger'>* Min length should be 8</p>}
                 </div>

                 <div className='mb-3 col'>
                     <label htmlFor='cpassword'>Confirm Password<span className='text-danger'> *</span></label>
                     <input type="password" name="" id="cpassword" className="form-control" {...register("cpassword",{minLength:'8'})}></input>
                     
                 </div>
                 <small  className="form-text text-muted">Your password must be 8-20 characters long, contain letters, numbers and special characters.</small>
       
                 </div>
                 <div className='mb-3 mt-4'>
                     <label htmlFor='dob'>Date of Birth<span className='text-danger'> *</span></label>
                     <input type="date" name="" id="dob" className="form-control" {...register("dob",{ required: true })} ></input>
                     {errors.dob?.type === 'required' && <p className='text-danger'>* Date Of Birth is required</p>}
                 </div>
            
                      <label>Gender<span className='text-danger'> *</span></label>
                  
                 <div className='mt-2' >
                     <input type="radio" name="gender" id="male" {...register("Gender",{ required: true })} value="Male" ></input>
                     <label htmlFor='male'className='mx-2'>Male</label>
                </div>
                    
                <div  >
                     <input type="radio" name="gender" id="female" value="Female" {...register("Gender")} ></input>
                     <label htmlFor='female'className='mx-2'>Female</label>
                     {errors.Gender?.type === 'required' && <p className='text-danger'>* This field is required</p>}
                 </div>

                 <div className='form-radio'>
                     <input type="radio" name="gender" id="Other" {...register("Gender")}  value="Other"></input>
                     <label htmlFor='Other' className='mx-2'>Other</label>
                 </div>
                 <div className="mb-3 mt-3">
                    <label>Select skills</label> 

                 <div className="form-check mt-2">
                        <input type="checkbox" id="py" className="form-check-input" {...register("skills")} value="Python" />
                        <label htmlFor="py" className="form-check-label ">Python</label>
                    </div> 
              
                 <div className="form-check">
                        <input type="checkbox" id="c" className="form-check-input" {...register("skills")} value="C" />
                        <label htmlFor="c" className="form-check-label">C</label>
                    </div> 
                  
                  <div className="form-check">
                        <input type="checkbox" id="c++" className="form-check-input" {...register("skills")} value="C++" />
                        <label htmlFor="c++" className="form-check-label">C++</label>
                       
                  </div> 

                  </div>
                  <label className=" mt-4">Terms & Services </label>
                  <div  className="form-check mt-2">
                      
               <input type="checkbox" className="form-check-input" id="Check" {...register("Check",{ required: true })}/>
               <label  htmlFor="Check" className="form-check-label">I abide by Privacy Policy.</label>
               {errors.Check?.type === 'required' && <p className='text-danger'>* Check out this to submit</p>}
                 </div>

                    <button className="btn btn-success d-block mx-auto mt-5" type='submit' onClick={()=> count(counter)}>Submit
                    </button>
                     </form>
                </div>

 
        <div className='text-center container'  onSubmit={handleSubmit(onsub)} >
        {/* table */}
       {users.length!==0 && <h1>User Details</h1>}
                {users.length !== 0 && 
        <table className="table  table-hover table-bordered table-striped text-dark">
            
            <thead>
                <tr>
                    <th>S.No</th>
                    <th>Username</th>
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>Email</th>
                    <th>DateofBirth</th>
                    <th>Gender</th>
                    <th>Skills</th>

                </tr>
            </thead>

            <tbody>
                {
                    users.map((userObj,index)=><tr key={index}>
                            <td>{index+1}</td>
                            <td>{userObj.Username}</td>
                            <td>{userObj.FirstName}</td>
                            <td>{userObj.LastName}</td>
                            <td>{userObj.email}</td>
                            <td>{userObj.dob}</td>
                            <td>{userObj.Gender}</td>
                            <td>
                             {/* <ol> {userObj.skills} </ol> */}
                             {userObj.skills.map(name =><p>{name}</p
                             
                             >)}
                            </td>
                        </tr>)
                
                }
            </tbody>
 </table>
}
    </div>

        </div>
          
    )

}

export default Signup