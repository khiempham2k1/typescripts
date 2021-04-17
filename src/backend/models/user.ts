import { IsNotEmpty, Length } from "class-validator";

class User {
    @IsNotEmpty()
    @Length(3)
    username: string;

    constructor(username:string){
        this.username = username
    }
}

export default User;