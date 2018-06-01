import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import marked from 'marked';

class Preview extends Component {
    render() {
        return(
            <Panel>
                <Panel.Body dangerouslySetInnerHTML={{__html: marked(this.props.textarea)}}/>
            </Panel>
        );
    };
}

export default Preview;