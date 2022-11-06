import './App.css';
import Card from './component/Card';
import info from './info';

function App() {
  
  const cards = info.map((item) => {
    return <Card key={item.id} {...item} />;
  });
  return (
    <>
    <h1>React Props Moviecard</h1>
    <section>{cards}</section>
    </>
  );
}

export default App;
