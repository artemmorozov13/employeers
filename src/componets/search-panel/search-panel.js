import { Component } from "react/cjs/react.production.min";
import "./search.css";

class SearchPanel extends Component{
    constructor(props){
        super(props)
        this.state = {
            term: "",
        };
    }

    onInput = (e) => {
        const inputValue = e.target.value;
        this.props.onUpdateTerm(inputValue);
    }

    render(){
        return(
            <input type="text"
                placeholder="Найти сотрудника" 
                className="search" 
                name="s" 
                onChange={this.onInput}
                value={this.state.value}/>
        )
    }
}

export default SearchPanel;