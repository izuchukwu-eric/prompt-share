"use client"
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

import React from 'react'

const Profile = () => {
  return (
    <div>page</div>
  )
}

export default Profile