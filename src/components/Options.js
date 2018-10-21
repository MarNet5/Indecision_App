import React from 'react';
import Option from './Option';

const Options = (props) => (
          
        <div>
            <div className="widget-header">
                <h3 className="widget-header--title">Your Options</h3>
                <button 
                className="button button__link"
                onClick={props.handleDeleteOptions}
                >
                Remove All
                </button>
            </div>
            {props.options.length === 0 && <p className="widget__message">Please add an option to get started!</p>}
            {
            props.options.map((option, index) => (
            <Option 
            key={option} 
            optionText={option}
            count={index + 1}
            handleDeleteOption={props.handleDeleteOption}
            />
        ))
           }
        </div>  
        );  

export default Options;

//class Options extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.handleRemoveAll = this.handleRemoveAll.bind(this);
    // }
    // handleRemoveAll(){
    //     // alert('Remove All')
    //     console.log(this.props.options);
    // }
    // render() {
        //         return (
                  
        //         <div>
        //             <button onClick={this.props.handleDeleteOptions}>Remove All</button>
        //            {
        //             this.props.options.map((option) => <Option key={option} optionText={option} />)
        //            }
        //         </div>  
        //         );
        //     }
        // } 