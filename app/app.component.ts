import { Component } from '@angular/core';
import { IfRole } from './if-role.directive';

@Component({
    selector: 'my-app',
    directives: [IfRole],
    template: `
<h1>My First Angular 2 App</h1>
<div *ifRole="['admin']">
    Admin stuff
</div>
`,
})
export class AppComponent {}
