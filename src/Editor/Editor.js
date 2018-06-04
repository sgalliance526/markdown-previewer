import React, { Component } from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';
import Preview from '../Preview/Preview';
import './editor.css';

class Editor extends Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {textarea: '# Marked in the browser\n\nRendered by **marked**.', placeholder: '# Marked in the browser\n\nRendered by **marked**.'};
    }

    handleChange(e){
        if(e.target.value === '')
            this.setState({textarea: this.state.placeholder});
        else
            this.setState({textarea: e.target.value});
    }

    render() {
        return (
            <div className="editor">
                <FormGroup controlId="formControlsTextarea">
                    <FormControl componentClass="textarea" placeholder={this.state.textarea} onChange={this.handleChange}/>
                </FormGroup>

                <Preview textarea={this.state.textarea || this.state.placeholder}/>
            </div>
        );
    };
}

export default Editor;