import { Component } from "react";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state ={
        count:0,
        userInfo:{
            name:"Dummy name",
            location: "Dummy location"
        }
    }
    console.log(this.props.child+" constructor")
  }

  async componentDidMount(){
    //Best place to make API calls in class based components
    const data = await fetch("https://api.github.com/users/gupta-rahul-02")
    const json = await data.json()
    console.log(json)
    this.setState({
        userInfo:json
    })
    console.log(this.props.child+"commponent did mount")
  }

  componentDidUpdate(){
    console.log(this.props.child+" component did update")
  }

  componentWillUnmount(){
    console.log(this.props.child+"component Unmounted")
  }

  render() {
    console.log(this.props.child+"render")
    const {name,avatar_url} = this.state.userInfo
    return (
      <>
        <p>__________________________________</p>
        <h1>Project created by</h1>
        <h2>{this.props.name}</h2>
        {/* <h3>{this.state.count}</h3> */}
        <h3>Name: {name}</h3>
        <img src={avatar_url} ></img>
        {/* <button onClick = {() => this.setState({count:this.state.count+1})}>Click me</button> */}
      </>
    );
  }
}

export default Profile;


/**
 * constructor
 * render
 * componentdidMount
 */

/**
 *  componentDidUpdate get called after each render after the initial render , 
 *  componentDidUpdate is part of 2nd phase(i.e. commit phase) of component lifecycle 
 */

/**
 * after setState lifecycle  will be
 * Parent constructor
 * Parent Render
 * child Render
 * child constructor
 * child componentDidMount
 * parent componentDidMount
 * 
 * after setstate or rerender
 * child Render
 * child componentDidUpdate
 * 
 */

/**
 * componentWillUnmount will be called after the component is changed or removed from screen
 * it is used to clean the stack we can say
 */