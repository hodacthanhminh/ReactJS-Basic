import React from 'react';

class MyComponent extends React.Component {

    state = {
        name: 'Thanh Minh',
        channel: 'Hoi dan it'
    };
    
    
    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value,
        });
    }

    render () {



        return (
            <>
                <div className='first'>
                    <input type='text' value={this.state.name}
                        onChange={(event) => this.handleOnChangeName(event)} 
                    />
                    Hello my name is {this.state.name}
                </div>
                <div> 
                    My youtube channel is {this.state.channel}
                </div>
            </> 
        )
    }
}

export default MyComponent;