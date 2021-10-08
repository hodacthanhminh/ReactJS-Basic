import React, { Component } from 'react'

export default class ChildComponents extends Component {

    state = {
        showJobs: false
    };

    handleButtonClick = () => {
        this.setState({
            showJobs: !this.state.showJobs
        });
    }

    render() {

        let { arrJobs } = this.props;
        let { showJobs } = this.state;

        return (
            <>
                {!showJobs ?
                    <div>
                        <button className="btn-show" onClick={() => this.handleButtonClick()}>Show</button>
                    </div>
                    :
                    <>
                        <div className="job-lists">
                            {
                                arrJobs.map((item, index) => {
                                    return (
                                        <div key={item.id} className="job-item">
                                            {item.title} - {item.salary}$
                                            <button className="delete-job" onClick={() => this.props.deleteJob(item)}> Delete </button>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div>
                            <button onClick={() => this.handleButtonClick()}>Hide</button>
                        </div>
                    </>
                }
            </>
        )
    }
}

// const ChildComponents = (props) => { 

//     console.log('>>>check child props:',props)

//     let {name , age , address, arrJobs} = props;

//     return (
//         <>
//             <div className="job-lists">
//                 {
//                     arrJobs.map((item, index) => {
//                         return (
//                             <div key={item.id} className="job-item">
//                                 {item.title} - {item.salary}$
//                             </div>
//                         )
//                     })
//                 }
//             </div>
//         </>
//     )
// }


// export default ChildComponents;


