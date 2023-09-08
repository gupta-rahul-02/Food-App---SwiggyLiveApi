import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faLinkedin , faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
library.add(faGithub, faLinkedin , faWhatsapp);
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      userInfo: {
        name: "Dummy name",
        location: "Dummy location",
      },
    };
    console.log(this.props.child + " constructor");
  }

  async componentDidMount() {
    //Best place to make API calls in class based components
    const data = await fetch("https://api.github.com/users/gupta-rahul-02");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
    // console.log(this.props.child+"commponent did mount")
  }

  componentDidUpdate() {
    //console.log(this.props.child+" component did update")
  }

  componentWillUnmount() {
    //console.log(this.props.child+"component Unmounted")
  }

  render() {
    //console.log(this.props.child+"render")
    const { name, avatar_url } = this.state.userInfo;
    return (
      <>
        <div className="border-solid border-2 border-orange-300 w-52 ml-[43%] mr-[30%]">
          <div className="mx-[10%]">
            <h1 className="ml-2">Project created by</h1>
            <h2>{this.props.name}</h2>
            <h3 className="ml-8 font-bold mb-2">{name}</h3>
          </div>

          <img className="w-[50%] mx-[25%]" src={avatar_url}></img>

          <Link to="https://github.com/gupta-rahul-02">
            <FontAwesomeIcon className="p-5 ml-4" icon="fa-brands fa-github" />
          </Link>
          <Link to="https://www.linkedin.com/in/rahul-gupta-34595b182/">
            <FontAwesomeIcon className="p-5" icon="fa-brands fa-linkedin" />
          </Link>
          <Link to="https://api.whatsapp.com/send?phone=7020842715"> 
            <FontAwesomeIcon className="p-5" icon="fa-brands fa-whatsapp"/>
          </Link>

          {/* <FontAwesomeIcon className='p-5' icon="fa-brands fa-LinkedIn"/> */}
        </div>

        {/* <h3>{this.state.count}</h3> */}

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
