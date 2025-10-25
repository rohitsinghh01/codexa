import React from 'react'
import prisma from '@/lib/prisma'

export default async function page() {
    const post = await prisma.post.findMany()
    return (
        <div>
            {post.map((post: any) => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                </div>
            ))}
        </div>
    )
}
