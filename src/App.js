import { Fragment, useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  const fee_structure={
    "Exam Fee":{
      "INDIAN":{
        "ALL_COURSES":{
          "ALL_LEVEL":{
            "amount":400
          }
        }
      },
      "FOREIGN":{
        "ALL_COURSES":{
          "ALL_LEVEL":{
            "amount":100
          }
        }
      },
      "NRI":{
        "ALL_COURSES":{
          "ALL_LEVEL":{
            "amount":600
          }
        }
      },
      "SAARC":{
        "ALL_COURSES":{
          "ALL_LEVEL":{
            "amount":600
          }
        }
      }
    },
    "Application Fee":{
      "INDIAN":{
        "ALL_COURSES":{
          "UG":{
            "amount":200
          },
          "UG-DIPLOMA":{
            "amount":300
          },
          "PG":{
            "amount":500
          }
        }
      },
      "FOREIGN":{
        "ALL_COURSES":{
          "UG":{
            "amount":400
          },
          "UG-DIPLOMA":{
            "amount":400
          },
          "PG":{
            "amount":700
          }
        }
      }
    }
  }
  const [form, setForm] = useState({
    feeType:'',
    nationality:'',
    courses:'',
    levels:'',
    amount:null
    
    
    
  })    
  
  
  
  const {feeType, nationality, courses, levels,amount}= form;
  
  return (
    <div className="container">
    <form>
    <div className="form-group">
    <label >Select the Type of Fee</label>
    <select name="feeType" value={feeType} className="form-control" id="exampleFormControlSelect1" onChange={e=>setForm({...form, [e.target.name]:e.target.value})} >
    
    {
      Object.keys(fee_structure).map((item)=>(<option>{item}</option>))
    }
    </select>
    
    
    
    
    </div>
    
    {feeType?( <Fragment>
      <div className="form-group">
      
      <label >Select Your Nationality</label>
      <select name="nationality" value={nationality} className="form-control" id="exampleFormControlSelect1" onChange={e=>setForm({...form, [e.target.name]:e.target.value})} >
      
      {
        Object.keys(fee_structure[feeType]).map((item)=>(<option>{item}</option>))
      }
      </select>
      </div>
      
        {nationality && 
              (<Fragment>
                <div className="form-group">
              <label >Select course</label>
              <select name="courses" value={courses} className="form-control" id="exampleFormControlSelect1" onChange={e=>setForm({...form, [e.target.name]:'ALL_COURSES'})} >
              
              <option>Medical</option>
              <option>Dental</option>
              <option>Ayurveda</option>
              </select>
              
              
              
              
              </div>
              {courses && 
                    (<div className="form-group">
                        <label >Select Level</label>
                        <select name="levels" value={levels} className="form-control" id="exampleFormControlSelect1" onChange={(e)=>setForm({...form, [e.target.name]:e.target.value, amount:feeType==="Exam Fee"? fee_structure[feeType][nationality][courses]["ALL_LEVEL"]["amount"]:fee_structure[feeType][nationality][courses][e.target.value]["amount"]})}  >
                        {
                          feeType==="Application Fee" && nationality && courses?(
                            Object.keys(fee_structure[feeType][nationality][courses]).map((item)=>(<option>{item}</option>))
                            ):(<Fragment><option>UG</option>
                              <option>PG</option>
                              <option>DIPLOMA</option>
                              <option>Ph.D</option></Fragment>)
                            }
                            
                            </select>
                        </div>

                    )
              }
              
              
                </Fragment>
              )
        }
      
     
          </Fragment>
          ):(<p>Please select Fee type</p>)}
          
          
          
          </form>
          
          <div>
          <p>The total fee amount is:{amount}</p>
          
          </div>
          
          </div>
          );
        }
        
        export default App;
        