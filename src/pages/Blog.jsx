import {useLoaderData} from "react-router-dom"

export default function Blog() {
  const posts = useLoaderData()
  console.log('posts:', posts)
  return (
    <div>
      <h1 className="text-xl font-bold mb-6">Blog</h1>
      <p>This is the blog page of the application.</p>
    </div>
  )
}