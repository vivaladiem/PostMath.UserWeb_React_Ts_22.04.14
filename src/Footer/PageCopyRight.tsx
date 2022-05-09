//PageCopyRight.tsx

import React, { Component } from 'react';
import './PageCopyRight.css'

/**
 * 이    름 : PageCopyRight
 * 작 성 자 : 라강인
 * 설    명 : 
 */

class PageCopyRight extends Component {

  render() {
    return (
      <article className='PageCopyRight'>
        <header className="PageCopyRight__Head">
          <h2>저작권관련고지</h2>
        </header>
        <div className="PageCopyRight__Terms">
          <h3 className='PageCopyRight__Article'>1. 수학문제에도 저작권이 있습니다. </h3>
          <ul>
            <li className="PageCopyRight__Paragraph">
              수학문제 및 그 문제배열 또한 저작권법의 보호를 받는 저작물에 해당합니다.
              즉, 시중 출판사의 수학문제집 또는 고교 내신 시험지 등에 포함된 수학문제들 중 일부는 제3자의 창작물이며, 이를 저작권자의 허락 없이 이용하는 경우
              저작권법에 위배되어 5년 이하의 징역 또는 5천만원 이하의
              벌금에 처해질 수 있습니다. (저작권법 제136조 제1항 제1호)
            </li>
            <li className="PageCopyRight__Paragraph">
              다만, 영리를 목적으로 하지 아니하고 개인적으로 이용하거나 가정 및 이에 준하는 한정된 범위에서 이용하기 위해 시중에 공개된 수학문제를 복제하는 것은
              예외적으로 허용됩니다. 따라서 귀하가 수학문제를
              MY-DB에 등록하고 개인적으로 이용하는 것은 가능합니다.
            </li>
          </ul>
          <br></br>

          <h3 className='PageCopyRight__Article'>2. 귀하는 MY-DB를 이용하면서 아래 사항을 준수하여야 합니다. </h3>
          <ul>
            <li className="PageCopyRight__Paragraph">
              ㆍ 귀하는 MY-DB에 등록한 수학문제를 학습 등 개인적인 목적으로만 이용하여야 하며 이를 영리 목적으로 이용할 수 없습니다. 예컨대 해당 수학문제를
              무단으로 복제·공중송신·배포하거나 기타 어떠한 방법으로든 외부에 공개 또는 유출해서는 안됩니다.
            </li>
            <li className="PageCopyRight__Paragraph">
              ㆍ 귀하는 타인에게 “수학비서”의 아이디 또는 비밀번호를 공유하거나 타인으로 하여금 어떠한 방법로든 귀하의 MY-DB를 열람하게 해서는 안됩니다.
            </li>
            <li className="PageCopyRight__Paragraph">
              ㆍ 귀하는 자신이 창작한 수학문제는 상기 제한을 받지 않고 자유롭게 이용할 수 있습니다. 그러나 타인이 창작한 수학문제를 자신이 창작한 수학문제인
              것처럼 위장 등록해서는 안됩니다.
            </li>
            <li className="PageCopyRight__Paragraph">
              귀하께서 상기 사항을 준수하지 않을 경우 타인의 저작권을 침해할 목적으로 회원가입한 것으로 간주되어 아이디 삭제, 서비스 이용계약의 해지 등의
              제재조치가 가해질 수 있습니다.
            </li>
            <li className="PageCopyRight__Paragraph">
              아울러 귀하의 책임 있는 사유로 저작권 관련 분쟁이 발생할 경우, 그에 관한 민·형사상 책임은 전적으로 귀하가 부담하며, POSTMATH는 어떠한
              책임도 부담하지 않음을 알려드립니다.
            </li>
          </ul>
          <br></br>

          <h3 className='PageCopyRight__Article'>POSTMATH는 저작권을 지키기 위해 다음 노력을 수반합니다.</h3>
          <ul>
            <li className="PageCopyRight__SubArticle">
              1. “수학비서”의 MY-DB에 수학문제를 등록하면, 이를 등록한 사용자의 정보가 특정될 수 있는 HASH값이 함께 저장됩니다.
            </li>
            <li className="PageCopyRight__SubParagraph">
              만약 이용자가 “수학비서”에 등록된 수학문제를 HWP로 다운받아 무단 공유할 경우, 각 문제에는 해당 이용자의 신분이 특정되므로 저작권자의 권리를
              신속하게 구제할 수 있습니다.
            </li>
            <li className="PageCopyRight__SubArticle">
              2. “수학비서”의 아이디 및 비밀번호는 공유가 불가합니다.
            </li>
            <li className="PageCopyRight__SubParagraph">
              이용자가 아이디 및 비밀번호를 공유하는 것이 적발될 경우, 그 즉시 아이디 삭제, 서비스 이용계약의 해지 등 제재조치를 가하여 저작권 침해로 인한 손해
              발생을 최소화합니다.
            </li>
            <li className="PageCopyRight__SubArticle">
              3. 이용자는 자신이 창작한 수학문제를 정식으로 등록할 수 있습니다.
            </li>
            <li className="PageCopyRight__SubParagraph">
              이용자는 “수학비서” 내에서 자신이 창작한 문제를 정식으로 등록할 수 있습니다. POSTMATH는 이용자의 저작권을 존중하며, 저작권을 등록할 경우
              해당 수학문제의 이용량에 비례하여 저작권료를 지급합니다. 또한 이용자가 제3자의 2차 창작을 허용할 경우, 관련 문제의 최대 80%의 저작권료를 지급
              받을 수 있습니다. 2차 창작물의 저작권료에 대한 기준은 추후 공지될 예정입니다.
            </li>
          </ul>
          <br></br>
        </div>
      </article>
    )
  }
}

export default PageCopyRight;