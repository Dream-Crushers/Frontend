import React, { Component } from 'react';

class Meal extends Component {
  constructor(){
    super();
    this.state = {
    activity:''
    }
  }

  getCalories(){
    const calory=this.props.activeMeal.calories;
    const football = Math.floor(calory/8);
    const basketball = Math.floor(calory/7);
    const running = Math.floor(calory/6);
    const aerobics = Math.floor(calory/5);
   

    return(
    <div className="activities">
    <div><img src="http://filegenie.net/animated_gifs/football/sccrkick.gif" alt="" width="100px" height="100px"/>
     <h4>{football} minutes </h4></div> 
     <div> <img src="https://media.giphy.com/media/PM90Xchd6AMi4/giphy.gif" alt="" width="100px" height="100px"/>
    <h4>{basketball} minutes</h4></div> 
    <div><img src="https://thumbs.gfycat.com/ClumsyBogusHamadryad-size_restricted.gif" width="100px" height="100px" alt=""/>
    <h4>{running} minutes</h4></div> 
     <div><img src="http://www.stthomasschool.org/uploaded/hallmarks/Learning_environment_icons/Exercise.gif" width="100px" height="100px" alt=""/>
    <h4>{aerobics} minutes</h4></div> 
 </div>
    )

  }

  render(){
    return(
    <div>
      <div
        className="back"
        onClick={() => {this.props.setCurrentMeal(null);
        }} >
        back
      </div>
      <div className="modal">
      <div className="close-modal" onClick={()=>{this.props.setCurrentMeal(null)}}>x</div>
      

        <div className="search-result">

          <div>
          <br/><br/>
          
            <img src={this.props.activeMeal.img} alt="" />
            <h2>Meal:{this.props.activeMeal.name}</h2>
            <div id="nutritionfacts">
        <table width="242" cellSpacing="0" cellPadding="0">
            <tbody><tr>
                <td align="center" className="header">Nutrition Facts</td>
            </tr>
            <tr>
                <td><div className="serving">Per Serving Size</div></td>
            </tr>
            <tr height="7px">
                <td bgcolor="#000000"></td>
            </tr>
            <tr>
                <td align="right" ><div className="line">Amount Per Serving</div></td>
            </tr>
            <tr>
                <td>
                    <div className="line">
                    <div className="label">Calories <div className="weight">{this.props.activeMeal.calories}</div></div><div padding-top="1px"  float= "right" className="labellight">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  Calories from Fat <div className="weight" float="right">56</div></div>
                    </div>
                </td>
            </tr>
            <tr>
                <td><div className="line"><div className="dvlabel">% Daily Value</div></div></td>
            </tr>
            <tr>
                <td>
                    <div className="line">
                    <div className="label">Total Fat <div className="weight">{this.props.activeMeal.fat}</div></div>

                    </div>
                </td>
            </tr>

                        <tr>
                <td>
                    <div className="line">
                    <div className="label">Cholesterol <div className="weight">{this.props.activeMeal.cholesterol}</div></div>
                    {/* <div className="dv">7%</div> */}
                    </div>
                </td>
            </tr>
                        <tr>
                <td>
                    <div className="line">
                    <div className="label">Sodium <div className="weight">{this.props.activeMeal.sodium}</div></div>
                    {/* <div class="dv">26%</div> */}
                    </div>
                </td>
            </tr>
                        <tr>
                <td>
                    <div className="line">
                    <div className="label">Total Carbohydrates <div className="weight">{this.props.activeMeal.carbohydrate}</div></div>
                    {/* <div className="dv">11%</div> */}
                    </div>
                </td>
            </tr>
                        <tr>
                <td className="indent">
                    <div className="line">
                    <div className="labellight">Dietary Fiber <div className="weight">5.2g</div></div>
                    <div className="dv">21%</div>
                </div></td>
            </tr>
                        <tr>
                <td className="indent">
                    <div className="line">
                    <div className="labellight">Sugars <div className="weight">3.3g</div></div>
                    </div>
                </td>
            </tr>
                        <tr>
                <td>
                    <div className="line">
                    <div className="label">Protein <div className="weight">{this.props.activeMeal.protein}</div>
                    </div>
                </div></td>
            </tr>
            <tr height="7px">
                <td bgcolor="#000000"></td>
            </tr>
                        <tr>
                <td>
                    <table cellSpacing="0" cellPadding="0" border="0" className="vitamins">
                    <tbody>
                    <tr>
                        <td >Vitamin A &nbsp;&nbsp; {this.props.activeMeal.vitamin_a}</td>
                    </tr>
                    <tr>
                        <td>Vitamin C &nbsp;&nbsp; {this.props.activeMeal.vitamin_c}</td>
                    </tr>
                    <tr>
                        <td>Iron &nbsp;&nbsp; {this.props.activeMeal.iron}</td>
                    </tr>
                    </tbody></table>
                </td>
            </tr>
                       
        </tbody></table>
    </div>

            {/* <h4>Calories:{this.props.activeMeal.calories} </h4>
            <h6>Fat:{this.props.activeMeal.fat}</h6>
            <h6>Protein:{this.props.activeMeal.protein}</h6> */}
            {/* <h6>Carb:{this.props.activeMeal.carbohydrate}</h6> */}
            {/* <h6>Sodium:{this.props.activeMeal.sodium}</h6> */}
            {/* <h6>Cholesterol:{this.props.activeMeal.cholesterol}</h6> */}
            {/* <h6>Vitamin A:{this.props.activeMeal.vitamin_a}</h6>
            <h6> Vitamin C:{this.props.activeMeal.vitamin_c}</h6> */}
            {/* <h6>Calcium:{this.props.activeMeal.calcium}</h6>
            <h6> Iron:{this.props.activeMeal.iron}</h6> */}
          </div>
          <div>

        <h3>Activity</h3>
        {this.getCalories()}
          </div>
        </div>
      </div>
    </div>
  )}
};

export default Meal;