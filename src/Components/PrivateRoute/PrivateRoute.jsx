import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../UserContext/UserContext';

const PrivateRoute = ({children}) => {
    const {user} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate()
    if(!user?.uid){
        navigate('/login')
    }return children

};

export default PrivateRoute;
