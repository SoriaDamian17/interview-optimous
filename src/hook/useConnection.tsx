import { useContext, useEffect } from 'react';
import { ConnectionContext, ICContext } from '../context/ConnectionContext';
import { NexusApi } from '../service/Nexus';

const useConnection = () => {
    const { connections, setConnections } = useContext<ICContext>(ConnectionContext);

    useEffect(() => {
        async function getConnections() {
            await NexusApi.get('connections').then((resp) => {
                setConnections(resp.data.data);
            });
        }
        getConnections();
    }, [setConnections]);

    return {
        connections,
        setConnections,
    };
};

export default useConnection;
