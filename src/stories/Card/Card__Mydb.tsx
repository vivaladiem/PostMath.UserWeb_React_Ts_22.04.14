import React, { Component } from 'react'
import Card from './Card'
import Card__Header_a from './Card__Header_a';
import Card__Body_a from './Card__Body_a';
import Card__Footer_a from './Card__Footer_a'

class Card__Mydb extends Component {

  render() {
    let DbstageData: (1 | 2 | 3 | 4 | 5) = 3;
    return (
      <>
        <Card
          header={<Card__Header_a
            folder={1}
            stage={DbstageData}
            id_data='h_id'
          />}
          body={<Card__Body_a
            title={'TITLE'}
            thumbnail={'img/typo_img.png'}
          />}
          footer={<Card__Footer_a
            stage={DbstageData}
          />}
        />
      </>
    )
  }
}

export default Card__Mydb;