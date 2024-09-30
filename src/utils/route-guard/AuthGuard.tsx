'use client';

import { useEffect, useState } from 'react';

// types
import { GuardProps } from 'types/auth';
import { IUserProfile, UserContext } from 'contexts/UserContext';
import { authMe } from 'api/auth';

// ==============================|| AUTH GUARD ||============================== //

const AuthGuard = ({ children }: GuardProps) => {
  const [proFile, setProFile] = useState<IUserProfile>();

  const checkAuth = async () => {
    try {
      const resp = await authMe();
      setProFile(resp.result as IUserProfile);
      localStorage.setItem('role', resp.result.role);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    checkAuth();
    // eslint-disable-next-line
  }, []);

  return <UserContext.Provider value={proFile}>{children}</UserContext.Provider>;
};

export default AuthGuard;
