import React, { useContext } from "react"
import styled, { css } from "styled-components"
import LessonContext from "~/Contexts/Lesson"

const StyledContainer = styled.div`
    padding: 25px calc((100vw - 995px) / 2);
    ${props =>
        !props.isFullScreen &&
        css`
            padding: 25px calc((100vw - 995px - 239px) / 2);
        `}

    @media (max-width: 1035px) {
        padding: 25px 20px;
    }

    @media (max-width: 640px) {
        padding: 20px 14px;
    }

    @media (max-width: 480px) {
        padding: 15px 10px;
    }

    ${props =>
        props.small &&
        css`
            padding: 15px;
        `}

    ${props =>
        props.full &&
        css`
            padding-left: 0;
            padding-right: 0;
        `}
    ${props =>
        props.fullVertical &&
        css`
            padding-top: 0;
            padding-bottom: 0;
        `};
`

const Container = props => {
    const { store } = useContext(LessonContext)
    return <StyledContainer isFullScreen={store.isFullScreen} {...props} />
}

export default Container