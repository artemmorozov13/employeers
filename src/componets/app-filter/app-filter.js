import { Component } from "react/cjs/react.production.min";
import "./filter.css";

class AppFilter extends Component{
    constructor(props){
        super(props);
        this.state = {
            selector: null,
        }
    }

    filterBySelector = (e,selector) => {
        this.props.onUpdateFilter(selector);

        document.querySelectorAll(".btn").forEach(button => {
            button.classList.remove("btn-light")
            button.classList.add("btn-outline-light");
        })

        e.target.classList.remove("btn-outline-light");
        e.target.classList.add("btn-light");
    }

    render(){
        const {payFilterValue} = this.props;

        return(
            <div className="btn-group">
                <button 
                    className="btn btn-light"
                    type="button"
                    onClick={(e) => this.filterBySelector(e, "all")}>
                        Все сотрудники
                </button>
                <button 
                    className="btn btn-outline-light"
                    type="button"
                    onClick={(e) => this.filterBySelector(e, "rise")}>
                        На повышение
                </button>
                <button 
                    className="btn btn-outline-light"
                    type="button"
                    onClick={(e) => this.filterBySelector(e, "payment")}>
                        З/П больше {payFilterValue}$
                </button>
            </div>
        )
    }
}

export default AppFilter;