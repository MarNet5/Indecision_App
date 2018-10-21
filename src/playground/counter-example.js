// const user = {
//     name: 'Maryna',
//     age: 17,
//     location: 'San Jose'
// };

// function getLocation(location){
//     if(location) {
//      return <p>Location: {location}</p>;  
//     }
// }
// const templateTwo = (
//     <div>
//         <h1>{user.name ? user.name : 'Anonymous'}</h1>
//         {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
//         {getLocation(user.location)}

//     </div>
// )


class Counter extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        };
    }

    // componentDidMount() {
    //     try {
    //         const json = localStorage.getItem('count');
    //         const count = JSON.parse(json);
    //         if(count) {
    //             this.setState(() => ({ count }));
    //         }
    //     } catch(e) {

    //     }
    // }

    componentDidMount(){
        const stringCount = localStorage.getItem('count');
        const count = parseInt(stringCount, 10);
        if(!isNaN(count)) {
            this.setState(() => ({ count }));  
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.count !== this.state.count) {
            localStorage.setItem('count', this.state.count)
        }
    }

    // componentWillUnmount(){
    //     console.log('componentWillUnmount');
    // }
    
    handleAddOne(){
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
    }
    handleMinusOne(){
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            };
        });
    }
    handleReset(){
        this.setState(() => {
            return {
                // count: prevState.count - prevState.count
                count: 0
            }
        })
    }
    render() {
        return (
            <div> 
                <h1>Count:{this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        );
    }
}

// Counter.defaultProps = {
//     count: 0
// }

ReactDOM.render(<Counter />, document.getElementById('app'));


//EVENTS AND ATRIBUTES
// let count = 0;
// const addOne = () => {
//     count++;
//     renderCounterApp();
    
// };
// const minusOne = () => {
//     count = count -1;
//     renderCounterApp();
// };
// const reset = () => {
//     count = 0;
//     renderCounterApp();
// };
// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>Reset</button>
//         </div>
//     );
//     ReactDOM.render(templateTwo, appRoot);
// }
// renderCounterApp();



