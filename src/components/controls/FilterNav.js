import React from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';

class FilterNav extends React.Component {
  render() {
    const {title} = this.props;
    const horns = [1,2,3,100,'All'];
    return(
      <Dropdown>
        <DropdownButton id="dropdown-item-button" title={title} >
          {
            horns.map( element =>
              <Dropdown.Item as="button" onClick={this.props.updateHornValue}
                value={element}>
                {( element === 1 ) ? `${element} horn` : `${element} horns`}</Dropdown.Item> )
          }
        </DropdownButton>
      </Dropdown>
    );
  }
}
export default FilterNav;
