// components/molecules/StarRating/index.spec.tsx

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ThemeProvider } from 'styled-components'
import { theme } from 'themes'
import { StarRating1 } from './index'

describe('StarRating1', () => {
  it('クリックで setValue が呼ばれる', async () => {
    const mockSetValue = jest.fn()

    render(
      <ThemeProvider theme={theme}>
        <StarRating1 value={3} setValue={mockSetValue} />
      </ThemeProvider>
    )

    const stars = screen.getAllByTestId('star')
    expect(stars.length).toBe(7)

    await userEvent.click(stars[0]) // index 0 → value: 1

    expect(mockSetValue).toHaveBeenCalledWith(1)
  })
})