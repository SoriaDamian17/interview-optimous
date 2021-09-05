import React, {
    createContext, useState, useEffect, ReactNode,
} from 'react';

export interface IDataParameters {
    id?: number;
    name: string;
    type: string;
    // eslint-disable-next-line camelcase
    default_value: string;
}
export interface IDataSource {
    id?: number;
    // eslint-disable-next-line camelcase
    connection_id: number;
    title: string;
    code: string;
    query: string;
    system?: boolean;
    created?: string;
    modified?: string;
    parameters: IDataParameters[]
}

interface ICProvider {
    children: ReactNode,
}
export interface IDContext {
    datasource: IDataSource[],
    setDataSource: React.Dispatch<React.SetStateAction<IDataSource[]>>
}

const defaultValue = {
    datasource: [],
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setDataSource: () => {},
};
export const DataSourceContext = createContext<IDContext>(defaultValue);

const DataSourceContextProvider:React.FC<ICProvider> = ({ children }) => {
    // const InitialState: IDataSource[] = JSON.parse(localStorage.getItem('datasource')) || [];
    const InitialState: IDataSource[] = [];
    const [datasource, setDataSource] = useState<IDataSource[]>(InitialState);

    useEffect(() => {
        localStorage.setItem('datasource', JSON.stringify(datasource));
    }, [datasource]);

    return (
      <DataSourceContext.Provider value={{
            datasource,
            setDataSource,
        }}
      >
        {children}
      </DataSourceContext.Provider>
    );
};

export default DataSourceContextProvider;
