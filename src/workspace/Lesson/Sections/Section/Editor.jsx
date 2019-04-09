import React, { useContext, useEffect } from "react"
import {
    createDocument,
    Editor as Edtr,
    EditorContext,
    serializeDocument,
    StateType,
} from "@edtr-io/core"
import { rowsPlugin } from "@edtr-io/plugin-rows"
import { anchorPlugin } from "@edtr-io/plugin-anchor"
import { blockquotePlugin } from "@edtr-io/plugin-blockquote"
// import { highlightPlugin } from "@edtr-io/plugin-highlight"
import { spoilerPlugin } from "@edtr-io/plugin-spoiler"
import { textPlugin } from "@edtr-io/plugin-text"
import { scMcExercisePlugin } from "@edtr-io/plugin-sc-mc-exercise"
import { equationsPlugin } from "@edtr-io/plugin-equations"
import { geogebraPlugin } from "@edtr-io/plugin-geogebra"
import { videoPlugin } from "@edtr-io/plugin-video"
import { inputExercisePlugin } from "@edtr-io/plugin-input-exercise"
// import { h5pPlugin } from "@edtr-io/plugin-h5p"

import nexboardPlugin from "~/plugins/nexboard"
import etherpadPlugin from "~/plugins/etherpad"

const counterState = StateType.number(0)

const counterPlugin = {
    // eslint-disable-next-line react/display-name
    Component: ({ focused, state }) => {
        return (
            <div>
                {state.value}
                <button
                    onClick={() => {
                        state.set(value => value + 1)
                    }}>
                    +
                </button>
            </div>
        )
    },
    state: counterState,
}

const plugins = {
    rows: rowsPlugin,
    anchor: anchorPlugin,
    counter: counterPlugin,
    blockquote: blockquotePlugin,
    etherpad: etherpadPlugin,
    nexboard: nexboardPlugin,
    singleMultipleChoice: scMcExercisePlugin,
    // highlight: highlightPlugin,
    spoiler: spoilerPlugin,
    text: textPlugin,
    equations: equationsPlugin,
    geogebra: geogebraPlugin,
    inputExercise: inputExercisePlugin,
    video: videoPlugin,
    // h5p: h5pPlugin,
}

export default class Editor extends React.Component {
    constructor(props) {
        super(props)
        this.docValue = this.props.docValue
            ? this.props.docValue
            : {
                  plugin: "rows",
              }
    }

    render() {
        return (
            <div
                style={{
                    minHeight: "50px",
                }}>
                <Edtr
                    plugins={plugins}
                    defaultPlugin={"text"}
                    editable={this.props.editing}
                    initialState={this.docValue}>
                    <ChangeListener
                        dispatchChange={this.props.dispatchChange}
                    />
                </Edtr>
            </div>
        )
    }
}

function ChangeListener({ dispatchChange }) {
    const store = useContext(EditorContext)
    useEffect(() => {
        dispatchChange(function() {
            return serializeDocument(store.state)
        })
    }, [store.state])
    return null
}