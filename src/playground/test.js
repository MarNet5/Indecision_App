class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handlePick = this.handlePick.bind(this);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state ={
            options: ['One', 'Two', 'Three']
        }
    }

    handleAddOption(option) {
        if(!option) {
            return 'Please Enter valid value to add item'
        } else if(this.state.options.indexOf(option) > -1) {
            return 'This option already exists'
        }
        this.setState((prevState) => {
            return {
                options: prevState.options.concat(option)
            }
            
        })
    }

    handleRemoveAll() {
        this.setState(() => {
            return {
                options: []
            }
        })
    }

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum]
        alert(option)
    }

    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of computer'
        return(
<div>
    <Header title={title} subtitle={subtitle}/>
    <Action 
    hasOptions={this.state.options.length > 0}
    handlePick={this.handlePick}
    />
    <Options 
    options={this.state.options}
    handleRemoveAll={this.handleRemoveAll}
    />
    <AddOption 
    handleAddOption={this.handleAddOption}
    />
    
</div>
        )
    }
}

class Header extends React.Component{
    render() {
        return(
<div>
    <h1>{this.props.title}</h1>
    <h2>{this.props.subtitle}</h2>
</div>
        )
    }
}

class Action extends React.Component {
    render() {
        return(
            <div>
                <button onClick={this.props.handlePick} disabled={!this.props.hasOptions}>What should I Do?</button>
            </div>
        )
    }
}

class Options extends React.Component {
    render() {
        return(
            <div>
                <button onClick={this.props.handleRemoveAll}>Remove All</button>
                {
                    this.props.options.map((option) => <Option key={option} optionText={option}/>)
                }
            </div>
        )
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                {this.props.optionText}
            </div>
        )
    }
}

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }
handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => {
        return { error }
    })
}

    render() {
        return(
<div>
    {this.state.error && <p>{this.state.error}</p>}
    <form onSubmit={this.handleAddOption}>
        <input type="text" name="option" />
        <button>Add option</button>
    </form>
</div>
        )
    }
}
ReactDOM.render(<IndecisionApp />, document.getElementById('app'));