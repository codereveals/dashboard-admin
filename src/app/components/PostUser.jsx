import React from 'react'
const getData = async (userId) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    if (!res.ok) {
      throw new Error("Something Went wrong");
    }
  
    return res.json();
  };

const PostUser = async({userId}) => {

    const user = await getData(userId)


  return (
    <div>
           <div className='flex justify-between px-3 py-3'>
            <div className='text-md text-slate-600'>Posted Date : <strong>24-08-204</strong> </div>
            <div className='text-md text-slate-600'>Author:  <strong>{user.username}</strong>
                </div>
        </div>
    </div>
  )
}

export default PostUser