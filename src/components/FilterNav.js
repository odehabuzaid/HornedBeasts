import React from 'react';

import { DropdownButton, Dropdown } from 'react-bootstrap';

class FilterNav extends React.Component {
  render() {
    return(
      <Dropdown>
        <DropdownButton id="dropdown-item-button" title="Number of Horns" >
          <Dropdown.Item as="button" onClick={this.props.updateHornValue} value={1}>1</Dropdown.Item>
          <Dropdown.Item as="button" onClick={this.props.updateHornValue} value={2}>2</Dropdown.Item>
          <Dropdown.Item as="button" onClick={this.props.updateHornValue} value={3}>3</Dropdown.Item>
          <Dropdown.Item as="button" onClick={this.props.updateHornValue} value={100}>100</Dropdown.Item>
          <Dropdown.Item as="button" onClick={this.props.updateHornValue} value={'All'}>All</Dropdown.Item>
        </DropdownButton>
      </Dropdown>
    );
  }
}

export default FilterNav;
