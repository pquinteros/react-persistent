import { useParams, useLoaderData} from "react-router-dom"

export default function Post() {
  const { id } = useParams()
  const post = useLoaderData()
  console.log(post)

  return (
    <div>
      <h1 className="text-xl font-bold mb-6">Post {id}</h1>
      <p>This is the post page of the application.</p>
    </div>
  )
}