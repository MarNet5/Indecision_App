class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleVisibilityToggle = this.handleVisibilityToggle.bind(this);
        this.state = {
            visibility: false
        }
    }
    handleVisibilityToggle() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        });
    }
    render() {
        return (
         <div>
             <h1>Visibility Toggle</h1>
             <button onClick={this.handleVisibilityToggle}>
             {this.state.visibility ? 'Hide Details' : 'Show Details'}
             </button>
             {this.state.visibility && (
                 <div>
                     <p>Some details</p>
                 </div>
             )}
         </div>   
        )
    }
}
       
ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));



// let visibility = false;
// const changeButton = () => {
//     visibility = !visibility;
//     render();
// }
// const render = () => {
//     const jsx = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={changeButton}>
//                 {visibility ? 'Hide details' : 'Show details'}
//             </button>
//             {visibility ? <div><p>Hey, these are some details you can see now!</p></div> : '' }
//         </div>
//     );
//     ReactDOM.render(jsx, document.getElementById('app'));
// }
// render();




    //another way of showing text while changing visibility
    // {visibility&&(
    //     <div>
    //         <p>hey, this is some details!</p>
    //     </div>
    // )}
