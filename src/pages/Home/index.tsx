import { useHistory } from 'react-router';
import { useContext, useEffect } from 'react';
import Layout from '../../components/Layout';
import { Header, Title, Button } from '../../shared/styles';
import TableUI from '../../components/Table';
import { stubDataSource } from '../../utils/mockData';
import { DataSourceContext, IDContext } from '../../context/DataSourceContext';
import { NexusApi } from '../../service/Nexus';

export interface HomeProps {
    title?: string
}

const Home: React.FC<HomeProps> = ():JSX.Element => {
  const history = useHistory();
  const { datasource } = useContext<IDContext>(DataSourceContext);
  const rows = datasource.length ? datasource : stubDataSource;

  const handleClick = () => {
    history.push('/new-datasource');
  };

  useEffect(() => {
    async function getData() {
      await NexusApi.get('data-sources?total=false').then((resp) => {
        // const { data }:IDataSource[] = resp;
        // setDataSource(data);
        console.log(resp);
      });
    }
    getData();
  }, [rows]);

 return (
   <Layout title="Data Source">
     <Header>
       <Title>
         DataSources
       </Title>
       <Button onClick={() => handleClick()}>New DataSources</Button>
     </Header>
     <TableUI rows={rows} />
   </Layout>
);
};

export default Home;
