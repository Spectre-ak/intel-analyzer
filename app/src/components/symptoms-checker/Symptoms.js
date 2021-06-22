import React from "react";
import { ReactDOM } from "react";
import data from "./dataset.json"
import symtoms_list from "./symptoms_list.json";
import SymptomInput from "./SymptomInput"

function LoadDataset() {
    console.log(data)
    var unique_symp = new Set();
    data.forEach(element => {
        for (var i = 1; i <= 17; i++) {
            unique_symp.add(element["Symptom_" + i]);
        }
    });
    console.log(unique_symp);
    console.log(symtoms_list);
}

class Symptom extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        //LoadDataset();
    }
    render() {
        return(
            <div className = "container" >
                Select or type symtopms from the given list to get
            <SymptomInput />
            </div>
        )
    }
}
export default Symptom;