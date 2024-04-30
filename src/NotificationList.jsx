import React from 'react';

function NotificationList({ notifications }) {
    return (
        <ul className="max-w-sm mx-auto mt-4">
            {notifications.map(notification => (
                <li key={notification.id} className="bg-white shadow-md rounded-lg p-4 mb-4">
                    <p className="text-gray-800">{notification.message}</p>
                </li>
            ))}
        </ul>
    );
}

export default NotificationList;