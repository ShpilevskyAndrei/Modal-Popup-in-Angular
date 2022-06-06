    In our project (agroex frontend project -> "dev" branch) was imlemented new npm module which responsible for showing toasts.

Toasts have a fixed position top(down 10 pixels) center.

    I. For correct npm module working do next steps:

0. For installing in other project: // !!! SKIP STEP for members of our team !!!
   npm i ngx-agroex-toast ( in IDE Terminal )
1. Fetch changes from "dev" branch
2. Check for module:
   in main folder "frontend-agroex"->package.json u will see follow string: "ngx-agroex-toast": "^1.0.3" (on date: 6.2.2022)
3. Then u must do: npm install ( in IDE terminal )

    II. How to use new npm module with toast notifications.

4. In "component" in which u want to use/show/call toast u must to declarative a toast service:

    import { AgroexToastService, ToastType } from 'ngx-agroex-toast';

5. In constructor of class "component" add AgroexToastService, for example "toastService":

    constructor(private toastService: AgroexToastService) {}

6. Then call method "addToast" of your "toastService" with some configurations>:

    this.toastService.addToast({

    toastType: ToastType.Error, // !REQUIRED // OPTIONS: ToastType.Error, ToastType.Warning, ToastType.Info, ToastType.Success, ToastType.System

    title: 'Some title', //!REQUIRED // OPTIONS: Any string

    message: 'Some message under title', //not required, default - line is missing // OPTIONS: Any string

    width: '408px', //not required, default width - 60vw // OPTIONS: Any string

    buttonText: 'Button Text', //not required, default - line is missing // OPTIONS: Any string // click => closing

    timeOut: 10000, //not required, default - 5000 // OPTIONS: Any number

    });

LINKS:

Npm package: https://www.npmjs.com/package/ngx-agroex-toast
Repo:https://github.com/ShpilevskyAndrei/Modal-Popup-in-Angular
