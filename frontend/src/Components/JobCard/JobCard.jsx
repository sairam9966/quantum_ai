import React from 'react'
import './styles.css'
export default function JobCard() {
    const name = 'kesava'
    const position = 'web dev'
    const Age = 19
    return (
        <div>
            <div>
                <div className="jobCard">
                    <p className='jobTitle'>Senior Product Engineer</p>
                    <p id='candidates'>Candidates:</p>
                    <div className='jobPeople'>
                        <div className='jobPeopleInnerDiv'>
                            <p className='jobCardinnerHeads'>Total</p>
                            <p className='jobCardinnerHeadsNum'>20</p>
                        </div>
                        <div className='jobPeopleInnerDiv'>
                            <p className='jobCardinnerHeads'>New</p>
                            <p className='jobCardinnerHeadsNum'>5</p>
                        </div>
                    </div>
                    <div className='postjobDiv'>
                        <p className='jobPostApps'>Applications</p>
                        <p className='postjob'>Post Job{">>"}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
