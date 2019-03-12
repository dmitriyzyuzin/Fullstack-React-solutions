import React from 'react';

class TimerForm extends React.Component {
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
                                defaultValue={this.props.title}
                            />
                        </div>
                        <div className='field'>
                          <label>Project</label>
                          <input
                              type='text'
                              name='project'
                              defaultValue={this.props.project}
                          />
                        </div>
                        <div className='ui two bottom attached buttons'>
                            <button className='ui basic blue button'>
                                Update
                            </button>
                            <button className='ui basic red button'>
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
