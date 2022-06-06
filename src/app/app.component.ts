import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<div class="between">
        <div class="main">
            <h2>NPM Module: Toast notifications for Agroex.uz</h2>
            <app-form></app-form>
        </div>
    </div>`,
    styles: [
        `
            :host {
                .between {
                    display: flex;
                    justify-content: space-between;
                }
            }
        `,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
    @Input() public toastData: Object | undefined;

    public title = 'Loading...';
}
