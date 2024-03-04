'use client';

import { createContext, useContext, useState } from 'react';
import { ReactNode, SetStateAction, Dispatch } from 'react';
import data from '@/data/user.json';

export interface Profile {
  image: string;
  first_name: string;
  last_name: string;
  email: string;
}

interface Link {
  platform: string;
  link: string;
}

interface UserProviderProps {
  children?: ReactNode;
}

interface UserContextValue {
  profile: Profile | null;
  links: Link[];
  setProfile: Dispatch<SetStateAction<Profile>>;
  setLinks: Dispatch<SetStateAction<Link[]>>;
}

const defaultUserContext = {
  profile: null,
  links: [],
  setProfile: () => {},
  setLinks: () => {},
};

const UserContext = createContext<UserContextValue>(defaultUserContext);

export const useUser = () => useContext(UserContext);

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [profile, setProfile] = useState<Profile>(data.porfile);
  const [links, setLinks] = useState<Link[]>(data.links);

  return (
    <UserContext.Provider value={{ profile, links, setProfile, setLinks }}>
      {children}
    </UserContext.Provider>
  );
};
