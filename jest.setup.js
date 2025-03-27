import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';


global.render = render;
global.fireEvent = fireEvent;
global.waitFor = waitFor;
