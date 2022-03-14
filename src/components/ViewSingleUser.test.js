import React from 'react';
import {render,screen} from'../setupTests'
import ViewSingleUser from './ViewSingleUser';
import userEvent from "@testing-library/user-event";
import {createMemoryHistory} from 'history'
import {MemoryRouter} from 'react-router-dom'
import '@testing-library/jest-dom'

jest.mock()
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
        render(<ViewSingleUser from={location} path='/viewSingleUser' person={person} location={loco} />)
        expect(screen.getByRole(<h3/>)).toHaveTextContent("Hobbies: ")
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