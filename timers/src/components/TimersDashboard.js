import React from 'react';
import EditableTimerList from './EditableTimerList';
import ToggleableTimerForm from './ToggleableTimerForm';

class TimersDashboard extends React.Component {
    state = {
        timers: [
            {
                "title": "Mow the lawn",
                "project": "House Chores",
                "elapsed": 5460551,
                "id": "0a4a79cb-b06d-4cb1-883d-549a1e3b66d7",
                "runningSince": null
            },
            {
                "title": "Clear paper jam",
                "project": "Office Chores",
                "elapsed": 1273998,
                "id": "a73c1d19-f32d-4aff-b470-cea4e792406a"
            }
        ]
    };

    handleFormSubmit = timerAttrs => {
        this.updateTimer(timerAttrs);
    };

    updateTimer = timerAttrs => {
        this.setState({
            timers: this.state.timers.map(timer => {
                if (timer.id === timerAttrs.id) {
                    return Object.assign({}, timer, {
                        title: timerAttrs.title,
                        project: timerAttrs.project
                    });
                }
                return timer;
            })
        });
    };

    render() {
        return (
            <div className='ui three column centered grid'>
                <div className='column'>
                    <EditableTimerList
                        timers={this.state.timers}
                        onFormSubmit={this.handleFormSubmit}
                    />
                    <ToggleableTimerForm />
                </div>
            </div>
        );
    }
}

export default TimersDashboard;
