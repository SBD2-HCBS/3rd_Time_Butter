import {default as reducer,ADD_PERSON, DELETE_PERSON, VIEW_PERSON, INITALIZED} from './reducer'


const newState={
    person:[{firstName: 'Jim'}]
}

describe("testing the reducer", () => {
    describe('when the last state is undefined', () => {
        test("when the last state is undefined it should return an empty person array",()=>{
            const actual = reducer(undefined,{
                type:INITALIZED
            })
            expect(actual).toEqual({person:[]})
        })
        test('Should update the current state')
    })
})