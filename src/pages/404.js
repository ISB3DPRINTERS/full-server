import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <div>
            <h1>404</h1>
            <p>Wrong page mate</p>
            <span className="font-bold">
                <Link to="/" className="hover:text-purple-400">Back to home?</Link>
            </span>
        </div>
    )
}