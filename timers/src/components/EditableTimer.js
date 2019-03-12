import React from 'react';
import TimerForm from "./TimerForm";
import Timer from "./Timer";

class EditableTimer extends React.Component {
    state = {
        openEditForm: false
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

    handleFormClose = () => {
        this.closeForm();
    };

    handleRemoveClick = () => {
        this.props.onThrashIconClick(this.props.id);
    };

    handleFormSubmit = timerAttrs => {
        this.props.onFormSubmit(timerAttrs);
        this.closeForm();
    };

    render() {
        if (this.state.openEditForm) {
            return (
                <TimerForm
                    id={this.props.id}
                    title={this.props.title}
                    project={this.props.project}
                    onFormClose={this.handleFormClose}
                    onFormSubmit={this.handleFormSubmit}
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
                onRemoveIconClick={this.handleRemoveClick}
            />
        );
    }
}

export default EditableTimer;
