import React from 'react';

function HomeFeed({ posts }) {
    return (
        <div className="max-w-lg mx-auto mt-8">
            {posts.map(post => (
                <div key={post.id} className="bg-white shadow-md rounded-lg p-4 mb-4">
                    <p className="text-gray-800">{post.text}</p>
                    {/* Render other post content */}
                </div>
            ))}
        </div>
    );
}

export default HomeFeed;