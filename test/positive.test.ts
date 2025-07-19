import { User } from "../src/user";
import { describe, it } from 'mocha'
import { expect } from 'chai'

describe("Positive tests", function(){
    it("Should create correct user object in case of valid input", function(){
        const user = new User('testUser', "testEmail@gmail.com");
        expect(user.name).to.equal('testUser');
        expect(user.email).to.equal('testEmail@gmail.com');
        expect(user.isActive).to.equal(true);        
    });

    it("Should deactivate user", function(){
        const user = new User('testUser', "testEmail@gmail.com");
        user.deactivateUser();
        expect(user.isActive).to.equal(false);        
    });

    it("Should activate user", function(){
        const user = new User('testUser', "testEmail@gmail.com");
        user.deactivateUser();
        user.activateUser();
        expect(user.isActive).to.equal(true);        
    });   
    
    it("Should rename user", function(){
        const user = new User('testUser', "testEmail@gmail.com");
        user.renameUser('renamedUser');
        expect(user.name).to.equal('renamedUser');    
    });
    
    it("Should create correct user object in case of  capslock input", function(){
        const user = new User('TEST_USER', "TEST@GMAIL.COM");
        expect(user.name).to.equal('TEST_USER');
        expect(user.email).to.equal('TEST@GMAIL.COM');
        expect(user.isActive).to.equal(true);        
    });    
})
