import { Page2 } from "../Page2";
import { UrlParameter } from "../UrlParameter";

export const Page2Routes = [
  {
    path: "/",
    exaxt: true,
    children: <Page2 />
  },
  {
    path: "/:id",
    exaxt: false,
    children: <UrlParameter />
  }
];
