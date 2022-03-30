import {Component} from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeersList from "../employeers-list/employeers-list";
import EmployeersAddForm from "../employeemnt-add-form/employeemnt-add-form";

import "./app.css";

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: [
                {id: 1, name:"John C.", salary: 800, increase: false, rise: false},
                {id: 2, name:"Mark G.", salary: 1000, increase: false, rise: false},
                {id: 3, name:"Scaletta V.", salary: 1200, increase: false, rise: false},
                {id: 4, name:"Morozov A.", salary: 5000, increase: false, rise: false},
            ],
            term: '',
            selector: null,
        };
        this.paymentFilter = 1000;
        this.maxID = this.state.data.length + 1;
    }

    deleteItem = (id) => {
        this.setState( ({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (name, salary) => {
        const newItem = {
            id: this.maxID,
            name,
            salary,
            increase: false
        }

        if (!name || name.length < 4){
            return alert("Введены некорректные данные!")
        }
        if (!salary || salary.length < 3){
            return alert("Введены некорректные данные!")
        }
        
        this.setState( ({data}) => {
            const resultState = [...data, newItem];
            return {
                data: resultState
            }
        } )
        this.maxID = this.maxID + 1;
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id){
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))
    }

    getCurrentEmployeersNumber = () => {
        return this.state.data.length;
    }

    getRiseEmployeersNumber = () => {
        const employeers = this.state.data;
        const riseEmployeers = employeers.filter(person => {
            if (person.increase){
                return person;
            }
        })
        return riseEmployeers.length;
    }

    searchByTerm = (data,term) => {
        if (term.trim().length === 0){
            return data;
        }
        return data.filter(item => {
            if (item.name.indexOf(term) > -1){
                return item;
            }
        })
    }

    onUpdateTerm = (term) => {
        this.setState({term})
    }

    filterBySelector = (data,selector=null) => {
        if (selector === "rise"){
            return data.filter(item => item.rise);
        } else if (selector === "payment"){
            return data.filter(item => item.salary > this.paymentFilter);
        } else {
            return data;
        }
    }

    onUpdateFilter = (selector) => {
        this.setState({selector})
    }

    render(){
        const {data, term, selector} = this.state;
        const visibleDataBySearch = this.searchByTerm(data,term);
        const visibleData = this.filterBySelector(
            visibleDataBySearch,
            selector
        );

        return(
            <div className="app">
                <AppInfo 
                    getEmplsNumber={this.getCurrentEmployeersNumber}
                    getRiseEmplsNumber={this.getRiseEmployeersNumber}/>
                <div className="search-panel">
                    <SearchPanel onUpdateTerm={this.onUpdateTerm} />
                    <AppFilter
                        onUpdateFilter={this.onUpdateFilter}
                        payFilterValue={this.paymentFilter}
                    />
                </div>
                <EmployeersList
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                />
                <EmployeersAddForm onAddItem={this.addItem} />
            </div>
        )
    }
}

export default App;