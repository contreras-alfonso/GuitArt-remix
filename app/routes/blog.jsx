import { useLoaderData } from "@remix-run/react";
import { getPosts } from "~/api/post.server"
import Post from "~/components/post";

export function meta(){
  return [
    {title: 'Blog | GuitArt'}
  ]
}

export async function loader(){
  const posts = await getPosts();
  return posts.data;
}

const blog = () => {

  const posts = useLoaderData();

  return (
    <main>
      <h2 className="text-center font-black text-4xl md:text-6xl text-white my-10">Blog</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mx-3 md:mx-7">
          {posts?.map(post=>(
            <Post key={post.id} post={post.attributes}></Post>
          ))}
      </div>
    </main>
  )
}

export default blog