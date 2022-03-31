import React from 'react';

// this interface is defined so that TypeScript can recognize the ion icon
interface IonIcon
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  name: string;
}

// eslint-disable-next-line prettier/prettier
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'ion-icon': IonIcon;
    }
  }
  interface Window {
    analytics: any
  }
}
