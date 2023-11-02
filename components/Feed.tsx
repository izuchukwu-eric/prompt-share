"use client";

import { useEffect, useState } from 'react'
import PromptCard from './PromptCard';
import { IPost } from '@/app/profile/page';

interface IPromptCardList {
  data: any[];
  handleTagClick: (e: any) => void;
}

const PromptCardList = ({ data, handleTagClick }: IPromptCardList) => {
  return (
    <div className='mt-16 prompt_layout'>
      {data?.map((post) => (
        <PromptCard 
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  )
}

const Feed = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [posts, setPosts] = useState<IPost[]>([])

  const handleSearchChange = () => {

  }

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch('/api/prompt');
      const data = await response.json();

      setPosts(data)
    }

    fetchPost();
  }, [])

  return (
    <section className='feed'>
      <form className='relative w-full flex-center'>
        <input 
          type="text"
          placeholder='Search for a tag or a username'
          value={searchText}
          onChange={handleSearchChange}
          required
          className='search_input peer'  
        />
      </form>

      <PromptCardList 
        data={posts}
        handleTagClick={() => {}}
      />
    </section>
  )
}

export default Feed