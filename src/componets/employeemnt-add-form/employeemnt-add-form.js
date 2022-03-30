import { Component } from "react/cjs/react.production.min";
import "./employeers-add.css";

class EmployeersAddForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: null,
            salary: null,
        };
        this.addItem = props.onAddItem;
    }

    onValueChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }
    
    submitForm = e => {
        e.preventDefault();
        const {name, salary} = this.state;
        this.addItem(name,salary);
        e.target.reset()
    }

    render(){
        return(
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form method="POST"
                    className="add-form d-flex"
                    onSubmit={this.submitForm}>
                    <input type="text"
                        className="form-control new-post-label"
                        onChange={this.onValueChange}
                        name="name"
                        placeholder="Как его зовут?" />
                    <input type="number"
                        className="form-control new-post-label"
                        onChange={this.onValueChange}
                        name="salary"
                        placeholder="З/П в $?" />
    
                    <button type="submit"
                            className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }
}

export default EmployeersAddForm;