import React from 'react';




export interface ISurveyBuildProps {
  //   user: IUserState,
  //   surveyTitle: string,
  //   type: string,
  //   errorMessage: string,
  //   newSurvey: {},
  //   handleSubmit(newSurvey: {}, userId: number): void
}


export class Question7 extends React.Component<ISurveyBuildProps, any> {
  constructor(props) {
    super(props);


  }


  //   handleChange = (event) => { 

  //   }

 


  render() {

    return (

      <div>


        <button value="7" id="tf" className="form-control" name="type"  > True/False  </button>
           <div className="new" id="t7">

            <input name="questionText" type="text" placeholder="Question Title (i.e. The sky is blue) " style={{ width: '100%' }}   ></input>
            <input name="answerText" value="True,False" readOnly hidden />
          </div>
 
          <hr/>
      </div>

    );
  }
}


export default Question7;