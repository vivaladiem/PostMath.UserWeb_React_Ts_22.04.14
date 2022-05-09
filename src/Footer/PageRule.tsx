//PageRule.tsx

import React, { Component } from 'react'
import './PageRule.css'

/**
 * 이    름 : PageRule
 * 작 성 자 : 라강인
 * 설    명 : 
 */

class PageRule extends Component {

  render() {
    return (
      <article className='PageRule'>
        <header className="PageRule__Head">
          <h1>“POST MATH 1.0” 이용약관</h1>
        </header>

        <div className="PageRule__Terms">
          <h3 className='PageRule__Article'>제 1조 목적</h3>
          <p className='PageRule__Paragraph'>본 약관은 주식회사 포스트매스(이하 “회사”)가 운영하는 웹 사이트 “수학비서”(https://www.[***].com) 및 모바일 어플리케이션 “수학비서”에서 제공하는 유료서비스
            “POST MATH 1.0”(이하 “본 서비스”)을 이용함에 있어 “회사”와
            “회원” 간의 권리∙의무 및 책임사항을 규정함을 목적으로 합니다.
          </p>
          <br></br><br></br>

          <h3 className='PageRule__Article'>제 2조 정의</h3>
          <ul>
            <li className="PageRule__SubArticle">
              ① 본 약관에서 사용하는 용어의 정의는 아래와 같습니다.
            </li>
            <li className="PageRule__SubParagraph">
              1. “콩”은 “본 서비스”의 이용요금을 결제할 때 사용할 수 있는 “회사”가 발행한 전자적 증표 또는 그 증표에 관한 정보를 말하며, 그 명칭은 “회사”의 결정에 따라 변경될 수
              있습니다.
            </li>
            <li className="PageRule__SubArticle">
              ② 본 약관에서 사용하는 용어의 정의는 별도로 정의하지 않는 한 “기본 이용약관”에 기재된 바와 같습니다.
            </li>
          </ul>
          <br></br><br></br>

          <h3 className='PageRule__Article'>제 3조 서비스의 내용</h3>
          <ul>
            <li className="PageRule__SubArticle">
              ① “본 서비스”는 다음 각 호를 내용으로 합니다
            </li>
            <li className="PageRule__SubParagraph">
              1. DB화 서비스
              : OCR(Optical Character Reader, 광학적 문자 판독장치) 기술 등을 통해 “수학 자료”들을 변환함과 동시에, 메타정보의 자동 입력 등을 통하여
              개인 맞춤형 DB (Database, 데이터베이스)를 구축해 주는 서비스
            </li>
            <li className="PageRule__SubParagraph">
              2. 출제기 서비스(수학 문제 통계 서비스): 개인 맞춤형 DB 내 수집된 “수학 자료”들을 출처정보, 유형정보, 기타 메타정보들을 통해 검색∙정렬할 수 있는 기능, 폴더 단위로
              분류하여 관리할 수 있는 기능, 유사 문제를 검색∙추가∙교체할 수 있는 기능 등을 제공하는 서비스
            </li>
            <li className="PageRule__SubArticle">
              ② “본 서비스”에서 제공하는 개인 맞춤형 DB의 종류는 아래 각 호와 같습니다.
            </li>
            <li className="PageRule__SubParagraph">
              1. PO-DB: 일반 공중에게 이용 허락이 가능한 “수학 자료”의 DB로서, “회사”가 작성하여 제공하는 DB입니다.
            </li>
            <li className="PageRule__SubParagraph">
              2. MY-DB: “회원”이 개인적으로 보유한 “수학 자료”를 본 서비스를 이용하여 DB화시킨 것을 의미합니다.
              “회원”이 저작권을 보유한 “수학 자료”는 PO-DB에 등록하여 수익화 할 수 있으며, 이에 대한 구체적인 사항은 별도 이용약관에 따릅니다.
            </li>
            <li className="PageRule__SubArticle">
              ③ “회원”은 타인의 “MY-DB”를 이용하거나, 타인으로 하여금 “회원” 본인의 “MY-DB”를 이용하게 할 수 없습니다.
            </li>
          </ul>
          <br></br><br></br>

          <h3 className='PageRule__Article'>제 4조 서비스의 이용계약</h3>
          <ul>
            <li className="PageRule__SubArticle">
              ① "회사”는 “회원”이 “본 서비스”의 거래 조건을 정확하게 이해하고 실수나 착오 없이 거래할 수 있도록 “본 서비스”의 신청 초기화면에 “기본 이용약관” 및 본 약관을
              게시합니다.
            </li>
            <li className="PageRule__SubArticle">
              ② “회원”이 “기본 이용약관” 및 본 약관에 동의하고 “본 서비스”의 이용을 신청한 경우, “회사”는 아래 각 호에 해당하지 않는 한 이를 승낙합니다.
            </li>
            <li className="PageRule__SubParagraph">
              1. 1. 신청내용에 허위, 기재누락, 오기가 있는 경우
            </li>
            <li className="PageRule__SubParagraph">
              1. 2. 만 19세 미만의 미성년자가 법정대리인의 동의 없이 신청한 경우
            </li>
            <li className="PageRule__SubParagraph">
              1. 3. 기타 “회원”의 이용신청을 승낙하는 것이 “회사”의 기술상∙영업상 지장이 있다고 판단되는 경우
            </li>
            <li className="PageRule__SubArticle">
              ③ “본 서비스” 이용계약의 성립시기는 전항에 따른 “회사”의 승낙이 “사이트 등”을 통해 “회원”에게 도달한 시점으로 합니다. 이때 “회사”의 승낙에는 “회원”의 이용신청 내용에
              대한 확인 및 이용신청의 정정∙취소 등에 관한 정보를 포함하여야 합니다.
            </li>
            <li className="PageRule__SubArticle">
              ④ “회원”은 본 약관에서 정한 바에 따라 이용요금을 결제한 후 “본 서비스”를 이용할 수 있습니다.
            </li>
          </ul>
          <br></br><br></br>

          <h3 className='PageRule__Article'>제 5조 결제수단</h3>
          <ul>
            <li className="PageRule__SubArticle">
              “회원”은 아래 각 호의 방법으로 “본 서비스”의 이용요금을 결제할 수 있습니다.
            </li>
            <li className="PageRule__SubParagraph">
              1. 전용상품권 “콩” (이벤트 콩 포함)
            </li>
            <li className="PageRule__SubParagraph">
              2. 기타 “회사”가 정한 결제수단
            </li>
          </ul>
          <br></br><br></br>

          <h3 className='PageRule__Article'>제 6조 회원체계 및 가격 안내</h3>
          <ul>
            <li className="PageRule__SubArticle">“본 서비스”의 회원체계 및 가격은 아래와 같습니다.</li>
            <li className="PageRule__SubArticle">
              ① DB 사용료(DB를 통한 ‘출제기 서비스’ 사용료) :
            </li>
            <li className="PageRule__SubParagraph">
              “회원”은 “회사”에게 DB 사용료를 지급하고 PO-DB 및 MY-DB에 저장된 “수학 자료”들을 검색·정렬하는 ‘출제기 서비스’를 이용할 수 있습니다. 이때 PO-DB는 별도 DB화
              비용을 지급할 필요 없이 기본 제공됩니다. 구체적인 DB 사용료는 아래와 같습니다.
            </li>
            <li className="PageRule__SubParagraph">
              1. 월간플랜 미 가입한 회원 :
            </li>
            <li className="PageRule__SubParagraph">
              <table className="tg">
                <thead>
                  <tr>
                    <th className="tg-3uwl">항목</th>
                    <th className="tg-3uwl">사용료</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="tg-c3ow">PO-DB를 통한 '출제기 서비스'의 사용료</td>
                    <td className="tg-c3ow">문제 1개당 3콩</td>
                  </tr>
                  <tr>
                    <td className="tg-c3ow">MY-DB를 통한 '출제기 서비스'의 사용료</td>
                    <td className="tg-c3ow">문제 1개당 1콩</td>
                  </tr>
                </tbody>
              </table>
            </li>
            <li className="PageRule__SubParagraph">
              2. 월간플랜 가입한 회원 :
            </li>
            <li className="PageRule__SubParagraph">
              <table className="tg">
                <thead>
                  <tr>
                    <th className="tg-3uwl">항목</th>
                    <th className="tg-3uwl">사용료</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="tg-c3ow">PO-DB를 통한 '출제기 서비스'의 사용료</td>
                    <td className="tg-c3ow">문제 1개당 1콩</td>
                  </tr>
                  <tr>
                    <td className="tg-c3ow">MY-DB를 통한 '출제기 서비스'의 사용료</td>
                    <td className="tg-c3ow">무료</td>
                  </tr>
                </tbody>
              </table>
            </li>
            <li className="PageRule__SubArticle">② DB화 비용(DB화 서비스 사용료):</li>
            <li className="PageRule__SubParagraph">“회원”은 “회사”에게 DB화 비용을 지급하고 “수학 자료”를 MY-DB에 DB화할 수 있습니다. 구체적인 DB화 비용은 아래와 같습니다.
            </li>
            <li className="PageRule__SubParagraph">1. PDF 파일을 DB화하는 경우:</li>
            <li className="PageRule__Sub2-Paragraph">가. 문제 또는 해설의 크기에 따라 소모되는 포인트의 양이 달라집니다. 이에 대한 구체적인 기준은 본 약관 하단의 ‘PDF 파일 DB화
              시 크기 별 소모 콩’ 참고하시기 바랍니다.</li>
            <li className="PageRule__Sub2-Paragraph">나. 문제와 해설은 각각 콩이 소모됩니다.</li>
            <li className="PageRule__Sub2-Paragraph">다. 그림을 교체하는 경우 교체하는 그림 1개당 1콩이 소모됩니다.</li>
            <li className="PageRule__Sub2-Paragraph">라. 문제가 없는데 해설만 DB화하는 것은 불가능합니다.</li>
            <li className="PageRule__SubParagraph">2. HWP 파일을 DB화하는 경우</li>
            <li className="PageRule__Sub2-Paragraph">가. 문제 또는 해설의 크기에 관계없이 고정적으로 2콩이 소모됩니다.</li>
            <li className="PageRule__Sub2-Paragraph">나. 해설에 별도 콩이 소모되지 않습니다. 즉 문제 1개당 2콩이 소모되며, 문제 1개 + 해당 문제에 대한 해설도 2콩이 소모됩니다.
            </li>
            <li className="PageRule__Sub2-Paragraph">다. 문제가 없는데 해설만 DB화하는 것은 불가능합니다.</li>
            <li className="PageRule__SubParagraph">3. 월간플랜에 가입하신 회원에 대해서는 DB화 비용에 소모된 콩 개수의 10%를 콩으로 적립해 드립니다.</li>
            <li className="PageRule__SubArticle">③ 월간플랜 가입비용:</li>
            <li className="PageRule__SubParagraph">1. “회원”은 월간플랜에 가입할 수 있습니다. 월간플랜에 가입할 경우, 제1항 및 제2항에 따라 보다 할인된 가격 또는 적립 혜택을 받을 수
              있습니다.</li>
            <li className="PageRule__SubParagraph">2. 월간플랜에 가입하는 비용은 다음과 같습니다.</li>
            <li className="PageRule__Sub2-Paragraph">가. 최초 가입 시 첫 월에는 600콩이 소모되며, 이후 매월 900콩⇒450콩(50% 할인)이 소모됩니다.</li>
            <li className="PageRule__Sub2-Paragraph">나. 위 가. 목에 있어 ‘최초 가입 시’란 월간플랜 해지 후 다시 가입하는 경우도 포함합니다. 따라서 이전에 월간플랜에
              가입·이용하신 경험이 있으시더라도, 월간플랜 중단·해지 후 다시 월간플랜에 가입하시는 경우 첫 월에 600콩을 지불하셔야 합니다.</li>
            <li className="PageRule__SubParagraph">3. 제2호에 따라 매월 지불되어야 할 콩은 “회원”이 충분한 콩을 보유하고 있는 한, 자동으로 지불됩니다.</li>
            <li className="PageRule__SubParagraph hybrid">4. 월간플랜을 이용 중인 “회원”이 보유한 “콩”이 제2호에 따라 매월 지불되어야 할 콩의 개수보다 부족한 경우, 회사는
              “회원”에게 이러한 사실을 알리며, “회원”은 회사가 이러한 통지를 하는 것에 동의합니다.
              본 항에 있어 콩이 부족하더라도 3일 간은 월간플랜이 유지되며, “회원”은 해당 3일 이내에 “콩”을 충전하여야 합니다. 3일 이내에 “콩”을 충전하지 않으면 월간플랜은 자동
              해지되고, 이후 월간플랜에 재가입할 시에는 600콩이 소모됩니다.</li>
          </ul>
          <br></br><br></br>

          <h3 className="PageRule__Article">제 7조 기본</h3>
          <ul>
            <li className="PageRule__SubArticle">① “회원”은 아래 각 호의 결제수단 중 하나를 선택하여 10,000원 단위로 “콩”을 구매할 수 있습니다(VAT 별도).</li>
            <li className="PageRule__SubParagraph">1. 폰뱅킹, 인터넷뱅킹, 메일 뱅킹 등 각종 계좌이체</li>
            <li className="PageRule__SubParagraph">2. 선불카드, 직불카드, 신용카드 등 각종 카드결제</li>
            <li className="PageRule__SubParagraph">3. 온라인 무통장 입금</li>
            <li className="PageRule__SubParagraph">4. 기타 “회사”가 정한 결제수단</li>
            <li className="PageRule__SubArticle">② 1콩은 100원의 가치를 지니고, 결제금액 10,000원당 100콩씩 충전됩니다. </li>
          </ul>
          <br></br><br></br>

          <h3 className="PageRule__Article">제 8조 자동 충전 서비스</h3>
          <ul>
            <li className="PageRule__SubArticle">“회사”는 “회원”의 선택에 따라 아래 각 호의 자동 충전 서비스를 제공할 수 있습니다.</li>
            <li className="PageRule__SubParagraph">1. 기준 하한 자동 충전 서비스: “회원”이 보유한 “콩”이 사전에 지정한 개수 이하로 하락하는 경우, 사전에 선택한 결제 수단으로
              사전에 지정한 금액이 자동 결제되어 그에 상응하는 “콩”이 충전되는 서비스</li>
            <li className="PageRule__SubParagraph">2. 월 정액 자동 충전 서비스: 매월 사전에 지정한 일자에 사전에 선택한 결제 수단으로 사전에 지정한 금액이 자동 결제되어 그에 상응하는 “콩”이
              충전되는 서비스</li>
          </ul>
          <br></br><br></br>

          <h3 className="PageRule__Article">제 9조 환불</h3>
          <ul>
            <li className="PageRule__SubArticle">① “회원”이 환불을 요청한 경우, “회사”는 아래 각 호의 기준에 따라 결제수단과 동일한 방법으로 구매한 “콩”의 환불 절차를 진행합니다.
            </li>
            <li className="PageRule__SubParagraph">1. 원칙적으로 개별 구매계약 단위로 환불할 수 있습니다.
              (ex 1) 회원께서 10,000원을 결제하시고 며칠 후에 20,000원을 결제하셨다면 각각 환불 가능합니다. 다만 10,000원 중 5,000원만의 환불은 불가능하며, 10,000원
              전부에 대한 환불을 요청하셔야 합니다.</li>
            <li className="PageRule__SubParagraph">2. 환불금액은 사용하지 않고 남은 “콩”(이하 “잔여 콩”)에 대하여 1콩당 95원(부가세 10% 및 기타 수수료 5%를 공제한 금액)으로 산정한
              금액으로 합니다.</li>
            <li className="PageRule__SubParagraph">3. 다만, 제3항에도 불구하고 이벤트 콩, 적립된 콩 등(이하 본 조에서 총칭하여 “이벤트 콩 등")은 처음부터 지급받지 않았던
              것으로 봅니다. “회원”이 이미 지급받은 이벤트 콩 등을 사용한 경우, 잔여 콩에서 그 사용한 부분만큼 차감하여 환급금액을 산정합니다.
              (ex 2) 회원께서 100,000원을 결제하셔서 1,000개의 충전 콩 및 100개의 이벤트 콩을 받으신 후 500개의 콩을 사용하셨다면, 잔여 600개의 콩 중 100개의 콩은
              이벤트 콩이므로 환불되지 않고, 나머지 500개의 콩에 대해서만 47,500원으로 환불됩니다. 이때 100개의 이벤트 콩은 더 이상 사용하실 수 없고 회수됩니다.</li>
            <li className="PageRule__SubParagraph">4. 잔여 콩이 이벤트 콩 등 미만이 된 경우 환급이 불가능합니다.
              (ex 3) 회원께서 100,000원을 결제하셔서 1,000개의 충전 콩 및 100개의 이벤트 콩을 받으신 후 1,050개의 콩을 사용하셨다면, 잔여 50개의 콩에 대해서는 환불
              요청을 하실 수 없습니다.</li>
            <li className="PageRule__SubArticle">②
              “회원”은 마지막으로 월간플랜 가입비용의 결제가 이루어진 날로부터 3일 이내에는 월간플랜을 해지하고 그 가입비용을 환급받을 수 있습니다. 월간플랜 가입은 콩으로 이루어지므로, 본 항에
              따른 월간플랜 해지 시 환급 역시 콩으로 이루어집니다. 본 항에 따라 환급된 콩은 제1항에 따라 환불 가능합니다.</li>
            <li className="PageRule__SubArticle">③
              제2항에도 불구하고, 마지막으로 월간플랜 가입비용 결제가 이루어진 날로부터 3일 이내라고 하더라도
              “본 서비스”를 이용한 경우에는 환급이 불가능합니다. 또한, 마지막으로 월간플랜 가입비용 결제가 이루어진 날로부터 3일이 경과하였다면 “본 서비스”를 이용하지 않았더라도 환급이
              불가능합니다.</li>
          </ul>
          <br></br><br></br>

          <h3 className="PageRule__Article">제 10조 이벤트 콩</h3>
          <ul>
            <li className="PageRule__SubArticle">① “회사”는 이벤트 등을 통해 무상으로 “콩”을 지급할 수 있습니다.</li>
            <li className="PageRule__SubArticle">② 제1항에 따라 지급되는 “콩”은 현금 기타 다른 결제수단으로 환급되지 않습니다.</li>
          </ul>
          <br></br><br></br>

          <h3 className="PageRule__Article">제 11조 미성년자의 계약 체결에 대한 특칙</h3>
          <ul>
            <li className="PageRule__SubArticle">① 만 19세 미만의 미성년자는 “본 서비스”를 이용하거나 전용상품권을 구매하기 위해서는 법정대리인의 동의를 얻어야 합니다.</li>
            <li className="PageRule__SubArticle hybrid">② 만 19세 미만의 미성년자가 법정대리인의 동의 없이 “본 서비스”의 이용계약이나 전용상품권 구매계약을 체결한 경우 미성년자 본인
              또는 법정대리인은 그 계약을 취소할 수 있습니다. 단, 미성년자가 성년자인 제3자의 개인정보를 이용하는 등 속임수로써 “회사”로 하여금 성년자이거나 법정대리인의 동의가 있었던 것으로
              믿게 한 경우에는 법정대리인의 동의가 없더라도 그 계약을 취소할 수 없습니다.</li>
          </ul>
          <br></br><br></br>

          <h3 className="PageRule__Article">제 12조 본 약관의 효력</h3>
          <p className="PageRule__SubArticle">본 약관의 조항과 “기본 이용약관”의 조항의 해석이 충돌하는 경우에는 본 약관의 조항이 우선합니다. 본 약관에 명시되지 아니한 사항은, “기본
            이용약관”에 따릅니다. </p>
          <br></br><br></br>

          <h3 className="PageRule__Article">부 칙</h3>
          <br></br>

          <h3 className="PageRule__Article">제1조</h3>
          <p className="PageRule__SubArticle">본 약관은 2022년 [*]월 [*]일부터 효력이 발생합니다. </p>
          <br></br>

          <h3 className="PageRule__Article">PDF 파일 DB화 시 크기 별 소모 콩</h3>
          <br></br>

          <img className="PageRule__PriceImage" src="img/img_price.png" alt="" />
        </div>
      </article>
    )
  }
}

export default PageRule