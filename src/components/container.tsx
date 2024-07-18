import React from 'react';
import '../styles/container.scss';

export default function Container({ children }: { children: React.ReactNode }) {
  return <div id='container'>{children}</div>;
}
