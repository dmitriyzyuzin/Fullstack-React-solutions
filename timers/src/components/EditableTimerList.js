import React from 'react';
import EditableTimer from './EditableTimer';

class EditableTimerList extends React.Component {
    render() {
        const timers = this.props.timers.map(timer => (
            <EditableTimer
                id={timer.id}
                title={timer.title}
                project={timer.project}
                elapsed={timer.elapsed}
                runningSince={timer.runningSince}
            />
        ));
        return (
            <div>
                {timers}
            </div>
        );
    }
}

export default EditableTimerList;
