import { useMutation, useQueryClient } from '@tanstack/vue-query';
import { useRouter } from 'vue-router';
import { noticeDetailInsertApi } from '../../api/notice/noticeDetailInsertApi';

export const useNoticeDetailInsertMuation = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  return useMutation({
    mutationFn: () => noticeDetailInsertApi(),
    mutationKey: ['noticeInsert'],
    onSuccess: () => {
      router.go(-1);
      queryClient.invalidateQueries({
        queryKey: ['noticeList'],
      });
    },
  });
};
