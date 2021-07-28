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
      <div className="row">
        <div className="col-lg12">  
        <form>
    <div className="form-group mt-4">
    
    <select name="feeType" value={feeType} className="form-control" id="exampleFormControlSelect1" onChange={e=>setForm({...form, [e.target.name]:e.target.value})}  required>
    <option value="" selected disabled hidden> Select fee type</option>
    {
      Object.keys(fee_structure).map((item)=>(<option>{item}</option>))
    }
    </select>
    
    
    
    
    </div>
    
    {feeType && ( <Fragment>
      <div className="form-group mt-4">
      
      
      <select name="nationality" value={nationality} className="form-control" id="exampleFormControlSelect1" onChange={e=>setForm({...form, [e.target.name]:e.target.value})} >
      <option value="" selected disabled hidden> Select nationality</option>
      {
        Object.keys(fee_structure[feeType]).map((item)=>(<option>{item}</option>))
      }
      </select>
      </div>
      
        {nationality && 
              (<Fragment>
                <div className="form-group mt-4">
             
              <select name="courses" value={courses} className="form-control" id="exampleFormControlSelect1" onChange={e=>setForm({...form, [e.target.name]:e.target.value})} >
              <option value="" selected disabled hidden> Select courses</option>
              <option >Medical</option>
              <option >Dental</option>
              <option >Ayurveda</option>
              </select>
              
              
              
              
              </div>
              {courses && 
                    (<div className="form-group mt-4">
                        
                       
                        <select name="levels" value={levels} className="form-control" id="exampleFormControlSelect1" onChange={(e)=>setForm({...form, [e.target.name]:e.target.value, amount:feeType==="Exam Fee"? fee_structure[feeType][nationality]["ALL_COURSES"]["ALL_LEVEL"]["amount"]:fee_structure[feeType][nationality]["ALL_COURSES"][e.target.value]["amount"]})}  >
                        <option value="" selected disabled hidden>Select Levels</option>
                        {
                          feeType==="Application Fee" && nationality && courses?(
                            Object.keys(fee_structure[feeType][nationality]["ALL_COURSES"]).map((item)=>(<option>{item}</option>))
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
          )}
          
          
          
          </form>
          
          <div className="col-lg-12 mt-3">
            {amount && ( <h1>The total fee amount is:{amount}</h1>)}
         
          
          </div>
        </div>
      </div>
    
          
          </div>
          );
        }
        
        export default App;
        