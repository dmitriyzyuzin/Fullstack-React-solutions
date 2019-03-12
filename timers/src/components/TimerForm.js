import React from 'react';

class TimerForm extends React.Component {
    state = {
        title: this.props.title || '',
        project: this.props.project || '',
    };

    handleTitleChange = e => {
        this.setState({ title: e.target.value });
    };

    handleProjectChange = e => {
        this.setState({ project: e.target.value });
    };

    handleSubmitForm = () => {
        this.props.onFormSubmit({
            id: this.props.id,
            title: this.state.title,
            project: this.state.project
        });
    };

    render() {
        return (
            <div className='ui centered card'>
                <div className='content'>
                    <div className='ui form'>
                        <div className='field'>
                            <label>Title</label>
                            <input
                                type='text'
                                name='title'
                                defaultValue={this.state.title}
                                onChange={this.handleTitleChange}
                            />
                        </div>
                        <div className='field'>
                          <label>Project</label>
                          <input
                              type='text'
                              name='project'
                              defaultValue={this.state.project}
                              onChange={this.handleProjectChange}
                          />
                        </div>
                        <div className='ui two bottom attached buttons'>
                            <button
                                className='ui basic blue button'
                                onClick={this.handleSubmitForm}
                            >
                                Update
                            </button>
                            <button
                                className='ui basic red button'
                                onClick={this.props.onFormClose}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TimerForm;
