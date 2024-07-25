import React from 'react'
import Paragraph from '../../typography/Paragraph/Paragraph'
import cn from 'classnames';
import exclemation from '../../assets/img/exclemation.svg'
import './exclemation.less';

export default function Exclemation(props) {
    return (
        <div className={cn("exclemation", props.isRight && "right")}>
            <Paragraph>
                <span className="exclemation-featured">{props.text[0]}</span>{" "}
                <span>{props.text[1]}</span>
            </Paragraph>
            <div className="exclemation-bg" style={{ backgroundImage: `url('${exclemation}')` }} />
        </div>
    )
}
