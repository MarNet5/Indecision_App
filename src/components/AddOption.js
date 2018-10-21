import React from 'react';

export default class AddOption extends React.Component {
    state = {
        error: undefined
    };
    // constructor(props) {
    //     super(props);
    //     this.handleAddOption = this.handleAddOption.bind(this);
    //     // this.state = {
    //     //     error: undefined
    //     // };
    // }
    handleAddOption = (e) => {
        e.preventDefault();
        const option = e.target.elements.option.value.trim(); //trim prevents spaces
        const error = this.props.handleAddOption(option);
        
//shortcut
this.setState(() => ({ error }));
if(!error) {
    e.target.elements.option.value = '';
}

        // this.setState(() => {
        //     return { error };
        // })
    }
    render() {
        return (
        <div>
            {this.state.error && <p className="add-option-error">{this.state.error}</p>}
            <form className="add-option" onSubmit={this.handleAddOption}>
                <input className="add-option__input" type="text" name="option" />
                <button className="button">Add option</button>
            </form>
        </div>
        )
    }
}
// export default AddOption;