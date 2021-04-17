import {user} from './controller/userController'

const appElement:HTMLElement = document.querySelector('#app') as HTMLElement;
console.log('form login')

if(appElement){
    let userController: user = new user(appElement);
}