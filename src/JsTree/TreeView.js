import React, {Component} from 'react';
import TreeView from './TreeViewLibrary.js';
import './TreeView.css'

export class Tree extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: {

        plugins:['checkbox'],

        core: {
          data: [{ "id": "a_1", "parent": "#", "text": "123" },
          { "id": "a_1_1", "parent": "a_1", "text": "123" },
  
          { "id": "a_1_1_1", "parent": "a_1_1", "text": "123" },
          { "id": "a_1_1_1_3", "parent": "a_1_1_1", "text": "123" },
          { "id": "a_1_1_1_3_1", "parent": "a_1_1_1_3", "text": "1231" },
          { "id": "a_1_1_1_3_2", "parent": "a_1_1_1_3", "text": "1231232" },
  
          { "id": "a_1_1_2", "parent": "a_1_1", "text": "123" },
          { "id": "a_1_1_2_1", "parent": "a_1_1_2", "text": "6월" },
          { "id": "a_1_1_2_2", "parent": "a_1_1_2", "text": "9월" },
  
          { "id": "a_1_1_3", "parent": "a_1_1", "text": "123" },
          { "id": "a_1_1_3_1", "parent": "a_1_1_3", "text": "6월" },
          { "id": "a_1_1_3_2", "parent": "a_1_1_3", "text": "9월" },
  
          { "id": "a_1_2", "parent": "a_1", "text": "123" },
          { "id": "a_1_2_1", "parent": "a_1_2", "text": "고3문과" },
  
          { "id": "a_1_2_1_1", "parent": "a_1_2_1", "text": "6월" },
          { "id": "a_1_2_1_1_1", "parent": "a_1_2_1_1", "text": "임시1" },
          { "id": "a_1_2_1_1_2", "parent": "a_1_2_1_1", "text": "임시2" },
  
          { "id": "a_1_2_1_2", "parent": "a_1_2_1", "text": "9월" },
          { "id": "a_1_2_1_2_3", "parent": "a_1_2_1_2", "text": "임시1" },
          { "id": "a_1_2_1_2_4", "parent": "a_1_2_1_2", "text": "임시2" },
          { "id": "a_1_2_1_2_4_1", "parent": "a_1_2_1_2_4", "text": "임시2-1" },
          { "id": "a_1_2_1_2_4_1_1", "parent": "a_1_2_1_2_4_1", "text": "임시2-2" },
  
          { "id": "a_1_2_1_3", "parent": "a_1_2_1", "text": "수능" },
          { "id": "a_1_2_1_3_4", "parent": "a_1_2_1_3", "text": "임시" },
  
          { "id": "a_1_2_2", "parent": "a_1_2", "text": "고3이과" },
          { "id": "a_1_2_2_3", "parent": "a_1_2_2", "text": "수능" },
  
          { "id": "a_1_2_3", "parent": "a_1_2", "text": "고3공통" },
          { "id": "a_1_2_3_3", "parent": "a_1_2_3", "text": "수능" },

          { "id": "a_2", "parent": "#", "text": "공공기관 모의고사2" },
          { "id": "a_2_1", "parent": "a_2", "text": "평가원" },
          { "id": "a_3", "parent": "#", "text": "공공기관 모의고사3" },
          { "id": "a_3_1", "parent": "a_3", "text": "평가원" },
          { "id": "a_4", "parent": "#", "text": "공공기관 모의고사4" },
          { "id": "a_4_1", "parent": "a_4", "text": "평가원" },
          { "id": "a_5", "parent": "#", "text": "공공기관 모의고사5" },
          { "id": "a_5_1", "parent": "a_5", "text": "평가원" },
          { "id": "a_6", "parent": "#", "text": "공공기관 모의고사6" },
          { "id": "a_6_1", "parent": "a_6", "text": "평가원" }
          ],
          'check_callback': true,
          'themes': 'default',
          'dots': false,
          'icons': false
        }
      },
      selected: [],
    };
  }

  handleChange(e, data) {
    this.setState({
      selected: data.selected,
    })
  }

  render() {
    const data = this.state.data;

    return (
      <div className='jstree_wrap ScrollBox'>
        <ul id='jstree'>
          <TreeView treeData={data} onChange={(e, data) => this.handleChange(e, data)} />
        </ul>
      </div>
    );
  }
}