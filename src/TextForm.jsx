import React, { useState } from 'react';

function TextPostForm() {
    const [text, setText] = useState('');

    const handleTextChange = (e) => {
        setText(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add logic to submit text post
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
            <textarea 
                value={text} 
                onChange={handleTextChange} 
                placeholder="Write something..." 
                className="block w-full py-2 px-4 mb-4 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
            />
            <button 
                type="submit" 
                className="block w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
                Post
            </button>
        </form>
    );
}

export default TextPostForm;