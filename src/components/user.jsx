import React ,{useState}from "react";
const User = (props) => {
    const [planet,setPlanet] = useState("earth");
    
    return (
        <div>
        <h1>{props.name}</h1>          
        <p>{props.description}</p>
        </div>
        );
                        
};
// class User extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state={
//             planet:"Jupiter"
//         };
//         console.log("hi construcotr");
//     }

//     componentDidMount() {
//         this.setState({planet : "Jupiter"})
//     }
     
//     // static getDerivedStateFromProps(prop,state){
//     //     console.log("New State Object");
//     //     return ({planet : "Saturn"});
//     // }
     
//     shouldComponentUpdate(nextProp,nextState){
//         console.log("from shouldComponentUpdate");
//         console.log({
//             nextProp,
//             nextState,
//         });
//         return true;
//     }

//     getSnapshotBeforeUpdate(prevProp,prevState){
//         console.log("from getSnapshotBeforeUpdate");
//         console.log({ prevProp,prevState });
//         return true;
//     }

//     componentDidUpdate(){
//         // console.log(this.state);

//     }


//     componentWillUnmount() {
//         console.log("bye bye");
//     }

//     render(){
//         console.log("rendered");
//         return (
//             <div>
//                 <h1>{this.props.name}</h1>          
//                 <p>{this.props.description}</p>
//                 <h4>{this.state.planet}</h4>
//             </div>
//         );
//     }   
// };
export default User;