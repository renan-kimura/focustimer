import { controls } from "./elements.js";
import * as actions from './actions.js';

export function registerControls(){
    controls.addEventListener('click', (event) => {
        const action = event.target.dataset.action
        if(typeof action[action] != "function"){
            return
        }
        action[action]
    })
}