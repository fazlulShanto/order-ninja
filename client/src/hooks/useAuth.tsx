import { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { IUseAuthHook } from '../Interface/IUseAuthHook';

const useAuth = () => useContext<IUseAuthHook>(AuthContext as any);

export default useAuth;
