
import './App.css';
import imageOne from './shopping.jpg'
import imageTwo from './man.jpg'
import { GroceryList } from './groceryList';

function App() {
  return (
    <div className='App'>
      <img src={imageOne} alt='grocery' width='300px' />
      <h1>Gricery List</h1>
      <div>
      <GroceryList/>
      </div>
      <img src={imageTwo} alt='man' width='300px' />
    </div>
  );
}

export default App;
