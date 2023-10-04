const { Component } = require("react/cjs/react.production.min");

// Function Component   
// Button Component
const MyButton = (props) => {
    const handleButtonClick = () => {
        alert(props.message);
    }

    return (
        <button onClick={handleButtonClick} style={{ margin: "10px" }}>
            {props.children}
        </button>
    );
}

// App Component
const MyApp = () => {
    return (
        <div>
            <h1>Learn React</h1>
            <MyButton message="Learn React">React</MyButton>
            <MyButton message="Learn JavaScript">JavaScript</MyButton>
        </div>
    );
}

// Class Component
// Button Component
class tombol extends React.Component {
    handleButtonClick = () => {
        alert(this.props.message);
    }

    render(){
        return (
            <button onClick={this.handleButtonClick} style={{ margin: "10"}}>
                {this.props.children}
            </button>
        )
    }
}

// App Component
class myApp extends React.Component {

    render(){
        return (
            <div>
                <h1>Learn React</h1>
                <MyButton message="Learn React">React</MyButton>
                <MyButton message="Learn JavaScript">JavaScript</MyButton>
            </div>

        );
    }
}

const myElement = <MyApp />;
const myApp = myElement;

ReactDOM.createRoot(document.getElementById('root')).render(myApp);

