import React from 'react';
import {renderElapsedString} from '../utils/helpers';

class Timer extends React.Component {
    render() {
        const elapsedString = renderElapsedString(
            this.props.elapsed, this.props.runningSince
        );
        return (
            <div className='ui centered card'>
                <div className='content'>
                    <div className='header'>
                        {this.props.title}
                    </div>
                    <div className='meta'>
                        {this.props.project}
                    </div>
                    <div className='center aligned description'>
                        <h2>{elapsedString}</h2>
                    </div>
                    <div className='extra content'>
                        <span
                            className='right floated edit icon'
                            onClick={this.props.onEditIconClick}
                        >
                            <i className='edit icon' />
                        </span>

                        <span
                            className='right floated trash icon'
                            onClick={this.props.onRemoveIconClick}
                        >
                            <i className='trash icon' />
                        </span>
                    </div>
                </div>
                <button className='ui bottom attached green basic button'>Start</button>
            </div>
        );
    }
}

export default Timer;
