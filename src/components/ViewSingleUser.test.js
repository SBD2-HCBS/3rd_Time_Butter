import React from 'react';
 import {render} from'../setupTests'
import {screen} from '@testing-library/react';
import ViewSingleUser from './ViewSingleUser';
import userEvent from "@testing-library/user-event";
import {createMemoryHistory} from 'history'
import {MemoryRouter, useLocation} from 'react-router-dom'
import '@testing-library/jest-dom'
import {Provider} from "react-redux";
import store from '../ducks/store'

jest.mock("react-router-dom",()=>({
    ...jest.requireActual("react-router-dom"),
    useLocation:() => ({
        pathname: 'localhost:3000/viewSingleUser'
    }),
    useSelector:() => ({
        state: state => state.person
    })
}))
describe('View Single User Component', () => {
    let person = {
        firstName: 'Jeff',
        lastName:'Dodds',
        age:40,
        hobbies:'Surfing'
    }

    let loco={
        obj:''
    }

    let location ={
        state : [{person}]


    }
    test('should not render if person length is zero',()=>{
        render(<Provider store={store}><ViewSingleUser from={location} path='/viewSingleUser' location={loco}/></Provider>)
        expect(screen.getByText('The List is empty')).toBeInTheDocument();

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