import { useHistory } from 'react-router';
import Layout from '../../components/Layout';
import { Header, Title, Button } from '../../shared/styles';
import TableUI from '../../components/Table';
// import { ConnectionContext, ICContext } from '../../context/ConnectionContext';
import useDataSource from '../../hook/useDataSource';

export interface HomeProps {
    title?: string
}

const Home: React.FC<HomeProps> = ():JSX.Element => {
  const history = useHistory();
  const { datasource } = useDataSource();

  const handleClick = () => {
    history.push('/new-datasource');
  };

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
