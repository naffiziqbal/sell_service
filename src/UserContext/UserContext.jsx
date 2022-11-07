import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const UserContext = ({children}) => {
    const [user, setUser] = useState([]);

    const value = { user }
    return (
        <div>
            <AuthContext.Provider value={value}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;
