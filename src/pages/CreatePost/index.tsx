import React from 'react'
import { PostForm } from '../../components/createPost/PostForm'

const CreatePost = () => {
  return (
    <main className="py-12">
        <section>
            <div className="container ">
                <PostForm/>
            </div>
        </section>
    </main>
  )
}

export default CreatePost