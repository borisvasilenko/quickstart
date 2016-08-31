import {
    Directive,
    ViewContainerRef,
    TemplateRef
} from '@angular/core';

import { UserService } from './user.service';
import { UnsubscriberComponent } from './unsubscriber.component';

@Directive({
  selector: '[ifRole]',
  inputs: ['ifRole'],
  providers: [UserService]
})
export class IfRole extends UnsubscriberComponent {
    public constructor(
        private _userService: UserService,
        private _viewContainer: ViewContainerRef,
        private _template: TemplateRef<any>
    ) {
        super();
    }

    set ifRole(requiredRoles: string[]) {
        this.subscriptions.push(
            this._userService.roles.subscribe(roles => {
                if (roles && requiredRoles && this._hasIntersection(roles, requiredRoles)) {
                    this._renderContent();
                } else {
                    this._renderEmpty();
                }
            }));
    }

    private _hasIntersection(a: string[], b: string[]) {
        let intersection = a.filter(function(n) {
            return b.indexOf(n) != -1;
        });

        return intersection && intersection.length > 0;
    }

    private _renderContent() {
        this._viewContainer.createEmbeddedView(this._template);
    }

    private _renderEmpty() {
        this._viewContainer.clear();
    }
}