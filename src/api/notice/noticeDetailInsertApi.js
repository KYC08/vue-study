import axios from 'axios';
import { Notice } from '../api';

export const noticeDetailInsertApi = async () => {
  const textData = {
    title: detailValue.value.title,
    context: detailValue.value.content,
    loginId: userInfo.user.loginId,
  };
  await axios.post(Notice.InsertNotice, textData);
};
