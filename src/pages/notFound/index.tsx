import Layout from '../../components/Layout';
import NotFoundImg from '../../shared/static/illustration_404.svg';
import { Container } from './styles';

const NotFound:React.FC = ():JSX.Element => (
  <Layout title="Not Found">
    <Container>
      <h2>Sorry, page not found!</h2>
      <p>
        Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve mistyped the URL? Be sure to check your spelling.
      </p>
      <img src={NotFoundImg} alt="not-found" />
    </Container>
  </Layout>
    );

export default NotFound;
