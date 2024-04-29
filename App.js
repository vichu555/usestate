import './App.css';
import Class_component from './Class_component';
import Fun_component from './Fun_component';
import Arrow_Com from './Arrow_Com';
import Props_component from './Props_component';
import Props_functional from './Props_functional';
import Props_arrow_component from './Props_arrow_component';
import StateFunctional from './StateFunctional';
import Tableobj from './Tableobj';
import SelectComponent from './SelectComponent';
import List_keys_arrays from './List_keys_arrays';
import Conditional_eventHandling from './Conditional_eventHandling';
import Radio from './Radio';
import Checkbox from './Checkbox';
function App() {
  return (
    <div className='App'>
     {/* <Arrow_Com /> */}
    {/* <Fun_component /> */}
    {/* <Class_component /> */}
     
    {/* <Props_component name="vichithra" title="props arrow component" /> */}

    {/* <Props_functional name="vilangar" age="45" place="thanjavur"/> */}
  
    <Props_arrow_component course="React js" institute="Credo SystemZ" /> 
    {/* <StateFunctional /> */}
    {/* <Tableobj /> */}
    {/* <SelectComponent /> */}
    {/* <List_keys_arrays /> */}
    {/* <Conditional_eventHandling /> */}
    {/* <Radio /> */}
    {/* <Checkbox /> */}

    </div>
  );
}

export default App;
