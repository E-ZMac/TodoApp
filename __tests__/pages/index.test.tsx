import * as React from 'react'
import { cleanup, fireEvent, render } from '@testing-library/react'
import Home from '../../src/pages/index'


const axios = {
    get: jest.fn()
}

afterEach(cleanup)

describe('Home Page', () => {
    const { getByText } = render(<Home />)
    const { getByRole } = render(<Home />)

    it('renders home page', async () => {
        
        // axios.get()
        expect(getByText(/things to do/i)).toBeInTheDocument()
    })

    it('has an add button', async () => {
        expect(getByRole('button'))
    })
})