"use client"

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import Profile from '@/components/Profile';

export interface ICreator {
    email: string;
    image: string;
    username: string;
    __v: any;
    _id: string;
}

export interface IPost {
    creator: ICreator;
    prompt: string;
    tag: string;
    __v: any;
    _id: string;
}

const MyProfile = () => {
    const { data: session } = useSession() as any;
    const router = useRouter();
    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
        const fetchPost = async () => {
          const response = await fetch(`/api/users/${session?.user?.id}/posts`);
          const data = await response.json();
    
          setPosts(data)
        }
    
        if(session?.user?.id) fetchPost();
    }, [])

    const handleEdit = (post: IPost) => {
      router.push(`/update-prompt?id=${post._id}`)
    }

    const handleDelete = async (post: IPost) => {
        const hasConfirmed = confirm("Are you sure you want to delete this prompt?");

        if(hasConfirmed) {
          try {
            await fetch(`/api/prompt/${post._id.toString()}`, {
              method: 'DELETE'
            });

            const filteredPosts = posts.filter((p: any) => p._id !== post._id);

            setPosts(filteredPosts)
          } catch (error) {
            console.log(error);
          }
        }
    }
  return (
    <Profile 
        name="My"
        desc="Welcome to your personalized profile page"
        data={posts}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
    />
  )
}

export default MyProfile