import { styled } from "baseui";

export const FlexColumn = styled('div', ({$theme}) => ({
    display: 'flex',
    flexDirection: 'column',
}))

export const FlexRow = styled('div', ({$theme}) => ({
    display: 'flex',
    flexDirection: 'row'
}))