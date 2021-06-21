import React from 'react'
import ReactDOM from "react-dom";
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";

  function App1() {
    const [tags, setTags] = React.useState(["html"])
    return (
        <ReactTagInput
            tags={tags}
            onChange={(newTags) => {
                const setArr = new Set(newTags);
                const newArr = [];
                for (const k in setArr.values()) {
                    //console.log(k);
                    newArr.push(k);
                }
                setArr.forEach(v => newArr.push(v));

                //console.log(setArr,newArr);
                setTags(newArr);
                // console.log(newTags)

            }}
        />
    )
}


export default App1;