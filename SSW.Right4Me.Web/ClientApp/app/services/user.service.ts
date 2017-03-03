import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { LoginClient, LoginVm, UserProfileClient, UserProfileVm } from './../Right4MeClient';
import { md5 } from './md5';

@Injectable()
export class UserService {
    private userProfileSource = new BehaviorSubject<UserProfileVm>(null);
    public userProfile$ = this.userProfileSource.asObservable();

    constructor(private loginClient: LoginClient
        , private userProfileClient: UserProfileClient
    ) { }

    login(login: LoginVm): Observable<UserProfileVm> {
        var result = this.loginClient.login(login);
        result.subscribe((profile) => {
            this.userProfileSource.next(profile);
        });

        return result;
    }

    logout(): Observable<any> {
        return this.loginClient.logout();
    }


    checkLogin() {
        this.userProfileClient.userProfile()
            .subscribe(p => {
                if (p) this.userProfileSource.next(p);
            },
            error => {
                // debugger; 
            }
            );
    }

    updateProfile(profile: UserProfileVm): Observable<UserProfileVm> {
        console.log("calling update user profile");
        var obs = <Observable<UserProfileVm>>this.userProfileClient.updateUserProfile(profile);
        obs.subscribe(newProfile => {
            console.log("update user profile success");
            this.userProfileSource.next(newProfile as UserProfileVm);
        });
        return obs;
    }

    getGravatarByEmail(email: string): string {
        if (!email) { email = "poaisduf poaisdufopaisdf" };
        return 'http://www.gravatar.com/avatar/' + md5(email) + '?s=210&d=mm';
    }

}