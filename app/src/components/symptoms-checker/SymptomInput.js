import React from 'react'
import ReactDOM from "react-dom";
import symtoms_list from "./symptoms_list.json";
import Loader from '../../Loader';

function Badge(props){
    return(
        <span style={{paddingRight:"5px"}}>
            <a href="#" class="badge badge-secondary" onClick={props.addSymptom}>{props.name}</a>
        </span>
        
    )
}

class SymptomInput extends React.Component{
    constructor(props){
        super(props);
        this.addSymptom=this.addSymptom.bind(this);
        this.showSymptomsList=this.showSymptomsList.bind(this);
        this.state={
            seletedSymptoms:[],
            searchResultSymptomsList:symtoms_list,
            searchResults:<Loader/>
        };
        this.getOption=this.getOption.bind(this);
    }
    componentDidMount(){
        this.showSymptomsList()
    }
    addSymptom(){
        console.log("er")
    }
    showSymptomsList(){
        const results=[];
        this.state.searchResultSymptomsList.forEach(element => {
            results.push(<Badge name={element} addSymptom={this.getOption}/>)
        });
        this.setState({searchResults:results});
    }
    render(){
        return(
            <div>

                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="symptoms" placeholder="Enter symptoms"/>
                    <small id="emailHelp" class="form-text text-muted">Enter symptoms and select from the below list</small>
                </div>

                <div>{this.state.searchResults}</div>
            </div>
        )
    }

    getOption(e){
        const symp=e.target.innerText
        let flag=true;
        this.state.seletedSymptoms.forEach(element=>{
            if(element===symp){
                console.log(element)
                flag=false;
            }
        });
        if(flag){
            let newArr=this.state.seletedSymptoms.concat(symp);
            //this.state.seletedSymptoms=newArr;
            this.setState({seletedSymptoms:newArr});
            console.log(this.state.seletedSymptoms,newArr)
        }
        console.log(this.state.seletedSymptoms);
    };

}

export default SymptomInput;