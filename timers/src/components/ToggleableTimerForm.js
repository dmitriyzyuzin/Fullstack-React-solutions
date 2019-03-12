import React from 'react';

class ToggleableTimerForm extends React.Component {
    render() {
        return (
            <div className='ui basic content center aligned segment'>
                <div className='ui basic button icon'>
                    <i
                        className='plus icon'
                        onClick={this.props.onCreateTimer}
                    />
                </div>
            </div>
        );
    }
}

export default ToggleableTimerForm;
