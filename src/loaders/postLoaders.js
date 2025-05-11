export const postLoader = async ({ params }) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${params.id}`
    )
    if (!response.ok) {
      throw new Response('Not Found', { status: 404 })
    }
    return response
  }
  
  export const postsLoader = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    if (!response.ok) {
      throw new Response('Not Found', { status: 404 })
    }
    return response
  }