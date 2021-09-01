import Layout from '../../components/Layout';

export interface DemoPageProps {
    title?: string
}

const DemoPage: React.FC<DemoPageProps> = () => (
  <Layout title="Demo Page">
    <div>Hola Demo Page</div>
  </Layout>
);

export default DemoPage;