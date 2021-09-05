import React, {
 createContext, useState, useEffect, ReactNode,
} from 'react';

export interface IConnection {
    id?: number;
    title: string;
    type: string;
    // eslint-disable-next-line camelcase
    connection_data: string;
    system?: boolean;
    created?: string;
    modified?: string;
}

interface ICProvider {
    children: ReactNode,
}
export interface ICContext {
    connections: IConnection[],
    setConnections: React.Dispatch<React.SetStateAction<IConnection[]>>
}

const defaultValue = {
    connections: [],
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setConnections: () => {},
};
export const ConnectionContext = createContext<ICContext>(defaultValue);

const ConnectionContextProvider:React.FC<ICProvider> = ({ children }) => {
    const InitialState: IConnection[] = [];
    const [connections, setConnections] = useState<IConnection[]>(InitialState);

    useEffect(() => {
        localStorage.setItem('connections', JSON.stringify(connections));
    }, [connections]);

    return (
      <ConnectionContext.Provider value={{
            connections,
            setConnections,
        }}
      >
        {children}
      </ConnectionContext.Provider>
    );
};

export default ConnectionContextProvider;
