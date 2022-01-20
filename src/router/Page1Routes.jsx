import { Page1 } from "../Page1";
import { Page1DetailA } from "../Page1DetailA";
import { Page1DetailB } from "../Page1DetailB";

export const Page1Routes = [
  {
    path: "/",
    exaxt: true,
    children: <Page1 />
  },
  {
    path: "/detailA",
    exaxt: false,
    children: <Page1DetailA />
  },
  {
    path: "/detailB",
    exaxt: false,
    children: <Page1DetailB />
  }
];
