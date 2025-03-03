import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';


global.render = render;
global.screen = screen;
