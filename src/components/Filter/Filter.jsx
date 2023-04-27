import PropTypes from 'prop-types';
import './Filter.module.css';

export const Filter = ({filter, changeFilterInput})=>{
     return <label>
        <input type="text" 
        value={filter} 
        onChange={changeFilterInput}
        placeholder='Find contacts by name'
        />
    </label>;
  
};



Filter.propTypes = {
    filter: PropTypes.string,
    changeFilterInput: PropTypes.func.isRequired
};