import React from 'react';
 //import {render} from'../setupTests'
import {render} from '@testing-library/react';
import ViewSingleUser from './ViewSingleUser';
import userEvent from "@testing-library/user-event";
import {createMemoryHistory} from 'history'
import {MemoryRouter, useLocation} from 'react-router-dom'
import '@testing-library/jest-dom'
import {Router, useSelector} from "react-redux";
import store from '../ducks/store'

jest.mock("react-router-dom",()=>({
    ...jest.requireActual("react-router-dom"),
    useLocation:() => ({
        pathname: 'localhost:3000/viewSingleUser'
    })

}))
jest.mock("react-redux",()=>({
    ...jest.requireActual("react-redux"),
    useSelector:jest.fn()
}))
let person = {
    state: {
        firstName: 'Jeff',
        lastName: 'Dodds',
        age: 40,
        hobbies: 'Surfing'
    }
}

describe('View Single User Component', () => {
    function mockAppState() {

    }

    beforeEach(() =>{
        useSelector.mockImplementation(callback=> {
            return callback(person)
        })
    })
    afterEach(() => {
        useSelector.mockClear()
    })

    let loco={
        obj:''
    }

    let location ={
        state : [{person}]


    }
    test('should not render if person length is zero',()=>{
        const history = createMemoryHistory()
        render(<Router history={history}><ViewSingleUser from={location} path='/viewSingleUser' location={loco}/></Router>)
        expect(screen.getByText(/viewsingleuser/i)).toBeInTheDocument();

    })



    // test('app',()=>{
    //     const history = createMemoryHistory()
    //     render(
    //         <Router path='/ViewSingleUser' history={history}>
    //             <ViewSingleUser person={person} location={loco} />
    //         </Router>
    //     )
    //     expect(screen.getByText('Hobbbies')).toBeInTheDocument();
    // })


})