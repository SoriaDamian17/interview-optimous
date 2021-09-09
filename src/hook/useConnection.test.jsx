import { act, renderHook } from '@testing-library/react-hooks';
import { stubsConnections } from '../shared/utils/mockData';
import useConnection from './useConnection';
import { ConnectionContext } from '../context/ConnectionContext';

const defaultValue = {
    connections: stubsConnections,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setConnections: () => {},
};

const connectionMock = {
    title: 'Nuevo',
    type: 'SQL',
    connection_data:
        'Server=serverNameTest;Database=databaseName;UserId=userIdTest;Password=passwordTest;Port=portTest',
    system: false,
    created: '2021-09-03 09:57:19.465',
    modified: '2021-09-03 09:57:19.465',
};

test('should return value stores in useConnection', () => {
    const wrapper = ({ children, value }) => (
        // eslint-disable-next-line react/jsx-filename-extension
        <ConnectionContext.Provider value={value}>
            {children}
        </ConnectionContext.Provider>
    );

    const { result } = renderHook(() => useConnection(), {
        wrapper,
        initialProps: {
            value: defaultValue,
        },
    });

    expect(result.current.connections).toEqual(stubsConnections);

    act(() => {
        result.current.setConnections([
            ...stubsConnections,
            { ...connectionMock, id: stubsConnections.length + 1 },
        ]);
    });

    expect(result.current.connections).toEqual([
        ...stubsConnections,
        { id: stubsConnections.length + 1, ...connectionMock },
    ]);
});
