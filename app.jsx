// class App extends React.Component{
//     constructor(){
//         super();
//         this.state={
//             name1:"Swami Kiran",
//             age1:"22 ",
//             name2:"vardhan",
//             age2:"24"
//         };
//     }
//     render(){
//         // multi line code kosam
//         return(<div>
//             <div class="person">
//                  <h1>{this.state.name1}</h1>
//                     <p>{this.state.age1}</p>
//             </div>
//             <div class="person">
//                  <h1>{this.state.name2}</h1>
//                     <p>{this.state.age2}</p>
//             </div>
//             </div>
//         );
//     }
// }


//condition Statements
class App extends React.Component{
    constructor(){
        super();
        this.state={
            isLogged:true,
            details:[{
                id:"1",name:"Swami Kiran",age:"22"
            },{
                id:2,name:"Vardhan",age:"22"
            }]
        };
     }

     render(){
        // multi line code kosam
        return(<div>
            {this.state.isLogged &&
            this.state.details.map(details=>(
                <div key={details.id} className="person">
                    <h1>{details.name}</h1>
                   <p>{details.age}</p>
                   </div>
            ))} 

            </div>
        );
    }
}



ReactDOM.render(<App/>,document.getElementById("root"))