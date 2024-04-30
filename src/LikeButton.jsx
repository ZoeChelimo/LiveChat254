import React, { useState } from 'react';

function LikeButton() {
    const [liked, setLiked] = useState(false);

    const handleLikeToggle = () => {
        setLiked(!liked);
    };

    return (
        <button onClick={handleLikeToggle} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            {liked ? 'Unlike' : 'Like'}
        </button>
    );
}

export default LikeButton;