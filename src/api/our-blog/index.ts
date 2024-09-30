import { IBoardSearchRequest } from 'api/board/interfaces/request';
import { IBoardSearchSchema } from 'api/board/interfaces/response';
import { IRespPagination, IResponse } from 'api/common.interface';

import axios from 'utils/axios';

export const getOurBlog = async (req: IBoardSearchRequest) => {
  try {
    const res = await axios.get<IBoardSearchRequest, IResponse<IRespPagination<IBoardSearchSchema>>>(`/our-blog`, { params: req });
    return res.data;
  } catch (error) {
    throw error;
  }
};
