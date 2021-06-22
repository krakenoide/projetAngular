import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { HttpClient } from "@angular/common/http"

@Injectable()
export class serviceUser {
    connectedUser: User= new User(0,"","",false);
    users: User[]=[];
    apiUser = "http://localhost:8080/api/user"
    apiLogin = "http://localhost:8080/api/login"
    userSubject = new Subject<string>();

    constructor(private httpClient:HttpClient){}

    setConnectedUser(cuser:User):void {
        this.connectedUser=cuser;
    }

    emitConnectedUser():User{
        return this.connectedUser;
    }

    login(username:string,password:string):User {
        this.httpClient.post<User> (this.apiLogin, {username:username,password:password})
                       .subscribe(data =>{this.connectedUser=data},error => {});
        return this.connectedUser;
    }

    deleteUser(id:number){
        this.httpClient.delete(this.apiUser+`/${id}`)
                       .subscribe(data =>{},error => {});
    }

    getAllUsers() {
        this.httpClient.get<User[]> (this.apiUser)
                       .subscribe(data =>{this.users=data},error => {});
    }

    createUser(username:string,password:string,passwordbis:string){
        this.httpClient.post<User> (this.apiUser, {username:username,password:password,passwordbis:passwordbis})
                       .subscribe(data =>{this.connectedUser=data},error => {});
    }

    modifUser(nusername:string,oldpassword:string,npassword:string,npasswordbis:string){
        this.httpClient.post<User> (this.apiUser+`/${this.connectedUser.id}`, {username:nusername,oldpassword:oldpassword,password:npassword,passwordbis:npasswordbis})
                       .subscribe(data =>{this.connectedUser=data},error => {});
    }
}