console.log('App.js is running!');

//JSX - JavaScript XML
const app = {
    titleName: 'Indecision app',
    subtitleName: 'Put your life in the hands of a computer.',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if(option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};

const onRemoveAll = () => {
   app.options = [];
   render();
};

const onMakeDecision = () => {
    const randomNumber = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNumber];
    alert(option);
}

const appRoot = document.getElementById('app');

// const numbers = [55, 101, 1000];

const render = () => {
    const template = (
        <div>
            <h1>{app.titleName}</h1>
            {app.subtitleName && <p>{app.subtitleName}</p>}  
            <p>{app.options.length > 0 ? 'here are your options' : 'No options'}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I Do?</button>
            <button onClick={onRemoveAll}>Remove All</button>
            
            <ol>
            {
                app.options.map((option) => {
                    return <li key={option}>Option: {option}</li>
                })
                //shortcut: {
            //         app.options.map((option) => <li key={option}>Option: {option}</li>)
            // }
            }    
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add option</button>
            </form>
        </div>
        ); 
        ReactDOM.render(template, appRoot);  
    };
render();