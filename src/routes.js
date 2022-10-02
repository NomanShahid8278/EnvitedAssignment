import LandingPage from "./Components/LandingPage";
import Event from "./Components/Event";

export const Routes = [
  {
    path: "/",
    component: LandingPage,
    key: 1,
  },
  {
    path: "/event",
    component: Event,
    key: 2,
  },
];
