import './App.css';
// import ContactApp from './container/ContactApp/ContactApp';
import Layout from './layout/Layout';
import WebRoutes from './routes';

function App() {
  return (
    <Layout>
      <div className="App">
        <WebRoutes />
      </div>
    </Layout>
  );
}

export default App;
