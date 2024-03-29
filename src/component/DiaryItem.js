//작성된 일기 리스트(아이템)을 보여줄 컴포넌트
import React from 'react';
import {useNavigate} from 'react-router-dom';
import './DiaryItem.css';
import { getEmotionImgById } from '../util';
import Button from './Button';

const DiaryItem = ({id, emotionId, content, date}) => {
    const navigate = useNavigate();
    const goDetail = () => {
        //이미지 색션 클릭 시 해당 일기를 상세조회
        navigate('/diary/${id}');
    };
    //버튼 색션 = 해당 일기의 Edit 페이지로 이동(추가적인 기능으로 수정하기)
    const goEdit = () => {
        navigate('/edit/${id}');
    };

    return (
        <div className="DiaryItem">
            <div
                onClick={goDetail} //랜더링할 이미지 색션
                className={['img_section', 'img_section_${emotionId}'].join('')}
            >
                <img alt={'emotion${emotionId}'} src={getEmotionImgById(emotionId)} />
            </div>
            {/*일기 정보 색션, 클릭시 일기 상세 조회 Diary 페이지로 이동 */}
            <div onClick={goDetail} className="info_section">
                <div className="date_wrapper">
                    {/*일기 작성일 표기, 문자열 date 숫자형 Date객체로 변환해서 넣음 */}
                    {new Date(parseInt(date)).toLocaleDateString()}
                </div>
                {/* 일기 내용은 25자까지만 표시 */}
                <div className="content_wrapper">{content.slice(0, 25)}</div>
            </div>
            <div className="button_section">
                <Button onClick={goEdit} text={'수정하기'} />
            </div>
        </div>
    );
};

//React.memo를 이용해 props 기준으로 최적화
export default React.memo(DiaryItem);