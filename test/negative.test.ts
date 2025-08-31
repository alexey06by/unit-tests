import { User } from "../src/user";
import { describe, it } from 'mocha'
import { expect } from 'chai'
import { error } from "console";

describe("Negative tests", function(){
    it("Should show error in case of input without name", function(){
        expect(() => new User('', 'testEmail@gmail.com')).to.throw('Please specify name and email');
    });

    it("Should show error in case of input without email", function(){
        expect(() => new User('testUser', "")).to.throw('Please specify name and email');
    }); 

    it("Should show error in case of invalid email and name", function(){
        expect(() => new User('', "")).to.throw('Please specify name and email');
    });     
    
    it("Should show error in case of email without @", function(){
        try {
            const user = new User('testUser', "invalidEmail");
            if (user){
                throw new Error("Validation was not applied");
            }
        } catch (err) {
            expect(err.message).to.contain('Please specify email using following format: username@gmail.com');
            expect(err.name).to.equal('Error');            
        }
    }); 
    
    it("Should show error in case of email without username before @", function(){
        try {
            const user = new User('testUser', "@gmail.com");
            if (user){
                throw new Error("Validation was not applied");
            }
        } catch (err) {  
        expect(err.message).to.contain('Please specify email using following format: username@gmail.com');
        expect(err.name).to.equal('Error');          
        } 
     });       
    
    it("Should show error in case of empty name in renaming attempt", function(){
        try {
            const user = new User('testUser', "testEmail@gmail.com");
            user.renameUser('');
            throw new Error("Validation was not applied");
        } catch (err) {
            expect(err.message).to.contain('Empty name is prohibited');
            expect(err.name).to.equal('Error');            
        }
    });    

});
