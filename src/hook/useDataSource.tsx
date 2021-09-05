import { useContext, useEffect } from 'react';
import { DataSourceContext, IDContext } from '../context/DataSourceContext';
import { NexusApi } from '../service/Nexus';

// const useDataSource:React.FC = () => {
const useDataSource = () => {
    const { datasource, setDataSource } = useContext<IDContext>(DataSourceContext);

    useEffect(() => {
        async function getDataSource() {
            await NexusApi.get('data-sources?total=false').then((resp) => {
                setDataSource(resp.data.data);
            });
        }
        getDataSource();
    }, [setDataSource]);

    return {
        datasource,
        setDataSource,
    };
};

export default useDataSource;
