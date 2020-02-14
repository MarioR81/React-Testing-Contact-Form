import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ContactForm from './ContactForm';

// test('text fields are being rendered', () => {
//     const { getByLabelText } = render(<ContactForm />);
//     getByLabelText(/last Name/i);
//     getByLabelText(/last Name/i);
//     getByLabelText(/email/i);
//     getByLabelText(/message/i);
// });

test('form submit is working ', () => {
    const { getByLabelText } = render(<ContactForm />);
        const firstNameImput = getByLabelText(/firstName/i);
        const lastNameImput = getByLabelText(/lastName/i);
        const emailImput = getByLabelText(/email/i);
        const messageImput = getByLabelText(/message/i);

        fireEvent.change(firstNameImput, {target: {value: 'abc'}})
        fireEvent.change(lastNameImput, {target: {value: 'last'}})
        fireEvent.change(emailImput, {target: {value: 'test@email.com'}})
        fireEvent.change(messageImput, {target: {value: 'test message'}})

        expect(firstNameImput.value).toBe.('abc');
});