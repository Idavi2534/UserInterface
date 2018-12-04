import * as React from 'react';

export class HomeComponent extends React.Component {
  // testing values here
  constructor(props) {
    super(props);
    this.state = {
      testfield1: 'test',
      testfield2: 'test',
      testfield3: 'test',
      testfield4: 'test'
    };
  }
  // end test values


  public render() {
    return (
      <div>
        home
        {/* Testing goes here only remove before final commit */}
        {/* here users will input their whatevers for dah chicken */}
        <div className="row" id="checkinheader">
          <h4 className="col-sm">Check In</h4>
          <h6 className="col-sm">Current Time Here</h6>
        </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item flex-row-sb">
              <input type="text" value="Description"></input>
            </li>
          </ul>
          <div className="modal-footer">
            <button type="button" className="btn btn-danger" data-dismiss="modal">Check In</button>
          </div>
        {/* end chicken request */}
        {/* End testing */}
      </div>
    );
  }
}

