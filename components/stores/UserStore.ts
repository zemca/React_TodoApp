import { extendObservable } from 'mobx';

class Userstore {
    constructor() {
        extendObservable(this, {
            
            loading: true,
            isLoggedIn: false,
            username: ''

        })
    }
}

export default new Userstore();