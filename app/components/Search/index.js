import React from 'react';
import Autocomplete from 'react-autocomplete';
import styled from 'styled-components';

const SearchWrapper = styled.div`
  line-height: 40px;
  margin-top: -2px;
  position: absolute;
  top: 0;
  left: 240px;
  
  @media screen and (max-width: 850px) {
    left: 48px;
  }
  
  > * {
    input {
      outline: 0;
      min-width: 315px;
      padding: 6px;
      color: #bdbdbd;
      background-color: #333;
      border-radius: 8px;
      border: 1px solid #53a245;
      font-size: 12px;
      display: block;
      margin-top: 8px;
    }
    
    .item {
      padding: 8px 5px;
      font-size: 12px;
      color: #bdbdbd;
      text-decoration: none;
      display: block;
      word-break: break-all;
      border: none;
      background-color: inherit !important;
      cursor: pointer;
      
      &:hover {
        background-color: rgba(255,255,255,.3) !important;
      }
    }
    
    @media screen and (max-width: 850px) {
      input {
        min-width: inherit !important;
      }
    }
  }
`;

const MenuStyle = {
  width: '100%',
  borderRadius: '2px',
  lineHeight: '12px',
  backgroundColor: '#333',
  border: '1px solid #fff',
  marginLeft: '3px',
  marginTop: '5px',
  maxHeight: '320px',
};

class Search extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };
  }

  render() {
    return (
      <SearchWrapper>
        <Autocomplete
          inputProps={{ placeholder: 'başlık, #entry ya da @yazar' }}
          menuStyle={MenuStyle}
          items={[
            { id: 'foo', label: 'foo' },
            { id: 'bar', label: 'bar' },
            { id: 'baz', label: 'baz' },
          ]}
          shouldItemRender={(item, value) => item.label.toLowerCase().indexOf(value.toLowerCase()) > -1}
          getItemValue={(item) => item.label}
          renderItem={(item, highlighted) =>
            (<div className={'item'} key={item.id} style={{ backgroundColor: highlighted ? '#eee' : 'transparent' }}>
              {item.label}
            </div>)
          }
          value={this.state.value}
          onChange={(e) => this.setState({ value: e.target.value })}
          onSelect={(value) => this.setState({ value })}
        />
      </SearchWrapper>
    );
  }
}

export default Search;
