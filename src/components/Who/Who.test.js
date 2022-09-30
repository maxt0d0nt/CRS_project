import React from "react";
import { render, screen, getByRole } from '@testing-library/react';
import '@testing-library/jest-dom'

import { Who } from "./Who";

describe('render content', () => {
    test('aja', ()  => {
        render(< Who/>);
        const article = screen.getByRole('article', {name: 'test'});
        expect(article).toBeInTheDocument()
    });
    });

    
