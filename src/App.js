import './App.css';
import ContactApp from './container/ContactApp/ContactApp';
import Layout from './layout/Layout';

function App() {
  return (
    <Layout>
      <div className="App">
        <ContactApp />
      </div>
    </Layout>
  );
}

export default App;
