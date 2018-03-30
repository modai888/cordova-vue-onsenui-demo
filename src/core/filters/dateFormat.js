// 日期格式化过滤器
import { formatDate } from '../utils'

var gsDateFormateFilter = function (date, fmt) {
    return formatDate(date, fmt)
};

export default {
    name: 'gs-filter',
    filter: gsDateFormateFilter
};