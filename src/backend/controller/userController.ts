import autobind from 'autobind-decorator';
import { validate } from 'class-validator';
import User from '../models/user';
export class user{
    constructor(public element:HTMLElement){
        const button = element.querySelector('#Play');
        console.log('hihi controller');
        button?.addEventListener('click', this.processPlayButtonClick);
    }
    @autobind
    processPlayButtonClick(event:Event){
        event.preventDefault();
        console.log('event')
        const form = this.element.querySelector('form') as HTMLFormElement;
        const usernameElement = this.element.querySelector('#username') as HTMLInputElement;
        const helpId = this.element.querySelector('#userNameHelpId');

        if(usernameElement){
            let user:User = new User(usernameElement.value);
            validate(user).then(error=>{
                if(error.length>0){
                    if(helpId){
                        helpId.className = 'form-text text-muted invisible'
                    }
                    
                }else{
                    form.submit();
                }
            })
        }
    }
}