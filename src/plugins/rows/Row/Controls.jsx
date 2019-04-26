import React, { useState, useEffect } from "react"
import styled, { css } from "styled-components"

const StyledControls = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    transform: translateX(calc(100% + 3px));
    width: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 0 3px 3px 0;
    opacity: 0;
    z-index: ${props => 100 - props.index};
    transition: 250ms all ease-in-out;
`

const StyledIcon = styled.img`
    width: 25px;
    margin-bottom: 15px;

    ${props =>
        props.disabled
            ? css`
                  opacity: 0.2;
                  cursor: not-allowed;
              `
            : css`
                  cursor: pointer;
                  opacity: 0.8;
              `}

    &:hover {
        opacity: ${props => !props.disabled && 1};
    }
`

const MoveUp = ({ rows, index, row, ...props }) => (
    <StyledIcon
        disabled={index === 0}
        src={require("../assets/angle-up.svg")}
        onClick={() => {
            if (index === 0) return
            rows.move(index, index - 1)
        }}
    />
)

const MoveDown = ({ rows, index, row, ...props }) => (
    <StyledIcon
        disabled={index + 1 >= rows.items.length}
        src={require("../assets/angle-down.svg")}
        onClick={() => {
            index + 1 < rows.items.length && rows.move(index, index + 1)
        }}
    />
)

const Controls = ({ index, rows, row, hover, duplicateRow }) => {
    return (
        <StyledControls index={index} className="row-controls">
            <MoveUp rows={rows} index={index} row={row} />
            <MoveDown rows={rows} index={index} row={row} />
        </StyledControls>
    )
}

export default Controls