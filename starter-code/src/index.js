// import react
import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar'
import CoolButton from './components/CoolButton'
import FormField from './components/FormField'
import Form from './components/Form'
import "bulma/css/bulma.css";


export default function App() {
    return (
        <>
            <Navbar />
            <Form>
                <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
                <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
                <CoolButton isSmall isDanger className="is-rounded is-primary">Button 1</CoolButton>
                <CoolButton ismall isSuccess>Button 2</CoolButton>
            </Form>
        </>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
