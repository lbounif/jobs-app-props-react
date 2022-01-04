
import Job from './Job'
const JobsList = (props) => {
    return (
        <div className="jobs">
            {props.jobsArr.map((elm)=> (
                <Job job={elm} key={elm.id}/>
            ))}
        </div>
    )
}
export default JobsList