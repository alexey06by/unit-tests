export class User {
    name:string;
    email:string;
    isActive: boolean;

    constructor(name:string, email:string){
        const reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!name || !email){
            throw new Error('Please specify name and email');
        } else if (!reg.test(email)){
            throw new Error('Please specify email using following format: username@gmail.com');
        } else {
            this.name = name;
            this.email = email;
            this.isActive = true;                 
        }
    }

    activateUser() {
        this.isActive = true;
    }

    deactivateUser() {
        this.isActive = false;
    }

    renameUser(newName:string) {
        if (!newName){
            throw new Error('Empty name is prohibited'); 
        } else {
        this.name = newName;     
        }
    }
}