import { useHistory } from 'react-router';
import Layout from '../../components/Layout';
import { Header, Title } from '../../shared/styles';
import BasicTable from './dTable';
import { Paper, Button } from './styles';

export interface HomeProps {
    title?: string
}

const Home: React.FC<HomeProps> = ():JSX.Element => {
  const history = useHistory();

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
     <Paper elevation={3}>
       <BasicTable />
     </Paper>
   </Layout>
);
};

export default Home;
