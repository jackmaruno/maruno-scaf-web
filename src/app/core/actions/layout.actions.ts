import { Action } from '@ngrx/store';

export enum LayoutActionTypes {
  OpenSidenav = '[Sidenav] Open Sidenav',
  CloseSidenav = '[Sidenav] Close Sidenav',
  OpenNavbar = '[Navbar] Open Navbar',
  CloseNavbar = '[Navbar] Close Navbar',
}

export class OpenSidenav implements Action {
  readonly type = LayoutActionTypes.OpenSidenav;
}

export class CloseSidenav implements Action {
  readonly type = LayoutActionTypes.CloseSidenav;
}

export type LayoutActionsUnion = OpenSidenav | CloseSidenav;
