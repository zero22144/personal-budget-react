import React, { Component } from 'react';
import {Pie} from 'react-chartjs-2';
import axios from 'axios';

export default class BudgetData extends Component
{
   constructor(props) {
      super(props);
      this.state = {
        Data: {}
      }
    }
       
    componentDidMount() {
      axios.get(`http://localhost:4200/budget`)
        .then(res => {
          const budgy = res.data;
          let title = [];
          let budget = [];
          
          for (var i = 0; i < res.data.myBudget.length; i++) {
            title.push(budgy.myBudget[i].title);
                budget.push(budgy.myBudget[i].budget);
        };
          
          this.setState({ 
            Data: {
              labels: title,
              datasets:[
                 {
                    data: budget ,
                    backgroundColor:[
                     'red',
                     'orange',
                     'yellow',
                     'green',
                     'blue',
                     'indigo',
                     'violet'
                  ]
                 }
              ]
           }
           });
        })
    }
 render()
   {
      return(
        <div>
        <Pie
          data={this.state.Data}
          options={{maintainAspectRatio: false}}/>
     </div>
      )
   }
}