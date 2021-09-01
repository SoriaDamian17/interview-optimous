import Layout from '../../components/Layout';

interface INotFound {

}

export const NotFound:React.FC<INotFound> = ():JSX.Element => (
  <Layout title="Not Found">
    <div className="main-container">
      <h2>Not Found</h2>
    </div>
  </Layout>
    );
