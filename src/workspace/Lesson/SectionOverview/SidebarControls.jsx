import React from "react"
import styled, { css } from "styled-components"

import api from "~/utils/api"
import theme from "~/theme"

import { createSection } from "~/Contexts/section.actions"
import Flex from "~/components/Flex"
import { toggleSectionOverview } from "~/Contexts/view.actions"

const Wrapper = styled(Flex)`
    width: 100%;
    background-color: ${props => (props.expanded ? "#455B6A" : "transparent")};
    position: absolute;
    bottom: 0;
    left: 0;
`

const StyledIcon = styled.img`
    cursor: pointer;
    margin: 15px;
    width: 24px;
    height: 24px;
    flex-shrink: 0;
    transform: ${props => !props.expanded && "rotate(180deg)"};
    transition: 250ms all ease-in-out;
`


const AddWrapper = styled.div`
    height: 24px;
    background-color: #fff;
    width: 40px;
    height: 40px;
    border-radius: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    ${props =>
        props.visible
            ? css`
                  margin: 10px;
              `
            : css`
                  position: absolute;
                  top: 0;
                  left: 50%;
                  transform: translate(-50%, -50%);
              `}
`

const SidebarControls = ({ store, dispatch }) => {
    const {
        sections,
        view: {
            sectionOverviewExpanded: expanded,
            editing
        }
    } = store
    return (
        <Wrapper justifyEnd column={!expanded} alignCenter expanded={expanded}>
            {editing && (
                <AddWrapper visible={!expanded}>
                    <StyledIcon
                        onClick={() => {
                            dispatch(createSection(sections.length-1))
                        }}
                        style={{ width: 40, height: 40 }}
                        src={require("~/assets/plus-red-round.svg")}
                        redRound={!expanded}
                    />
                </AddWrapper>
            )}
            <StyledIcon
                src={
                    !expanded
                        ? require("~/assets/double-arrow-left-red.svg")
                        : require("~/assets/double-arrow-left-white.svg")
                }
                expanded={expanded}
                onClick={() => {
                    dispatch(toggleSectionOverview())
                }}
            />
        </Wrapper>
    )
}

export default SidebarControls
