import React from 'react';
import TimerForm from "./TimerForm";
import Timer from "./Timer";

class EditableTimer extends React.Component {
    state = {
        openEditForm: true
    };

    closeForm = () => {
        this.setState({ openEditForm: false });
    };

    openForm = () => {
        this.setState({ openEditForm: true });
    };

    handleEditClick = () => {
        this.openForm();
    };

    handlRemoveClick = () => {
        alert('delete!');
    };

    render() {
        if (this.state.openEditForm) {
            return (
                <TimerForm
                    id={this.props.id}
                    title={this.props.title}
                    project={this.props.project}
                />
            );
        }

        return (
            <Timer
                id={this.props.id}
                title={this.props.title}
                project={this.props.project}
                elapsed={this.props.elapsed}
                runningSince={this.props.runningSince}
                onEditIconClick={this.handleEditClick}
                onRemoveIconClick={this.handlRemoveClick}
            />
        );
    }
}

export default EditableTimer;
