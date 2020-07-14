// import react
import React from 'react';
import Navbar from './components/Navbar'
import CoolButton from './components/CoolButton'
import FormField from './components/FormField'
import Form from './components/Form'

export default function App() {
    return (
        <>
            <Navbar />
            <Form>
                <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
                <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
                <CoolButton isSmall isDanger className="is-rounded is-primary">Login</CoolButton>
                <CoolButton isSmall isSuccess>Sign Up</CoolButton>
            </Form>
        </>
    )
}

