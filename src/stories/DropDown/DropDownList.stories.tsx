import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import DropDownList from './DropDownList';

const items = ["파일1", "파일2", "파일3"];

const onSelect = (index: number) => {
    if (index >= 0) {
        alert(index + '번 항목 - ' +  items[index] + " 선택");
    } else {
        alert("선택 취소");
    }
}

export default {
    title: "드롭다운/리스트드롭다운",
    component: DropDownList

} as ComponentMeta<typeof DropDownList>

export const 리스트드롭다운: ComponentStory<typeof DropDownList> = () => <DropDownList items={items} label="파일" onSelect={onSelect} />;