import React from 'react'
import { Row, Col } from 'react-bootstrap';
import { Headline2 } from '../../../typography/Headlines/Headlines';
import Image from '../../../components/Image/Image';
import './section.less';
import Quote from '../../../components/Quote/Quote';
import Exclemation from '../../../components/Exclemation/Exclemation';
import Video from '../../../components/Video/Video';
import { Description } from '../CaseStudyDetails';

export default function Section(props) {
    return (
        <div className="section">
            {props.span ?
                <Row>
                    <Col xl={{ span: props.span, offset: 2 }} lg={props.span + 1} md={props.span + 2}>
                        {props.left.map(l => (
                            <div className="section-centered-wrapper">
                                <div className="section-title">
                                    <span className="section-number">{props.number}</span>
                                    <Headline2>{l.title}</Headline2>
                                </div>

                                {l.description.map(d => (<Description description={d} className={"section-description"} small />))}

                                {l.img && <Image {...l.img} isLeft />}
                                {l.quote && <Quote {...l.quote} noOffset />}
                                {l.exclemation && <Exclemation {...l.exclemation} />}
                            </div>
                        ))}
                    </Col>

                    <Col xl={12 - 2 - props.span} lg={12 - 2 - props.span + 1} md={12 - 2 - props.span}>
                        {props.right.map(r => (
                            <div className="section-centered-wrapper">
                                {r.img && <Image {...r.img} isRight />}
                                {r.quote && <Quote {...r.quote} noOffset />}
                                {r.exclemation && <Exclemation {...r.exclemation} isRight />}
                            </div>
                        ))}
                    </Col>
                    <Col xs={12}>
                        {props.img && <Image {...props.img} />}
                        {props.video && <Video {...props.video} />}
                        {props.quote && <Quote {...props.quote} />}
                        {props.exclemation && <Exclemation {...props.exclemation} />}
                    </Col>
                </Row> :
                <Row>
                    <Col xl={{ span: 8, offset: 2 }}>
                        {props.title && <div className="section-title">
                            <span className="section-number">{props.number}</span>
                            <Headline2>{props.title}</Headline2>
                        </div>
                        }
                        {props.description && props.description.map(d => (<Description description={d} className={"section-description"} small />))}
                    </Col>

                    <Col xs={12}>
                        {props.img && <Image {...props.img} />}
                        {props.video && <Video {...props.video} />}
                        {props.quote && <Quote {...props.quote} />}
                        {props.exclemation && <Exclemation {...props.exclemation} />}
                    </Col>
                </Row>
            }
        </div>
    )
}
