import React from 'react';
import { render } from '@testing-library/react';
import ContactForm from './ContactForm';

test('text fields are being rendered', () => {
    const { getByLabelText } = render(<ContactForm />);
    // getByLabelText(/last Name/i);
    // getByLabelText(/last Name/i);
    // getByLabelText(/email/i);
    // getByLabelText(/message/i);
});