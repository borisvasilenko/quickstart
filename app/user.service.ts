import { Injectable } from '@angular/core';
import * as Rx from 'rxjs/Rx';

interface UserServiceState {
    username: string;
    roles: string[];
}

@Injectable()
export class UserService {
    private _state: UserServiceState = {
        username: null,
        roles: null
    };

    private _state$ = new Rx.BehaviorSubject(this._state);
    private _roles$ = this._state$.map(state => state.roles);

    public constructor() {
        this._load();
    }

    public get roles() {
        return this._roles$;
    }

    private _load() {
        setTimeout(() => {
            this._state$.next(Object.assign({}, this._state, {
                username: 'Boris Vasilenko',
                roles: ['admin']
            }));
        }, 3000);
    }
}