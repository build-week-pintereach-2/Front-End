
import React, {useState} from 'react';
import axios from 'axios';
import { Grid } from 'semantic-ui-react';
import Paper from "./Paper";
export default function PaperList() {
    const [papers, setPapers] = useState ()
    axios.get ('https://pintereach2.herokuapp.com/users/pins/dashboard')
    .then(response=> {
        console.log (response);
        setPapers(response.data.map((paper,idx)=>
            <Grid.Column key={idx}><Paper paper={paper}/></Grid.Column>
        ))


    })
    if (!papers){
        return <p>Loading...</p>
    }
    return <Grid columns={2}>{papers}</Grid>
}


