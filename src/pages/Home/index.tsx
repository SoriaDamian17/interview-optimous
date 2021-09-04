import { useHistory } from 'react-router';
import { useContext, useEffect } from 'react';
import Layout from '../../components/Layout';
import { Header, Title, Button } from '../../shared/styles';
import TableUI from '../../components/Table';
import { DataSourceContext, IDContext } from '../../context/DataSourceContext';
// import { ConnectionContext, ICContext } from '../../context/ConnectionContext';
// import { NexusApi } from '../../service/Nexus';

export interface HomeProps {
    title?: string
}

const Home: React.FC<HomeProps> = ():JSX.Element => {
  const history = useHistory();
  const { datasource } = useContext<IDContext>(DataSourceContext);
  // const { connections, setConnections } = useContext<ICContext>(ConnectionContext);

  const handleClick = () => {
    history.push('/new-datasource');
  };

  useEffect(() => {
    // async function getDataSource() {
    //   await NexusApi.get('data-sources?total=false').then((resp) => {
    //     setDataSource(resp.data.data);
    //   });
    // }
    // async function getConnections() {
    //   await NexusApi.get('connections').then((resp) => {
    //     setConnections(resp.data.data);
    //   });
    // }
    // getDataSource();
    // getConnections();
  }, []);

 return (
   <Layout title="Data Source">
     <Header>
       <Title>
         DataSources
       </Title>
       <Button onClick={() => handleClick()}>New DataSources</Button>
     </Header>
     <TableUI rows={datasource} />
   </Layout>
);
};

export default Home;
