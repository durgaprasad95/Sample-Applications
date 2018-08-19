import { Tutorial } from './../models/tutorial.model'
import * as TutorialActions from './../actions/tutorial.action'

const initialState: Tutorial = {
    name: localStorage.getItem('name'),
    url: localStorage.getItem('url')
}

export function reducer(state: Tutorial[] = [initialState], action: TutorialActions.Actions) {

    switch (action.type) {
        case TutorialActions.ADD_TUTORIAL:
            localStorage.setItem('name', action.payload.name);
            localStorage.setItem('url', action.payload.url);
            return [...state, action.payload];
        default:
            return state;
    }
}