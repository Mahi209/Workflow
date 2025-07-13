
import Navbar from "./Navbar";
import Calender from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import '../css/Dashboard.css'

function Dashboard(){
    return <div id="Outer">
        <div>
        <Navbar/>
       </div>
        <div id="Dashboard">
            <div id="row-one">
                <div className="card">
                    <div className="card-part1">
                        <p className="data-header">Total employees</p>
                        <h1 className="data">142</h1>
                        <div className="data-footer">
                             <img src="/images/arrow-up.svg" alt="Arrow-up" className="arrow"></img>
                            <p className="msgs" style={{color:"#1DB763"}}>12% from last month</p>
                        </div>
                    </div>
                    <div className="card-part2">
                        <img src="/images/users.svg" alt="image1" className="imgs"/>
                    </div>
                </div>
                 <div className="card">
                    <div className="card-part1">
                        <p className="data-header">Active Test</p>
                        <h1 className="data">81</h1>
                        <div className="data-footer">
                            <img src="/images/arrow-down.svg" alt="Arrow-down" className="arrow"></img>
                            <p className="msgs" style={{color:"#A40015"}}>3% from last week</p>
                        </div>
                    </div>
                    <div className="card-part2">
                        <img src="/images/task.svg" alt="image2" className="imgs"/>
                    </div>
                </div>
                 <div className="card">
                    <div className="card-part1">
                        <p className="data-header">Interns</p>
                        <h1 className="data">24</h1>
                        <div className="data-footer">
                             <img src="/images/arrow-up.svg" alt="Arrow-up" className="arrow"></img>
                            <p className="msgs"  style={{color:"#1DB763"}}>5% from last Week</p>
                        </div>
                    </div>
                    <div className="card-part2">
                        <img src="/images/intern.svg" alt="image3" className="imgs"/>
                    </div>
                </div>
            </div>
            {/* Row one end */}
            <div id="row-two">
                <div id="employee-activity-card">
                    <div id="activity-1">
                        <p id="emp-act">Employee activity</p>
                        <p id="quaterly">quaterly</p>
                    </div>
                    <div id="months-container">
                        <div id="months">
                            <div className="month-bar" style={{height:"111px"}}></div>
                            <p className="month">Jan</p>
                        </div>
                      <div id="months">
                            <div className="month-bar" style={{height:"142px"}}></div>
                            <p className="month" >feb</p>
                        </div> <div id="months">
                            <div className="month-bar" style={{height:"176px"}}></div>
                            <p className="month"  >march</p>
                        </div> <div id="months">
                            <div className="month-bar"  style={{height:"131px"}}></div>
                            <p className="month">april</p>
                        </div> <div id="months">
                            <div className="month-bar"  style={{height:"94px"}}></div>
                            <p className="month">may</p>
                        </div> <div id="months">
                            <div className="month-bar"  style={{height:"131px"}}></div>
                            <p className="month">June</p>
                        </div> <div id="months">
                            <div className="month-bar"  style={{height:"142px"}}></div>
                            <p className="month">July</p>
                        </div> <div id="months">
                            <div className="month-bar"  style={{height:"207px",backgroundColor:"#5932EA"}}></div>
                            <p className="month">aug</p>
                        </div> <div id="months">
                            <div className="month-bar"  style={{height:"181px"}}></div>
                            <p className="month">sept</p>
                        </div> <div id="months">
                            <div className="month-bar"  style={{height:"152px"}}></div>
                            <p className="month">oct</p>
                        </div> <div id="months">
                            <div className="month-bar"  style={{height:"111px"}}></div>
                            <p className="month">nov</p>
                        </div> <div id="months">
                            <div className="month-bar"  style={{height:"162px"}}></div>
                            <p className="month">dec</p>
                        </div>
                    </div>
                </div>
                <div id="attendence-card">
                    <h1 id="Atnd-text">Attendence Overview</h1>
                    <Calender className="react-calendar"></Calender>
                </div>
            </div>
        </div>
    </div>

}
export default Dashboard;