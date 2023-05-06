export class User{
    constructor(
        public id:string ,
        public username:string,

             public Email:string ,
                public role:[],
                 private _token:string,
                 
                ){}
             
    get token(){
        
           return this._token
    }

}