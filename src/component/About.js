import { Outlet } from "react-router-dom";
import Profile from "./Profile";
import {Component} from "react" 
class About extends Component{
  constructor(){
    super()
    console.log("Parent constructor")
  }

componentDidMount(){
  console.log("Parent component did mount")
}

  render(){
    console.log("Parent render")
    return (
      <div className="mt-36">
        <h1>About Page</h1>
        <p>Building Food App called Foodie Adda</p>
        {/* <Outlet/>   */}
          {/* for nested routing */}
        <Profile   child={"child1"} />
        {/* <Profile child ={"child2"}/> */}
      </div>
    );
  }
}
export default About;


/** 
 * component lifecycle with 1 child
 * 
 * Parent Constructor
 * Parent Render
 * Child Constructor
 * Child Render
 * Child ComponnetDidMount
 * Parent ComponentDidMount
*/

/**
 * component lifecycle with 2 child
 * 
 * Parent Constructor
 * parent Render
 * Child1 Constructor
 * Child1 Render
 * Child2 Construtor
 * Child2 Render
 * Child1 ComponnetDidMount
 * Child2 ComponnetDidMount
 * Parent ComponnetDidMount
 */