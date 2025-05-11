import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';


export default function Tank() {
  const queryClient = useQueryClient() 

  const { data, isError, isPending, error } = useQuery({
    queryKey: ["posts"],
    queryFn: () => {
      return fetch("https://jsonplaceholder.typicode.com/posts?_limit=10").then((res) => res.json() )
    },
    staleTime: 5000, // Datos frescos por 5 segundos
    gcTime: 300000 // Mantiene datos en caché por 5 minutos
  })


  const mutation = useMutation({
    mutationFn: (newPost) => {
      return fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(newPost),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => res.json());
    },
    onSuccess: () => {
      // Refrescar datos después de crear usuario (opcional)
      queryClient.invalidateQueries(['posts']);
      alert('Usuario creado con éxito');
    },
    onError: (error) => {
      alert('Hubo un error: ' + error.message);
    },
  });

  if (isPending) return <div className="p-4">Loading...</div>
  if (isError) return <div className="p-4 text-red-500">Error: {error.message}</div>

  return (
    <div className="container mx-auto">
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr className="border-b border-gray-200 ">
            <th className="px-4 py-2 text-left">ID</th>
            <th className="px-4 py-2 text-left">Title</th>
            <th className="px-4 py-2">Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((post) => (
            <tr key={post.id} className="border-b border-gray-200 ">
              <td className="px-4 py-2">{post.id}</td>
              <td className="px-4 py-2 text-left">{post.title}</td>

              <td className="px-4 py-2"><button>Eliminar</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center mt-4">
        <button onClick={() => mutation.mutate({ "userId": 1,
    "id": 13343,
    "title": "Nuevo Usuario",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"})}>Nuevo Usuario</button>
      </div>
    </div>
  )
}

