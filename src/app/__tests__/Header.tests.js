import {render, screen} from '@testing-library/react'
import Header from '../components/Header';

describe('Page', () => {
    it('renders a heading', () => {
        render(<Header/>)

        const link = screen.getByRole('link', {name: /register/i});

        expect(link).toBeInTheDocument()
    })
})