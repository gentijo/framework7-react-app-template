import { Page, List, Button } from 'framework7-react';
//var FW7React = require('framework7-react');

var React = require('react');
class fw7RadioOptionsInput extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      value: this.props.value
    };
  }

  handleChange(value) {
    console.log("Radio on Change");
    this.setState({
      value: value
    }, this.props.onChange.bind(null, value));
  }

  render() {
    return (
      <div className={"list " + this.props.classes.radioList}>
        <ul >
          {this.props.options.map(opt =>
            <li key={opt.value} className={this.props.classes.radioListItem}>
              <label className={"item-radio item-content " +this.props.classes.radioLabel} id={this.props.labelId}>
                <input type="radio" name={this.props.name}
                  onChange={this.handleChange.bind(this, opt.value)}
                  onClick={this.handleChange.bind(this, opt.value)}
                  onBlur={this.props.onBlur.bind(null, this.state.value)}
                  aria-labelledby={this.props.labelId}
                  checked={this.state.value === opt.value}
                  className={this.props.classes.radio}
                  required={this.props.required
                    ? 'required'
                    : undefined}
                />
                {/*- Radio icon --*/}
                <i className="icon icon-radio" onFocus={this.handleChange.bind(this, opt.value)}></i>
                <div className="item-inner">
                  <div className="item-title">{opt.text}</div>
                </div>
              </label>
            </li>
          )}
        </ul>
      </div>
    )
  }
}

fw7RadioOptionsInput.defaultProps = {
  classes: {},
  name: '',
  value: '',
  options: [],
  onChange: () => { },
  onBlur: () => { }
};

module.exports = fw7RadioOptionsInput;