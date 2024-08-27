import { addPost } from '@/utils/serverActions'
import React from 'react'

const ServerActionLearn = () => {
  return (
    <div>
        <form action={addPost}>
            <input type="text" name='title' placeholder='title'/>
            <input type="text" name='desc' placeholder='desc'/>
            <input type="text" name='slug' placeholder='slug'/>
            <input type="text" name='userId' placeholder='userId'/>
            <button>Create Post</button>
        </form>
    </div>
  )
}

export default ServerActionLearn